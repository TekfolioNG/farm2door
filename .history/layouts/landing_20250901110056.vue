<!-- layouts/landing.vue -->
<template>
  <div class="min-h-screen flex flex-col">
    <LandingNavbar v-if="$route.path === '/'"></LandingNavbar>
    <LandingNavbar2 v-else></LandingNavbar2>
    <slot></slot>
    <LandingFooter v-if="$route.path !== '/'"></LandingFooter>

    <!-- Global Auth Modal -->
    <AuthModal :show="showAuthModal" :isDarkMode="isDarkMode" :mode="modalMode" :loading="isLoading"
      @close="closeAuthModal" @login="handleLoginSubmit" @signup="handleSignupSubmit"
      @social-login="handleSocialLogin" />
  </div>
</template>

<script setup lang="ts">
import AuthModal from '~/components/landing/AuthModal.vue'
import { useAuth } from '~/composables/useAuth'
import { useAuthModal } from '~/composables/useAuthModal'
import type { LoginCredentials, SignupCredentials } from '~/types/auth'

// Auth modal state
const { showAuthModal, modalMode, closeAuthModal } = useAuthModal()

// Auth functionality  
const { login, signup, socialLogin, isLoading } = useAuth()

// UI state
const isDarkMode = ref(false)

// Handle form submissions
const handleLoginSubmit = async (loginData: LoginCredentials) => {
  try {
    console.log('Login attempt with:', { email: loginData.email }) // Debug log
    await login(loginData)
    closeAuthModal()
  } catch (error: any) {
    console.error('Login failed:', error)
    // Add user-visible error feedback here
    alert(`Login failed: ${error.message}`)
  }
}

const handleSignupSubmit = async (signupData: SignupCredentials) => {
  try {
    console.log('Signup attempt with:', { email: signupData.email }) // Debug log
    await signup(signupData)
    closeAuthModal()
  } catch (error: any) {
    console.error('Signup failed:', error)
    // Add user-visible error feedback here
    alert(`Signup failed: ${error.message}`)
  }
}
const handleSocialLogin = async (provider: 'google' | 'microsoft') => {
  try {
    // For now, show a message that social login is coming soon
    console.log(`${provider} login requested`)

    // You can either:
    // 1. Show an alert (temporary)
    alert(`${provider} login is coming soon! Please use email signup for now.`)

    // 2. Or implement social login when ready:
    // await socialLogin(provider)
    // closeAuthModal()
  } catch (error: any) {
    console.error('Social login failed:', error)
    // You might want to show an error message to the user
  }
}
</script>