// server/api/test-db.get.ts
import { getDB } from '~/utils/db'

export default defineEventHandler(async (event) => {
try {
    const db = getDB(event)

    // Test query to check if our tables exist and are accessible
    const tablesResult = await db.prepare(`
    SELECT name FROM sqlite_master 
    WHERE type='table' AND name IN ('users', 'refresh_tokens', 'oauth_accounts', 'email_verifications', 'password_resets')
    ORDER BY name
    `).all()

    // Count users in the database
    const userCount = await db.prepare('SELECT COUNT(*) as count FROM users').first()

    return {
    success: true,
    message: 'D1 Database connection successful!',
    tables: tablesResult.results,
    userCount: userCount?.count || 0,
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
    }
} catch (error) {
    console.error('Database test error:', error)
    
    return {
    success: false,
    message: 'Database connection failed',
    error: error instanceof Error ? error.message : 'Unknown error',
    timestamp: new Date().toISOString()
    }
}
})