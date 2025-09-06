<!-- pages/auth/callback/microsoft.vue -->
<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
        <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
            <div class="text-center">
                <div v-if="isProcessing" class="space-y-4">
                    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <h2 class="text-xl font-semibold text-gray-900">Completing Microsoft Sign In...</h2>
                    <p class="text-gray-600">Please wait while we verify your account.</p>
                </div>

                <div v-else-if="error" class="space-y-4">
                    <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                        <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </div>
                    <h2 class="text-xl font-semibold text-gray-900">Authentication Failed</h2>
                    <p class="text-gray-600">{{ error }}</p>
                    <button @click="goHome"
                        class="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Go Back Home
                    </button>
                </div>

                <div v-else class="space-y-4">
                    <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                    </div>
                    <h2 class="text-xl font-semibold text-gray-900">Success!</h2>
                    <p class="text-gray-600">Redirecting to your dashboard...</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuth } from '~/composables/useAuth'

definePageMeta({
    layout: false // Use no layout for this page
})

const route = useRoute()
const { handleOAuthCallback } = useAuth()

const isProcessing = ref(true)
const error = ref<string | null>(null)

const goHome = () => {
    navigateTo('/')
}

onMounted(async () => {
    try {
        const code = route.query.code as string
        const state = route.query.state as string
        const errorParam = route.query.error as string

        if (errorParam) {
            throw new Error(`OAuth error: ${errorParam}`)
        }

        if (!code || !state) {
            throw new Error('Missing required OAuth parameters')
        }

        // Verify state matches what we stored
        const storedState = sessionStorage.getItem('oauth_state')
        if (state !== storedState) {
            throw new Error('Invalid OAuth state parameter')
        }

        // Clear the stored state
        sessionStorage.removeItem('oauth_state')

        // Handle the OAuth callback
        await handleOAuthCallback(code, state, 'microsoft')

    } catch (err: any) {
        console.error('Microsoft OAuth callback error:', err)
        error.value = err.message || 'Authentication failed. Please try again.'
    } finally {
        isProcessing.value = false
    }
})
</script>