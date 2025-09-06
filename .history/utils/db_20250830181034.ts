// utils/db.ts - Database utilities for Farm2Door D1

// Import D1Database type from Cloudflare Workers
import type { D1Database } from '@cloudflare/workers-types'

export interface User {
id: string
email: string
password_hash?: string
name: string
first_name?: string
last_name?: string
profile_picture?: string
phone?: string
email_verified: boolean
email_verified_at?: string
provider: 'email' | 'google' | 'microsoft' | 'mixed'
failed_login_attempts: number
locked_until?: string
last_login_at?: string
last_login_ip?: string
preferences?: string
is_active: boolean
is_admin: boolean
created_at: string
updated_at: string
deleted_at?: string
}

export interface RefreshToken {
id: string
user_id: string
token_hash: string
device_info?: string
ip_address?: string
expires_at: string
remember_me: boolean
is_revoked: boolean
created_at: string
used_at?: string
}

export interface OAuthAccount {
id: string
user_id: string
provider: 'google' | 'microsoft'
provider_user_id: string
provider_email?: string
provider_name?: string
provider_picture?: string
access_token?: string
refresh_token?: string
token_expires_at?: string
created_at: string
updated_at: string
}

export interface EmailVerification {
id: string
user_id: string
email: string
token: string
expires_at: string
verified_at?: string
created_at: string
}

export interface PasswordReset {
id: string
user_id: string
email: string
token: string
expires_at: string
used_at?: string
created_at: string
}

// Helper function to get DB binding in server context
export function getDB(event: any): D1Database {
const db = event.context.cloudflare?.env?.DB
if (!db) {
    throw new Error('D1 database binding not found. Make sure your wrangler.toml is configured correctly.')
}
return db
}

// Database query helpers
export class UserRepository {
constructor(private db: D1Database) {}

async findByEmail(email: string): Promise<User | null> {
    const result = await this.db
    .prepare('SELECT * FROM users WHERE email = ? AND deleted_at IS NULL')
    .bind(email.toLowerCase())
    .first<User>()
    
    return result || null
}

async findById(id: string): Promise<User | null> {
    const result = await this.db
    .prepare('SELECT * FROM users WHERE id = ? AND deleted_at IS NULL')
    .bind(id)
    .first<User>()
    
    return result || null
}

async create(userData: Partial<User>): Promise<User> {
    const id = userData.id || crypto.randomUUID().replace(/-/g, '').toLowerCase()
    
    const result = await this.db
    .prepare(`
    INSERT INTO users (id, email, password_hash, name, first_name, last_name, 
                        profile_picture, phone, provider, preferences)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        RETURNING *
    `)
    .bind(
        id,
        userData.email?.toLowerCase(),
        userData.password_hash,
        userData.name,
        userData.first_name,
        userData.last_name,
        userData.profile_picture,
        userData.phone,
        userData.provider || 'email',
        userData.preferences ? JSON.stringify(userData.preferences) : null
    )
    .first<User>()

    if (!result) {
    throw new Error('Failed to create user')
    }

    return result
}

async updateLastLogin(userId: string, ipAddress?: string): Promise<void> {
    await this.db
    .prepare('UPDATE users SET last_login_at = CURRENT_TIMESTAMP, last_login_ip = ? WHERE id = ?')
    .bind(ipAddress, userId)
    .run()
}
}