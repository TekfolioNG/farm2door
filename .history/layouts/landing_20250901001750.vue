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
    await login(loginData)
    closeAuthModal()
  } catch (error: any) {
    console.error('Login failed:', error)
    // You might want to show an error message to the user
    // For example, using a toast notification or error state
  }
}

const handleSignupSubmit = async (signupData: SignupCredentials) => {
  try {
    await signup(signupData)
    closeAuthModal()
  } catch (error: any) {
    console.error('Signup failed:', error)
    // You might want to show an error message to the user
  }
}

const handleSocialLogin = async (provider: 'google' | 'microsoft') => {
  try {
    await socialLogin(provider)
    // Note: socialLogin will redirect, so closeAuthModal might not be reached
    closeAuthModal()
  } catch (error: any) {
    console.error('Social login failed:', error)
    // You might want to show an error message to the user
  }
}
</script>