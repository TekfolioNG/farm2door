// api/src/index.ts
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { authRouter } from './routes/auth'
import type { Env } from './types/env'

const app = new Hono<{ Bindings: Env }>()

// CORS middleware
app.use('/*', cors({
  origin: (origin) => {
    // Allow localhost for development and your frontend domains
    const allowedOrigins = [
      'http://localhost:3000',
      'https://farm2door.pages.dev',
      'https://www.farm2door.ng', // Your production domain
    ]
    
    return allowedOrigins.includes(origin) || origin?.endsWith('.pages.dev')
  },
  allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}))

// Health check endpoint
app.get('/', (c) => {
  return c.json({ 
    success: true, 
    message: 'Farm2Door API is running',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  })
})

// API routes
app.route('/auth', authRouter)

// 404 handler
app.notFound((c) => {
  return c.json({ 
    success: false, 
    error: 'Not Found',
    message: 'The requested endpoint does not exist'
  }, 404)
})

// Error handler
app.onError((err, c) => {
  console.error('API Error:', err)
  
  return c.json({ 
    success: false, 
    error: 'Internal Server Error',
    message: process.env.ENVIRONMENT === 'development' ? err.message : 'An error occurred'
  }, 500)
})

export default app