<!-- layouts/landing.vue -->
<template>
  <div class="min-h-screen flex flex-col">
    <LandingNavbar v-if="$route.path === '/'"></LandingNavbar>
    <LandingNavbar2 v-else></LandingNavbar2>
    <slot></slot>
    <LandingFooter v-if="$route.path !== '/'"></LandingFooter>

    <!-- Global Auth Modal -->
    <AuthModal :show="showAuthModal" :isDarkMode="isDarkMode" :mode="modalMode" :loading="isLoading"
      @close="closeAuthModal" @login="handleLoginSubmit" @signup="handleSignupSubmit" />
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
const { login, signup, isLoading } = useAuth()

// UI state
const isDarkMode = ref(false)

// Handle form submissions
const handleLoginSubmit = async (loginData: LoginCredentials) => {
  try {
    console.log('Login attempt with:', { email: loginData.email })
    await login(loginData)
    closeAuthModal()
  } catch (error: any) {
    console.error('Login failed:', error)
    alert(`Login failed: ${error.message}`)
  }
}

const handleSignupSubmit = async (signupData: SignupCredentials) => {
  try {
    console.log('FULL Signup data received:', signupData)
    console.log('Data keys:', Object.keys(signupData))
    await signup(signupData)
    closeAuthModal()
  } catch (error: any) {
    console.error('Signup failed:', error)
    alert(`Signup failed: ${error.message}`)
  }
}
</script>