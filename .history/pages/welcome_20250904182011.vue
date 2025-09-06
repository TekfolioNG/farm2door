<!-- pages/welcome.vue -->
<template>
    <div
        class="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <!-- Background decorative elements -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div
                class="absolute -top-20 -right-20 w-80 h-80 bg-green-200/30 dark:bg-green-900/10 rounded-full blur-3xl">
            </div>
            <div class="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-200/30 dark:blue-900/10 rounded-full blur-3xl">
            </div>
        </div>

        <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <!-- Header Section -->
            <div class="text-center mb-16">
                <!-- Logo -->
                <div class="mb-8 flex justify-center">
                    <div
                        class="w-24 h-24 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 flex items-center justify-center">
                        <img src="/assets/img/Farm2Door Logo-trans.png" alt="Farm2Door"
                            class="w-full h-full object-contain" />
                    </div>
                </div>

                <!-- Success Icon -->
                <div class="mb-8">
                    <div
                        class="mx-auto w-24 h-24 bg-gradient-to-br from-green-400 to-[#7ba54a] rounded-full flex items-center justify-center shadow-lg">
                        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                    </div>
                </div>

                <!-- Welcome Message -->
                <div class="space-y-4">
                    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                        Welcome to <span class="text-[#7ba54a]">Farm2Door</span>!
                    </h1>

                    <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        <span v-if="user" class="font-semibold text-[#7ba54a]">Hello {{ user.firstName }}!</span>
                        Your account has been created successfully. Let's get you started on your fresh food journey.
                    </p>
                </div>
            </div>

            <!-- Onboarding Steps -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <!-- Step 1 -->
                <div
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div
                        class="mx-auto w-20 h-20 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mb-6">
                        <div
                            class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                            <svg class="w-7 h-7 text-green-600 dark:text-green-400" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        Explore Products
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        Discover fresh, local produce from trusted farms in your area.
                    </p>
                </div>

                <!-- Step 2 -->
                <div
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div
                        class="mx-auto w-20 h-20 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6">
                        <div
                            class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                            <svg class="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        Connect with Farms
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        Build relationships with local farmers and learn about their practices.
                    </p>
                </div>

                <!-- Step 3 -->
                <div
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div
                        class="mx-auto w-20 h-20 bg-purple-50 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center mb-6">
                        <div
                            class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                            <svg class="w-7 h-7 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5-5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        Start Shopping
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        Add fresh, quality products to your cart and schedule convenient deliveries.
                    </p>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="text-center space-y-6">
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <NuxtLink to="/products"
                        class="inline-flex items-center justify-center bg-gradient-to-r from-[#7ba54a] to-green-600 hover:from-[#6a9342] hover:to-green-700 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        <span>Start Shopping</span>
                        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </NuxtLink>

                    <NuxtLink to="/dashboard"
                        class="inline-flex items-center justify-center bg-white dark:bg-gray-800 border-2 border-[#7ba54a] text-[#7ba54a] hover:bg-[#7ba54a] hover:text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg">
                        <span>Go to Dashboard</span>
                        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                            </path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                    </NuxtLink>
                </div>

                <p class="text-sm text-gray-500 dark:text-gray-400 italic">
                    All features are accessible from your dashboard at any time
                </p>
            </div>

            <!-- Skip for now -->
            <div class="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <NuxtLink to="/"
                    class="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
                    <span>Skip for now and return to homepage</span>
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
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
    title: 'Welcome to Farm2Door - Your Fresh Food Journey Begins'
})

// Debug: Log user data
console.log('Welcome page - Current user:', user.value)
</script>

<style scoped>
/* Smooth transitions for all interactive elements */
a,
button {
    transition: all 0.3s ease;
}

/* Custom gradient animation for the background */
.bg-gradient-to-br {
    background-size: 200% 200%;
    animation: gradientShift 8s ease infinite;
}

@keyframes gradientShift {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

/* Subtle hover effects for cards */
.hover\:-translate-y-1:hover {
    transform: translateY(-4px);
}
</style>