// composables/useAuth.ts
import { computed, readonly } from 'vue'
import type { LoginCredentials, SignupCredentials, User } from '~/types/auth'

export const useAuth = () => {
  // --- State management ---
  // Always initialized to null, never undefined
  const user = useState<User | null>('auth.user', () => null)
  const isLoggedIn = computed(() => Boolean(user.value))
  const isLoading = useState<boolean>('auth.loading', () => false)

  // --- Config ---
  const config = useRuntimeConfig()
  const API_BASE_URL = config.public.apiBaseUrl

  // --- Token helpers ---
  const getAccessToken = (): string | null => {
    if (!process.client) return null
    return localStorage.getItem('access_token') || sessionStorage.getItem('access_token')
  }

  const setTokens = (accessToken: string, refreshToken: string, rememberMe = false) => {
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

  // --- API wrapper ---
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
      if (error.status === 401 && token) {
        const refreshed = await refreshAccessToken()
        if (refreshed) {
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

  // --- Auth methods ---
  const login = async (credentials: LoginCredentials): Promise<void> => {
    try {
      if (isLoading.value !== undefined) {
        isLoading.value = true
      }
      const response = await apiCall<{
        success: boolean
        message?: string
        data?: { user: User; accessToken: string; refreshToken: string }
      }>('/auth/login', {
        method: 'POST',
        body: credentials
      })

      if (response.success && response.data) {
        setTokens(response.data.accessToken, response.data.refreshToken, credentials.rememberMe)
        user.value = response.data.user

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
      if (isLoading.value !== undefined) {
        isLoading.value = false
      }
    }
  }

  const signup = async (credentials: SignupCredentials): Promise<void> => {
    try {
      if (isLoading.value !== undefined) {
        isLoading.value = true
      }
      
      // Validate required fields before making API call
      if (!credentials.firstName || !credentials.lastName) {
        throw new Error('First name and last name are required')
      }
      
      const response = await apiCall<{
        success: boolean
        message?: string
        data?: { id: string; email: string; name: string; firstName: string; lastName: string }
      }>('/auth/register', {
        method: 'POST',
        body: {
          email: credentials.email,
          password: credentials.password,
          firstName: credentials.firstName,
          lastName: credentials.lastName
        }
      })

      if (response.success) {
        // Auto-login after successful signup
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
      if (isLoading.value !== undefined) {
        isLoading.value = false
      }
    }
  }

  const logout = async (): Promise<void> => {
    try {
      await apiCall('/auth/logout', { method: 'POST' })
    } catch (error) {
      console.error('Logout API error:', error)
    } finally {
      clearTokens()
      user.value = null
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

      const response = await $fetch<{ success: boolean; data?: { accessToken: string } }>('/auth/refresh', {
        baseURL: API_BASE_URL,
        method: 'POST',
        body: { refreshToken }
      })

      if (response.success && response.data?.accessToken) {
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
      const response = await apiCall<{ success: boolean; data?: User }>('/auth/profile')
      if (response.success && response.data) {
        user.value = response.data
        return response.data
      }
      return null
    } catch (error: any) {
      console.error('Fetch user error:', error)
      if (error.status === 401) await logout()
      return null
    }
  }

  const initializeAuth = async (): Promise<void> => {
    const token = getAccessToken()
    if (token && !user.value) {
      await fetchUser()
    }
  }

  // --- Return API ---
  return {
    user,
    isLoggedIn,
    isLoading: readonly(isLoading),
    login,
    signup,
    logout,
    refreshAccessToken,
    fetchUser,
    initializeAuth
  }
}