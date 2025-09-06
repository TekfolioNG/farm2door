// api/src/index.ts
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { authRouter } from './routes/auth'
import type { Env } from './types/env'

const app = new Hono<{ Bindings: Env }>()

app.use('/*', cors({
  origin: (origin, c) => {
    // Get environment-specific frontend URL
    const frontendUrl = c.env?.FRONTEND_URL || 'http://localhost:3000'
    
    // Allow localhost for development and your frontend domains
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://localhost:5173',
      'https://farm2door.pages.dev',
      'https://farm2door.ng',        // ← ADD THIS (without www)
      'https://www.farm2door.ng',    // Your production domain (with www)
      frontendUrl                    // Environment variable
    ]
    
    // Remove duplicates and filter out empty values
    const uniqueOrigins = [...new Set(allowedOrigins.filter(Boolean))]
    
    console.log('Request origin:', origin)
    console.log('Allowed origins:', uniqueOrigins)
    
    // Allow requests with no origin (like Postman, curl, etc.)
    if (!origin) return '*'
    
    // Check if origin is explicitly allowed
    if (uniqueOrigins.includes(origin)) {
      return origin
    }
    
    // Allow any .pages.dev subdomain for Cloudflare Pages
    if (origin.endsWith('.pages.dev')) {
      return origin
    }
    
    // Allow any localhost with different ports for development
    if (origin.startsWith('http://localhost:') || origin.startsWith('https://localhost:')) {
      return origin
    }
    
    console.log('Origin not allowed:', origin)
    return null
  },
  allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowHeaders: [
    'Content-Type', 
    'Authorization', 
    'X-Requested-With',
    'Accept',
    'Origin',
    'Cache-Control',
    'X-File-Name'
  ],
  exposeHeaders: ['X-Total-Count'], // If you need to expose custom headers
  credentials: true,
  maxAge: 86400, // Cache preflight for 24 hours
}))

// Add request logging middleware for debugging
app.use('/*', async (c, next) => {
  const start = Date.now()
  const origin = c.req.header('Origin')
  const method = c.req.method
  const path = c.req.path
  
  console.log(`${method} ${path} - Origin: ${origin || 'none'}`)
  
  await next()
  
  const end = Date.now()
  console.log(`${method} ${path} - ${c.res.status} (${end - start}ms)`)
})

// Health check endpoint
app.get('/', (c) => {
  return c.json({
    success: true,
    message: 'Farm2Door API is running',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    environment: c.env?.ENVIRONMENT || 'unknown'
  })
})

// API health check with more details
app.get('/health', (c) => {
  return c.json({
    success: true,
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    environment: c.env?.ENVIRONMENT || 'unknown',
    uptime: process.uptime ? process.uptime() : 'N/A'
  })
})

// API routes
app.route('/auth', authRouter)

// 404 handler
app.notFound((c) => {
  console.log('404 - Path not found:', c.req.path)
  return c.json({
    success: false,
    error: 'Not Found',
    message: 'The requested endpoint does not exist',
    path: c.req.path
  }, 404)
})

// Error handler
app.onError((err, c) => {
  console.error('API Error:', {
    message: err.message,
    stack: err.stack,
    path: c.req.path,
    method: c.req.method,
    origin: c.req.header('Origin')
  })
  
  return c.json({
    success: false,
    error: 'Internal Server Error',
    message: c.env?.ENVIRONMENT === 'development' ? err.message : 'An error occurred',
    ...(c.env?.ENVIRONMENT === 'development' && { stack: err.stack })
  }, 500)
})

export default app