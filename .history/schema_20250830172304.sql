-- Farm2Door D1 Authentication Schema
-- Execute these commands in order

-- 1. Users table - Main user accounts and profiles
CREATE TABLE users (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    email TEXT UNIQUE NOT NULL COLLATE NOCASE,
    password_hash TEXT, -- NULL for OAuth-only accounts
    name TEXT NOT NULL,
    first_name TEXT,
    last_name TEXT,
    profile_picture TEXT, -- URL to profile image (R2 storage)
    phone TEXT,
    email_verified BOOLEAN DEFAULT FALSE,
    email_verified_at DATETIME,
    provider TEXT DEFAULT 'email' CHECK (provider IN ('email', 'google', 'microsoft', 'mixed')),
    failed_login_attempts INTEGER DEFAULT 0,
    locked_until DATETIME,
    last_login_at DATETIME,
    last_login_ip TEXT,
    preferences TEXT, -- JSON string for user preferences
    is_active BOOLEAN DEFAULT TRUE,
    is_admin BOOLEAN DEFAULT FALSE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    deleted_at DATETIME -- Soft delete
);

-- 2. Refresh tokens table - JWT refresh token management
CREATE TABLE refresh_tokens (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    user_id TEXT NOT NULL,
    token_hash TEXT NOT NULL, -- Hashed refresh token
    device_info TEXT, -- Browser/device information
    ip_address TEXT,
    expires_at DATETIME NOT NULL,
    remember_me BOOLEAN DEFAULT FALSE,
    is_revoked BOOLEAN DEFAULT FALSE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    used_at DATETIME,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

-- 3. OAuth accounts table - Social login account linking
CREATE TABLE oauth_accounts (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    user_id TEXT NOT NULL,
    provider TEXT NOT NULL CHECK (provider IN ('google', 'microsoft')),
    provider_user_id TEXT NOT NULL, -- ID from OAuth provider
    provider_email TEXT,
    provider_name TEXT,
    provider_picture TEXT,
    access_token TEXT, -- Encrypted OAuth access token
    refresh_token TEXT, -- Encrypted OAuth refresh token
    token_expires_at DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    UNIQUE (provider, provider_user_id)
);

-- 4. Email verifications table - Email verification tokens
CREATE TABLE email_verifications (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    user_id TEXT NOT NULL,
    email TEXT NOT NULL COLLATE NOCASE,
    token TEXT NOT NULL UNIQUE,
    expires_at DATETIME NOT NULL,
    verified_at DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

-- 5. Password resets table - Password reset functionality
CREATE TABLE password_resets (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    user_id TEXT NOT NULL,
    email TEXT NOT NULL COLLATE NOCASE,
    token TEXT NOT NULL UNIQUE,
    expires_at DATETIME NOT NULL,
    used_at DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

-- 6. Indexes for performance optimization
CREATE INDEX idx_users_email ON users (email);
CREATE INDEX idx_users_provider ON users (provider);
CREATE INDEX idx_users_email_verified ON users (email_verified);
CREATE INDEX idx_users_created_at ON users (created_at);
CREATE INDEX idx_users_active ON users (is_active) WHERE is_active = TRUE;

CREATE INDEX idx_refresh_tokens_user_id ON refresh_tokens (user_id);
CREATE INDEX idx_refresh_tokens_expires_at ON refresh_tokens (expires_at);
CREATE INDEX idx_refresh_tokens_token_hash ON refresh_tokens (token_hash);

CREATE INDEX idx_oauth_accounts_user_id ON oauth_accounts (user_id);
CREATE INDEX idx_oauth_accounts_provider ON oauth_accounts (provider, provider_user_id);

CREATE INDEX idx_email_verifications_user_id ON email_verifications (user_id);
CREATE INDEX idx_email_verifications_token ON email_verifications (token);
CREATE INDEX idx_email_verifications_expires_at ON email_verifications (expires_at);

CREATE INDEX idx_password_resets_user_id ON password_resets (user_id);
CREATE INDEX idx_password_resets_token ON password_resets (token);
CREATE INDEX idx_password_resets_expires_at ON password_resets (expires_at);

-- 7. Triggers for updated_at timestamps
CREATE TRIGGER update_users_timestamp 
    AFTER UPDATE ON users 
    BEGIN 
        UPDATE users SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id; 
    END;

CREATE TRIGGER update_oauth_accounts_timestamp 
    AFTER UPDATE ON oauth_accounts 
    BEGIN 
        UPDATE oauth_accounts SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id; 
    END;