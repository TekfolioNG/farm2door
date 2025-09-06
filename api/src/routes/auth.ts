// api/src/routes/auth.ts
import jwt from '@tsndr/cloudflare-worker-jwt';
import bcrypt from 'bcryptjs';
import { Hono } from 'hono';
import type { Env } from '../types/env';

export const authRouter = new Hono<{ Bindings: Env }>();

// Register endpoint
authRouter.post('/register', async (c) => {
  try {
    const { email, password, name, firstName, lastName } = await c.req.json();

    // Use name if provided, otherwise combine firstName + lastName
    const fullName = name || `${firstName || ''} ${lastName || ''}`.trim();

    // Basic validation
    if (!email || !password || !fullName) {
      return c.json({
        success: false,
        error: 'Missing required fields',
        message: 'Email, password, and name are required'
      }, 400);
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return c.json({
        success: false,
        error: 'Invalid email',
        message: 'Please provide a valid email address'
      }, 400);
    }

    // Validate password strength
    if (password.length < 8) {
      return c.json({
        success: false,
        error: 'Weak password',
        message: 'Password must be at least 8 characters long'
      }, 400);
    }

    // Check if user already exists
    const existingUser = await c.env.DB.prepare(
      'SELECT id FROM users WHERE email = ?'
    ).bind(email).first();

    if (existingUser) {
      return c.json({
        success: false,
        error: 'User exists',
        message: 'User with this email already exists'
      }, 409);
    }

    // Hash password
    const saltRounds = 12;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // Insert user into database using existing schema (6 columns, 6 values)
    const result = await c.env.DB.prepare(`
      INSERT INTO users (email, password_hash, name, first_name, last_name)
      VALUES (?, ?, ?, ?, ?)
    `).bind(
      email, 
      passwordHash, 
      fullName, 
      firstName || '', 
      lastName || ''
    ).run();

    if (!result.success) {
      throw new Error('Failed to create user');
    }

    const userId = result.meta.last_row_id;

    // Update last login info for the new user
    await c.env.DB.prepare(`
      UPDATE users 
      SET last_login_at = datetime('now'),
          last_login_ip = ?
      WHERE id = ?
    `).bind(c.req.header('CF-Connecting-IP') || 'unknown', userId).run();

    // Generate JWT tokens (same as login endpoint)
    const tokenPayload = {
      id: userId,
      email,
      name: fullName,
      isAdmin: false, // New users are not admin by default
      iat: Math.floor(Date.now() / 1000)
    };

    // Calculate expiration times
    const accessTokenExpiry = Math.floor(Date.now() / 1000) + (60 * 60); // 1 hour
    const refreshTokenExpiry = Math.floor(Date.now() / 1000) + (30 * 24 * 60 * 60); // 30 days

    const accessToken = await jwt.sign(
      { ...tokenPayload, exp: accessTokenExpiry },
      c.env.JWT_SECRET
    );

    const refreshToken = await jwt.sign(
      { ...tokenPayload, exp: refreshTokenExpiry },
      c.env.JWT_REFRESH_SECRET
    );

    return c.json({
      success: true,
      message: 'User registered successfully',
      data: {
        user: {
          id: userId,
          email,
          name: fullName,
          firstName: firstName || '',
          lastName: lastName || '',
          emailVerified: false, // New users have unverified email
          isAdmin: false,
          lastLoginAt: new Date().toISOString()
        },
        accessToken,
        refreshToken
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    return c.json({
      success: false,
      error: 'Registration failed',
      message: 'An error occurred during registration'
    }, 500);
  }
});

// Login endpoint
authRouter.post('/login', async (c) => {
  try {
    const { email, password } = await c.req.json();

    // Basic validation
    if (!email || !password) {
      return c.json({
        success: false,
        error: 'Missing credentials',
        message: 'Email and password are required'
      }, 400);
    }

    // Get user from database using existing schema
    const user = await c.env.DB.prepare(`
      SELECT id, email, password_hash, name, first_name, last_name, email_verified, is_admin, is_active, last_login_at, failed_login_attempts, locked_until
      FROM users WHERE email = ? AND is_active = TRUE
    `).bind(email).first();

    if (!user) {
      return c.json({
        success: false,
        error: 'Invalid credentials',
        message: 'Invalid email or password'
      }, 401);
    }

    // Check if account is locked
    const now = new Date();
    if (user.locked_until && new Date(user.locked_until as string) > now) {
      return c.json({
        success: false,
        error: 'Account locked',
        message: 'Account is temporarily locked due to failed login attempts'
      }, 423);
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password_hash as string);
    
    if (!isPasswordValid) {
      // Increment failed login attempts
      await c.env.DB.prepare(`
        UPDATE users 
        SET failed_login_attempts = failed_login_attempts + 1,
            locked_until = CASE 
              WHEN failed_login_attempts >= 4 THEN datetime('now', '+15 minutes')
              ELSE locked_until
            END
        WHERE id = ?
      `).bind(user.id).run();

      return c.json({
        success: false,
        error: 'Invalid credentials',
        message: 'Invalid email or password'
      }, 401);
    }

    // Reset failed login attempts and update last login
    await c.env.DB.prepare(`
      UPDATE users 
      SET failed_login_attempts = 0, 
          locked_until = NULL,
          last_login_at = datetime('now'),
          last_login_ip = ?
      WHERE id = ?
    `).bind(c.req.header('CF-Connecting-IP') || 'unknown', user.id).run();

    // Generate JWT tokens
    const tokenPayload = {
      id: user.id,
      email: user.email,
      name: user.name,
      isAdmin: user.is_admin,
      iat: Math.floor(Date.now() / 1000)
    };

    // Calculate expiration times
    const accessTokenExpiry = Math.floor(Date.now() / 1000) + (60 * 60); // 1 hour
    const refreshTokenExpiry = Math.floor(Date.now() / 1000) + (30 * 24 * 60 * 60); // 30 days

    const accessToken = await jwt.sign(
      { ...tokenPayload, exp: accessTokenExpiry },
      c.env.JWT_SECRET
    );

    const refreshToken = await jwt.sign(
      { ...tokenPayload, exp: refreshTokenExpiry },
      c.env.JWT_REFRESH_SECRET
    );

    return c.json({
      success: true,
      message: 'Login successful',
      data: {
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          firstName: user.first_name,
          lastName: user.last_name,
          emailVerified: user.email_verified,
          isAdmin: user.is_admin,
          lastLoginAt: user.last_login_at
        },
        accessToken,
        refreshToken
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    return c.json({
      success: false,
      error: 'Login failed',
      message: 'An error occurred during login'
    }, 500);
  }
});

// Refresh token endpoint
authRouter.post('/refresh', async (c) => {
  try {
    const { refreshToken } = await c.req.json();

    if (!refreshToken) {
      return c.json({
        success: false,
        error: 'Missing token',
        message: 'Refresh token is required'
      }, 400);
    }

    // Verify refresh token
    const isValid = await jwt.verify(refreshToken, c.env.JWT_REFRESH_SECRET);
    
    if (!isValid) {
      return c.json({
        success: false,
        error: 'Invalid token',
        message: 'Refresh token is invalid or expired'
      }, 401);
    }

    const decoded = jwt.decode(refreshToken);
    const payload = decoded.payload as any;

    // Generate new access token
    const tokenPayload = {
      id: payload.id,
      email: payload.email,
      name: payload.name,
      isAdmin: payload.isAdmin,
      iat: Math.floor(Date.now() / 1000)
    };

    const accessTokenExpiry = Math.floor(Date.now() / 1000) + (60 * 60); // 1 hour

    const newAccessToken = await jwt.sign(
      { ...tokenPayload, exp: accessTokenExpiry },
      c.env.JWT_SECRET
    );

    return c.json({
      success: true,
      message: 'Token refreshed successfully',
      data: {
        accessToken: newAccessToken
      }
    });
  } catch (error) {
    console.error('Token refresh error:', error);
    return c.json({
      success: false,
      error: 'Token refresh failed',
      message: 'Invalid or expired refresh token'
    }, 401);
  }
});

// Logout endpoint
authRouter.post('/logout', async (c) => {
  return c.json({
    success: true,
    message: 'Logout successful'
  });
});

// Profile endpoint (requires authentication)
authRouter.get('/profile', async (c) => {
  try {
    const authHeader = c.req.header('Authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return c.json({
        success: false,
        error: 'Unauthorized',
        message: 'Access token is required'
      }, 401);
    }

    const token = authHeader.substring(7);
    
    // Verify access token
    const isValid = await jwt.verify(token, c.env.JWT_SECRET);
    
    if (!isValid) {
      return c.json({
        success: false,
        error: 'Unauthorized',
        message: 'Invalid or expired access token'
      }, 401);
    }

    const decoded = jwt.decode(token);
    const payload = decoded.payload as any;

    // Get user from database
    const user = await c.env.DB.prepare(`
      SELECT id, email, name, first_name, last_name, phone, profile_picture, 
             email_verified, is_admin, is_active, created_at, last_login_at, preferences
      FROM users WHERE id = ? AND is_active = TRUE
    `).bind(payload.id).first();

    if (!user) {
      return c.json({
        success: false,
        error: 'User not found',
        message: 'User account does not exist'
      }, 404);
    }

    return c.json({
      success: true,
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
        firstName: user.first_name,
        lastName: user.last_name,
        phone: user.phone,
        profilePicture: user.profile_picture,
        emailVerified: user.email_verified,
        isAdmin: user.is_admin,
        createdAt: user.created_at,
        lastLoginAt: user.last_login_at,
        preferences: user.preferences ? JSON.parse(user.preferences as string) : {}
      }
    });
  } catch (error) {
    console.error('Profile error:', error);
    return c.json({
      success: false,
      error: 'Unauthorized',
      message: 'Invalid or expired access token'
    }, 401);
  }
});