<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#9dcd5a]/10 to-transparent dark:from-[#9dcd5a]/5 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <img src="/assets/img/Farm2Door Logo-trans.png" alt="Farm2Door"
            class="h-30 pt-16 w-auto sm:h-80 sm:pt-32 transition-all duration-300"
            :class="isDarkMode ? 'filter invert brightness-0 contrast-100' : ''" />
        </div>

        <!-- Right side: Theme toggle and Auth buttons -->
        <div class="flex items-center space-x-2 sm:space-x-4">
          <!-- Theme Toggle -->
          <button @click="toggleTheme"
            class="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200">
            <Sun v-if="isDarkMode" class="w-5 h-5 text-gray-600 dark:text-gray-300" />
            <Moon v-else class="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>

          <!-- Auth Buttons -->
          <div class="flex items-center space-x-2 sm:space-x-3">
            <!-- Sign In Button -->
            <button @click="handleSignIn"
              class="flex items-center px-2 py-2 sm:px-4 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] transition-colors duration-200">
              <User class="w-4 h-4 sm:mr-2" />
              <span class="hidden sm:inline">Sign In</span>
            </button>

            <!-- Sign Up Button -->
            <button @click="handleSignUp"
              class="flex items-center px-2 py-2 sm:px-4 bg-[#7ba54a] hover:bg-[#6a9342] text-white text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 flex-shrink-0">
              <UserPlus class="w-4 h-4 sm:mr-2" />
              <span class="hidden sm:inline">Sign Up</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Moon, Sun, User, UserPlus } from 'lucide-vue-next'

// Reactive state
const isDarkMode = ref(false)

// Methods
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  // Toggle dark class on document
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', isDarkMode.value)
  }
}

const handleSignIn = () => {
  // Handle sign in logic
  navigateTo('/signin')
}

const handleSignUp = () => {
  // Handle sign up logic  
  navigateTo('/signup')
}

// Lifecycle
onMounted(() => {
  // Check for existing theme preference
  if (typeof document !== 'undefined') {
    isDarkMode.value = document.documentElement.classList.contains('dark')
  }
})
</script>