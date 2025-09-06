<!-- pages/welcome.vue -->
<template>
    <div
        class="min-h-screen bg-gradient-to-br from-[#f8faf6] via-white to-[#f1f8e8] dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 relative overflow-hidden">

        <!-- Subtle background elements -->
        <div class="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]">
            <div class="absolute top-20 left-10 w-32 h-32 bg-[#7ba54a] rounded-full blur-3xl"></div>
            <div class="absolute bottom-20 right-16 w-40 h-40 bg-[#9dcd5a] rounded-full blur-3xl"></div>
            <div class="absolute top-1/2 left-1/3 w-24 h-24 bg-[#b8d975] rounded-full blur-2xl"></div>
        </div>

        <div class="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">

            <!-- Header Section -->
            <div class="text-center mb-16 lg:mb-20">

                <!-- Logo -->
                <div class="mb-8">
                    <img src="/assets/img/Farm2Door Logo-trans.png" alt="Farm2Door Logo"
                        class="h-16 lg:h-20 mx-auto drop-shadow-sm" />
                </div>

                <!-- Success Icon -->
                <div class="mb-8">
                    <div
                        class="mx-auto w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[#7ba54a] to-[#6a9342] rounded-full flex items-center justify-center shadow-lg shadow-[#7ba54a]/25">
                        <svg class="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                    </div>
                </div>

                <!-- Welcome Message -->
                <div class="space-y-4">
                    <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                        Welcome to
                        <span class="text-[#7ba54a]">Farm2Door</span>!
                    </h1>

                    <div class="max-w-2xl mx-auto">
                        <p class="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                            <span v-if="user" class="font-medium text-gray-800 dark:text-gray-200">
                                Hello {{ user.firstName }}!
                            </span>
                            Your journey to fresh, authentic Nigerian heritage foods begins now.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Onboarding Steps -->
            <div class="mb-16 lg:mb-20">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

                    <!-- Step 1 -->
                    <div
                        class="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl border border-gray-100/50 dark:border-gray-700/50 p-8 lg:p-10 text-center transition-all duration-500 hover:-translate-y-2">
                        <div class="mb-6">
                            <div
                                class="mx-auto w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[#7ba54a]/10 to-[#6a9342]/10 dark:from-[#7ba54a]/20 dark:to-[#6a9342]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-10 h-10 lg:w-12 lg:h-12 text-[#7ba54a]" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="mb-2 text-[#7ba54a] font-bold text-sm tracking-wider uppercase">Step 1</div>
                        <h3 class="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Explore Premium Products
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Discover authentic Nigerian heritage foods sourced directly from trusted local farms.
                        </p>
                    </div>

                    <!-- Step 2 -->
                    <div
                        class="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl border border-gray-100/50 dark:border-gray-700/50 p-8 lg:p-10 text-center transition-all duration-500 hover:-translate-y-2">
                        <div class="mb-6">
                            <div
                                class="mx-auto w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[#9dcd5a]/10 to-[#7ba54a]/10 dark:from-[#9dcd5a]/20 dark:to-[#7ba54a]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-10 h-10 lg:w-12 lg:h-12 text-[#7ba54a]" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                    </path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="mb-2 text-[#7ba54a] font-bold text-sm tracking-wider uppercase">Step 2</div>
                        <h3 class="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Connect with Farms
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Build direct relationships with local farmers and learn about your food's journey.
                        </p>
                    </div>

                    <!-- Step 3 -->
                    <div
                        class="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl border border-gray-100/50 dark:border-gray-700/50 p-8 lg:p-10 text-center transition-all duration-500 hover:-translate-y-2">
                        <div class="mb-6">
                            <div
                                class="mx-auto w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[#b8d975]/10 to-[#9dcd5a]/10 dark:from-[#b8d975]/20 dark:to-[#9dcd5a]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-10 h-10 lg:w-12 lg:h-12 text-[#7ba54a]" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="mb-2 text-[#7ba54a] font-bold text-sm tracking-wider uppercase">Step 3</div>
                        <h3 class="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Enjoy Fresh Deliveries
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Place your order and receive fresh, premium ingredients delivered to your doorstep.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="text-center mb-12">
                <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                    <NuxtLink to="/market"
                        class="group relative inline-flex items-center justify-center px-8 lg:px-10 py-4 lg:py-5 bg-gradient-to-r from-[#7ba54a] to-[#6a9342] hover:from-[#6a9342] hover:to-[#5d7c3a] text-white font-bold text-lg lg:text-xl rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-[#7ba54a]/30 focus:outline-none focus:ring-4 focus:ring-[#7ba54a]/50 min-w-[200px] overflow-hidden">
                        <span class="relative z-10 flex items-center">
                            Start Shopping
                            <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                            </svg>
                        </span>
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out">
                        </div>
                    </NuxtLink>

                    <NuxtLink to="/dashboard"
                        class="inline-flex items-center justify-center px-8 lg:px-10 py-4 lg:py-5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-[#7ba54a] text-[#7ba54a] hover:bg-[#7ba54a] hover:text-white font-bold text-lg lg:text-xl rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl min-w-[200px]">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
                            </path>
                        </svg>
                        My Dashboard
                    </NuxtLink>
                </div>

                <p class="text-base text-gray-500 dark:text-gray-400 mt-6 font-light">
                    You can access all these features from your dashboard anytime
                </p>
            </div>

            <!-- Footer Link -->
            <div class="text-center">
                <NuxtLink to="/"
                    class="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] transition-colors font-medium group">
                    <svg class="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                    Return to homepage
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
    title: 'Welcome to Farm2Door',
    meta: [
        { name: 'description', content: 'Welcome to Farm2Door - Your journey to fresh Nigerian heritage foods begins now.' }
    ]
})

// Debug: Log user data
console.log('Welcome page - Current user:', user.value)
</script>