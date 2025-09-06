// composables/useAuth.ts
import type { LoginCredentials, SignupCredentials, User } from '~/types/auth'

export const useAuth = () => {
  // State management with error handling
  const user = useState<User | null>('auth.user', () => null)
  const isLoggedIn = computed(() => !!user?.value)
  const isLoading = ref(false)
  
  // Configuration - Will point to your Workers API
  const config = useRuntimeConfig()
  const API_BASE_URL = config.public.apiBaseUrl
  
  // Token management (client-side only for now)
  const getAccessToken = (): string | null => {
    if (!process.client) return null
    
    return localStorage.getItem('access_token') || sessionStorage.getItem('access_token')
  }
  
  const setTokens = (accessToken: string, refreshToken: string, rememberMe: boolean = false) => {
    if (!process.client) return
    
    if (rememberMe) {
      localStorage.setItem('access_token', accessToken)
      localStorage.setItem('refresh_token', refreshToken)
    } else {
      sessionStorage.setItem('access_token', accessToken)
      sessionStorage.setItem('refresh_token', refreshToken)
    }
  }
  
  const clearTokens = () => {
    if (!process.client) return
    
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    sessionStorage.removeItem('access_token')
    sessionStorage.removeItem('refresh_token')
  }
  
  // API helper with automatic token handling
  const apiCall = async <T>(endpoint: string, options: any = {}): Promise<T> => {
    const token = getAccessToken()
    
    const defaultOptions = {
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers
      },
      ...options
    }
    
    try {
      return await $fetch<T>(endpoint, defaultOptions)
    } catch (error: any) {
      // Handle token expiration
      if (error.status === 401 && token) {
        const refreshed = await refreshAccessToken()
        if (refreshed) {
          // Retry the request with new token
          const newToken = getAccessToken()
          if (newToken) {
            defaultOptions.headers.Authorization = `Bearer ${newToken}`
            return await $fetch<T>(endpoint, defaultOptions)
          }
        }
      }
      throw error
    }
  }
  
  // Authentication methods
  const login = async (credentials: LoginCredentials): Promise<void> => {
    try {
      isLoading.value = true
      
      // Call your backend's /auth/login endpoint
      const response = await apiCall<{
        success: boolean
        message?: string
        data?: {
          user: User
          accessToken: string
          refreshToken: string
        }
      }>('/auth/login', {
        method: 'POST',
        body: credentials
      })
      
      if (response.success && response.data) {
        setTokens(response.data.accessToken, response.data.refreshToken, credentials.rememberMe)
        user.value = response.data.user
        
        // Check for redirect after login
        const redirectTo = process.client ? sessionStorage.getItem('auth_redirect') : null
        if (redirectTo) {
          sessionStorage.removeItem('auth_redirect')
          await navigateTo(redirectTo)
        } else {
          await navigateTo('/dashboard')
        }
      } else {
        throw new Error(response.message || 'Login failed')
      }
    } catch (error: any) {
      console.error('Login error:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }
  
  const signup = async (credentials: SignupCredentials): Promise<void> => {
    try {
      isLoading.value = true
      
      // Call your backend's /auth/register endpoint
      const response = await apiCall<{
        success: boolean
        message?: string
        data?: {
          id: string
          email: string
          name: string
          firstName: string
          lastName: string
        }
      }>('/auth/register', {
        method: 'POST',
        body: {
          email: credentials.email,
          password: credentials.password,
          name: credentials.name,
          firstName: credentials.firstName,
          lastName: credentials.lastName
        }
      })
      
      if (response.success) {
        // After successful signup, automatically log in
        await login({
          email: credentials.email,
          password: credentials.password,
          rememberMe: false
        })
        
        await navigateTo('/welcome')
      } else {
        throw new Error(response.message || 'Signup failed')
      }
    } catch (error: any) {
      console.error('Signup error:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }
  
  const socialLogin = async (provider: 'google' | 'microsoft'): Promise<void> => {
    try {
      isLoading.value = true
      
      // Store current route to redirect back after login
      if (process.client) {
        sessionStorage.setItem('auth_redirect', useRoute().fullPath)
      }
      
      // For now, show coming soon message
      // TODO: Implement OAuth endpoints in your backend
      throw new Error(`${provider} login is coming soon! Please use email signup for now.`)
      
      // Future implementation:
      // const socialLoginUrl = `${API_BASE_URL}/auth/oauth/${provider}?redirect_uri=${encodeURIComponent(window.location.origin + '/auth/callback')}`
      // await navigateTo(socialLoginUrl, { external: true })
    } catch (error: any) {
      console.error('Social login error:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }
  
  const logout = async (): Promise<void> => {
    try {
      // Call logout endpoint to invalidate tokens on server
      await apiCall('/auth/logout', { method: 'POST' })
    } catch (error) {
      console.error('Logout API error:', error)
    } finally {
      // Clear tokens and user data
      clearTokens()
      user.value = null
      
      // Redirect to home
      await navigateTo('/')
    }
  }
  
  const refreshAccessToken = async (): Promise<boolean> => {
    try {
      if (!process.client) return false
      
      const refreshToken = localStorage.getItem('refresh_token') || sessionStorage.getItem('refresh_token')
      if (!refreshToken) {
        await logout()
        return false
      }
      
      const response = await $fetch<{
        success: boolean
        data?: {
          accessToken: string
        }
      }>('/auth/refresh', {
        baseURL: API_BASE_URL,
        method: 'POST',
        body: { refreshToken }
      })
      
      if (response.success && response.data?.accessToken) {
        // Keep existing refresh token, update access token
        const rememberMe = !!localStorage.getItem('access_token')
        setTokens(response.data.accessToken, refreshToken, rememberMe)
        return true
      }
      
      await logout()
      return false
    } catch (error) {
      console.error('Token refresh error:', error)
      await logout()
      return false
    }
  }
  
  const fetchUser = async (): Promise<User | null> => {
    try {
      const token = getAccessToken()
      if (!token) return null
      
      // Call your backend's /auth/profile endpoint
      const response = await apiCall<{
        success: boolean
        data?: User
      }>('/auth/profile')
      
      if (response.success && response.data) {
        user.value = response.data
        return response.data
      }
      
      return null
    } catch (error: any) {
      console.error('Fetch user error:', error)
      if (error.status === 401) {
        await logout()
      }
      return null
    }
  }
  
  // Initialize auth state on app start
  const initializeAuth = async (): Promise<void> => {
    const token = getAccessToken()
    if (token && !user.value) {
      await fetchUser()
    }
  }
  
  return {
    // State
    user: readonly(user),
    isLoggedIn,
    isLoading: readonly(isLoading),
    
    // Methods
    login,
    signup,
    socialLogin,
    logout,
    refreshAccessToken,
    fetchUser,
    initializeAuth
  }
}