// api/src/routes/auth.ts
import jwt from '@tsndr/cloudflare-worker-jwt';
import bcrypt from 'bcryptjs';
import { Hono } from 'hono';
import type { Env } from '../types/env';

// Define custom JWT payload interface
interface JWTPayload {
  id: number;
  email: string;
  iat: number;
  exp: number;
}

export const authRouter = new Hono<{ Bindings: Env }>();

// Register endpoint
authRouter.post('/register', async (c) => {
  try {
    const { email, password, firstName, lastName = 'customer' } = await c.req.json();

    // Basic validation
    if (!email || !password || !firstName || !lastName) {
      return c.json({
        success: false,
        error: 'Missing required fields',
        message: 'Email, password, first name, and last name are required'
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

    // Insert user into database
    const result = await c.env.DB.prepare(`
      INSERT INTO users (email, password_hash, first_name, last_name, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, datetime('now'), datetime('now'))
    `).bind(email, passwordHash, firstName, lastName).run();

    if (!result.success) {
      throw new Error('Failed to create user');
    }

    return c.json({
      success: true,
      message: 'User registered successfully',
      data: {
        id: result.meta.last_row_id,
        email,
        firstName,
        lastName
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

    // Get user from database
    const user = await c.env.DB.prepare(`
      SELECT id, email, password_hash, first_name, last_name, verified
      FROM users WHERE email = ?
    `).bind(email).first<any>();

    if (!user) {
      return c.json({
        success: false,
        error: 'Invalid credentials',
        message: 'Invalid email or password'
      }, 401);
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password_hash as string);
    
    if (!isPasswordValid) {
      return c.json({
        success: false,
        error: 'Invalid credentials',
        message: 'Invalid email or password'
      }, 401);
    }

    // Generate JWT tokens
    const tokenPayload: Omit<JWTPayload, 'iat' | 'exp'> = {
      id: user.id,
      email: user.email
    };

    // Calculate expiration times
    const accessTokenExpiry = Math.floor(Date.now() / 1000) + (60 * 60); // 1 hour
    const refreshTokenExpiry = Math.floor(Date.now() / 1000) + (30 * 24 * 60 * 60); // 30 days

    const accessToken = await jwt.sign(
      { 
        ...tokenPayload, 
        iat: Math.floor(Date.now() / 1000),
        exp: accessTokenExpiry 
      },
      c.env.JWT_SECRET
    );

    const refreshToken = await jwt.sign(
      { 
        ...tokenPayload, 
        iat: Math.floor(Date.now() / 1000),
        exp: refreshTokenExpiry 
      },
      c.env.JWT_REFRESH_SECRET
    );

    // Store refresh token in database
    await c.env.DB.prepare(`
      INSERT INTO refresh_tokens (user_id, token, expires_at, created_at)
      VALUES (?, ?, datetime('now', '+30 days'), datetime('now'))
    `).bind(user.id, refreshToken).run();

    return c.json({
      success: true,
      message: 'Login successful',
      data: {
        user: {
          id: user.id,
          email: user.email,
          firstName: user.first_name,
          lastName: user.last_name,
          verified: user.verified
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
    const payload = decoded.payload as JWTPayload;
    
    // Check if refresh token exists in database
    const storedToken = await c.env.DB.prepare(`
      SELECT id FROM refresh_tokens 
      WHERE token = ? AND user_id = ? AND expires_at > datetime('now')
    `).bind(refreshToken, payload.id).first();

    if (!storedToken) {
      return c.json({
        success: false,
        error: 'Invalid token',
        message: 'Refresh token is invalid or expired'
      }, 401);
    }

    // Generate new access token
    const tokenPayload: Omit<JWTPayload, 'iat' | 'exp'> = {
      id: payload.id,
      email: payload.email
    };

    const accessTokenExpiry = Math.floor(Date.now() / 1000) + (60 * 60); // 1 hour

    const newAccessToken = await jwt.sign(
      { 
        ...tokenPayload, 
        iat: Math.floor(Date.now() / 1000),
        exp: accessTokenExpiry 
      },
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
  try {
    const { refreshToken } = await c.req.json();

    if (refreshToken) {
      // Remove refresh token from database
      await c.env.DB.prepare(
        'DELETE FROM refresh_tokens WHERE token = ?'
      ).bind(refreshToken).run();
    }

    return c.json({
      success: true,
      message: 'Logout successful'
    });
  } catch (error) {
    console.error('Logout error:', error);
    return c.json({
      success: true,
      message: 'Logout successful'
    });
  }
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
    const payload = decoded.payload as JWTPayload;

    // Get user from database
    const user = await c.env.DB.prepare(`
      SELECT id, email, first_name, last_name, verified, created_at
      FROM users WHERE id = ?
    `).bind(payload.id).first<any>();

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
        firstName: user.first_name,
        lastName: user.last_name,
        verified: user.verified,
        createdAt: user.created_at
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