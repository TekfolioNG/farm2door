// types/auth.ts

export interface User {
id: string
email: string
name: string
firstName?: string
lastName?: string
profilePicture?: string
phone?: string
provider: 'email' | 'google' | 'microsoft'
emailVerified: boolean
createdAt: string
updatedAt: string
preferences?: UserPreferences
}

export interface UserPreferences {
theme: 'light' | 'dark' | 'system'
emailNotifications: boolean
smsNotifications: boolean
marketingEmails: boolean
language: string
currency: string
timezone: string
}

export interface LoginCredentials {
email: string
password: string
rememberMe: boolean
}

export interface SignupCredentials {
email: string
password: string
confirmPassword: string
agreeToTerms: boolean
firstName?: string
lastName?: string
}

export interface AuthResponse {
success: boolean
message?: string
user?: User
accessToken?: string
refreshToken?: string
expiresIn?: number
}

export interface AuthError {
code: string
message: string
statusCode: number
}