<!-- layouts/default.vue -->
<template>
  <div class="min-h-screen flex flex-col">
    <LandingNavbar v-if="$route.path === '/'" @open-auth="handleOpenAuth"></LandingNavbar>
    <LandingNavbar2 v-else @open-auth="handleOpenAuth"></LandingNavbar2>

    <slot></slot>

    <LandingFooter v-if="$route.path !== '/'"></LandingFooter>

    <!-- Global Auth Modal -->
    <AuthModal :show="showAuthModal" :mode="authModalMode" :is-dark-mode="isDarkMode" :loading="authLoading"
      @close="closeAuthModal" @login="handleLoginSubmit" @signup="handleSignupSubmit" @social-login="handleSocialLogin"
      @switch-mode="toggleMode" />
  </div>
</template>

<script setup lang="ts">
import type { LoginCredentials, SignupCredentials } from '~/types/auth'

// Composables
const { showAuthModal, authModalMode, openAuthModal, closeAuthModal, toggleMode } = useAuthModal()
const { login, signup, socialLogin, isLoading: authLoading } = useAuthModal()

// State
const isDarkMode = ref(false)

// Handle opening auth modal from navbar
const handleOpenAuth = (mode: 'login' | 'signup' = 'login') => {
  openAuthModal(mode)
}

// Handle form submissions with proper error handling
const handleLoginSubmit = async (loginData: LoginCredentials) => {
  try {
    await login(loginData)
    // Modal will close automatically after successful login
    // The login function handles navigation
  } catch (error: any) {
    console.error('Login error:', error)
    // You can add toast notification here
    showError(error.message || 'Login failed')
  }
}

const handleSignupSubmit = async (signupData: SignupCredentials) => {
  try {
    await signup(signupData)
    // Modal will close automatically after successful signup
    // The signup function handles navigation
  } catch (error: any) {
    console.error('Signup error:', error)
    // You can add toast notification here
    showError(error.message || 'Signup failed')
  }
}

const handleSocialLogin = async (provider: 'google' | 'microsoft') => {
  try {
    await socialLogin(provider)
    // Modal will close automatically on successful redirect
  } catch (error: any) {
    console.error('Social login error:', error)
    // You can add toast notification here
    showError(error.message || 'Social login failed')
  }
}

// Simple error notification (you can replace with a proper toast system)
const showError = (message: string) => {
  // For now, just console error and alert
  // In production, use a proper toast notification system
  alert(message)
}

// Initialize auth on layout mount
onMounted(async () => {
  const { initializeAuth } = useAuthModal()
  await initializeAuth()
})

// Handle route changes to reset auth modal state if needed
watch(() => useRoute().path, (newPath) => {
  // Close modal on route change
  if (showAuthModal.value) {
    closeAuthModal()
  }
})
</script>