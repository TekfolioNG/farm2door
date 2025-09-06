// api/src/types/env.ts
export interface Env {
  // D1 Database binding
DB: D1Database

  // Environment variables
ENVIRONMENT: string
JWT_SECRET: string
JWT_REFRESH_SECRET: string
JWT_EXPIRES_IN: string
JWT_REFRESH_EXPIRES_IN: string
FRONTEND_URL: string

  // OAuth secrets (set via wrangler secret)
GOOGLE_CLIENT_ID?: string
GOOGLE_CLIENT_SECRET?: string
MICROSOFT_CLIENT_ID?: string
MICROSOFT_CLIENT_SECRET?: string
}