<!-- pages/welcome.vue -->
<template>
    <div class="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="text-center mb-12">
                <div class="mb-6">
                    <div class="mx-auto w-20 h-20 bg-[#7ba54a] rounded-full flex items-center justify-center">
                        <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                    </div>
                </div>

                <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    Welcome to Farm2Door!
                </h1>

                <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
                    <span v-if="user">Hello {{ user.firstName }}!</span>
                    Your account has been created successfully. Let's get you started on your fresh food journey.
                </p>
            </div>

            <!-- Onboarding Steps -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
                    <div
                        class="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                        <svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        1. Explore Products
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300">
                        Discover fresh, local produce from farms in your area.
                    </p>
                </div>

                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
                    <div
                        class="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                        <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                            </path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        2. Connect with Farms
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300">
                        Find and connect with local farmers in your community.
                    </p>
                </div>

                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
                    <div
                        class="mx-auto w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                        <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5-5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z">
                            </path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        3. Start Shopping
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300">
                        Add items to your cart and enjoy fresh deliveries.
                    </p>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="text-center space-y-4">
                <div class="space-x-4">
                    <NuxtLink to="/products"
                        class="inline-block bg-[#7ba54a] hover:bg-[#6a9342] text-white font-semibold py-3 px-8 rounded-lg transition-colors transform hover:scale-105">
                        Start Shopping
                    </NuxtLink>

                    <NuxtLink to="/dashboard"
                        class="inline-block bg-white dark:bg-gray-800 border-2 border-[#7ba54a] text-[#7ba54a] hover:bg-[#7ba54a] hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                        Go to Dashboard
                    </NuxtLink>
                </div>

                <p class="text-sm text-gray-500 dark:text-gray-400">
                    You can always access these features from your dashboard later.
                </p>
            </div>

            <!-- Skip for now -->
            <div class="text-center mt-8">
                <NuxtLink to="/"
                    class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 underline">
                    Skip for now and return to homepage
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuth } from '~/composables/useAuth'

// Get user data
const { user } = useAuth()

// Set page title
useHead({
    title: 'Welcome to Farm2Door'
})

// Debug: Log user data
console.log('Welcome page - Current user:', user.value)
</script>