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

    <!-- Loading overlay for social login redirects -->
    <div v-if="socialLoginLoading" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-xl">
        <div class="flex items-center space-x-3">
          <div class="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
          <span>Redirecting to {{ currentProvider }}...</span>
        </div>
      </div>
    </div>
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
const socialLoginLoading = ref(false)
const currentProvider = ref<'google' | 'microsoft' | null>(null)

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



// Clean up loading state when component unmounts
onUnmounted(() => {
  socialLoginLoading.value = false
  currentProvider.value = null
})
</script>