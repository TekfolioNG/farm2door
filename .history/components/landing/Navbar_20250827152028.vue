<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#9dcd5a]/10 to-transparent dark:from-[#9dcd5a]/5 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <img src="/assets/img/Farm2Door Logo-trans.png" alt="Farm2Door"
            class="h-35 pt-12 w-auto sm:h-80 sm:pt-36 transition-all duration-300"
            :class="isDarkMode ? 'filter invert brightness-0 contrast-100' : ''" />
        </div>

        <!-- Right side: Theme toggle and Auth button -->
        <div class="flex items-center space-x-2 sm:space-x-4">
          <!-- Theme Toggle -->
          <button @click="toggleTheme"
            class="p-2 rounded-lg bg-[#c6fc89] dark:bg-[#213b03] transition-colors duration-200">
            <Sun v-if="isDarkMode" class="w-5 h-5 text-gray-600 dark:text-gray-300" />
            <Moon v-else class="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>

          <!-- Combined Login/Sign Up Button -->
          <button @click="handleAuth"
            class="flex items-center px-3 py-2 sm:px-4 bg-[#7ba54a] hover:bg-[#6a9342] text-white text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 flex-shrink-0">
            <UserPlus class="w-4 h-4 sm:mr-2" />
            <span class="hidden sm:inline">Log In / Sign Up</span>
            <span class="sm:hidden">Join</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Auth Modal -->
    <AuthModal :showAuthModal="showAuthModal" :isDarkMode="isDarkMode" @close="showAuthModal = false"
      @login="handleLoginSubmit" @signup="handleSignupSubmit" @social-login="handleSocialLogin" />
  </nav>
</template>

<script setup lang="ts">
import { Moon, Sun, UserPlus } from 'lucide-vue-next'
import AuthModal from './AuthModal.vue'

// Define types for our data structures
interface LoginFormData {
  email: string
  password: string
  rememberMe: boolean
}

interface SignupFormData {
  email: string
  password: string
  confirmPassword: string
  agreeToTerms: boolean
}

type SocialProvider = 'google' | 'microsoft'

// Reactive state
const isDarkMode = ref(false)
const showAuthModal = ref(false)

// Methods
const toggleTheme = (): void => {
  isDarkMode.value = !isDarkMode.value
  // Toggle dark class on document
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', isDarkMode.value)
  }
}

const handleAuth = (): void => {
  showAuthModal.value = true
}

const handleLoginSubmit = (loginData: LoginFormData): void => {
  // Handle login API call
  console.log('Login data:', loginData)
  showAuthModal.value = false
}

const handleSignupSubmit = (signupData: SignupFormData): void => {
  // Handle signup API call
  console.log('Signup data:', signupData)
  showAuthModal.value = false
}

const handleSocialLogin = (provider: SocialProvider): void => {
  // Handle social login
  console.log('Social login with:', provider)
  // Redirect to OAuth endpoint
}

// Lifecycle
onMounted(() => {
  // Check for existing theme preference
  if (typeof document !== 'undefined') {
    isDarkMode.value = document.documentElement.classList.contains('dark')
  }
})
</script>