// composables/useAuth.ts
import type { AuthResponse, LoginCredentials, SignupCredentials, User } from '~/types/auth'

export const useAuthModal = () => {
  // State management
  const user = useState<User | null>('auth.user', () => null)
  const isLoggedIn = computed(() => !!user.value)
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
      
      const response = await apiCall<AuthResponse>('/auth/login', {
        method: 'POST',
        body: credentials
      })
      
      if (response.success && response.user && response.accessToken && response.refreshToken) {
        setTokens(response.accessToken, response.refreshToken, credentials.rememberMe)
        user.value = response.user
        
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
      
      const response = await apiCall<AuthResponse>('/auth/signup', {
        method: 'POST',
        body: credentials
      })
      
      if (response.success && response.user && response.accessToken && response.refreshToken) {
        setTokens(response.accessToken, response.refreshToken, false)
        user.value = response.user
        
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
      
      // Redirect to social login endpoint on your Workers API
      const socialLoginUrl = `${API_BASE_URL}/auth/oauth/${provider}?redirect_uri=${encodeURIComponent(window.location.origin + '/auth/callback')}`
      
      await navigateTo(socialLoginUrl, { external: true })
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
      
      const response = await $fetch<{ accessToken: string; refreshToken: string }>('/auth/refresh', {
        baseURL: API_BASE_URL,
        method: 'POST',
        body: { refreshToken }
      })
      
      if (response.accessToken && response.refreshToken) {
        setTokens(response.accessToken, response.refreshToken, !!localStorage.getItem('access_token'))
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
      
      const userData = await apiCall<User>('/auth/me')
      user.value = userData
      return userData
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