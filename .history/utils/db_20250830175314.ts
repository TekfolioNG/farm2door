// utils/db.ts - Database utilities for Farm2Door D1

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

