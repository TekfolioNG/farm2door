<!-- pages/dashboard.vue -->
<template>
    <div
        class="min-h-screen bg-gradient-to-br from-[#f8faf6] via-white to-[#f1f8e8] dark:from-gray-900 dark:via-gray-850 dark:to-gray-800">

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">

            <!-- Welcome Banner -->
            <div class="mb-12">
                <div
                    class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl shadow-gray-900/5 dark:shadow-gray-900/20 p-8 lg:p-12">
                    <div class="flex items-center justify-between flex-wrap gap-6">
                        <div>
                            <h1
                                class="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                                Welcome back, <span class="text-[#7ba54a] dark:text-[#9dcd5a]">{{ displayUserName
                                }}</span>!
                            </h1>
                            <p
                                class="text-lg lg:text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed max-w-2xl">
                                Your farm-fresh Nigerian heritage foods await. Explore premium ingredients from trusted
                                local farmers.
                            </p>
                        </div>
                        <div class="hidden lg:block">
                            <div
                                class="w-24 h-24 bg-gradient-to-br from-[#7ba54a] to-[#6a9342] dark:from-[#9dcd5a] dark:to-[#7ba54a] rounded-2xl flex items-center justify-center shadow-xl shadow-[#7ba54a]/25 dark:shadow-[#9dcd5a]/25">
                                <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5-5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Quick Stats -->
            <div class="mb-12">
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">

                    <!-- Total Orders -->
                    <div
                        class="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-gray-900/5 dark:shadow-gray-900/10 p-6 lg:p-8 hover:shadow-xl hover:shadow-gray-900/10 dark:hover:shadow-gray-900/20 transition-all duration-300 hover:-translate-y-1">
                        <div class="flex items-center justify-between mb-4">
                            <div
                                class="w-12 h-12 bg-gradient-to-br from-[#7ba54a]/20 to-[#6a9342]/20 dark:from-[#9dcd5a]/20 dark:to-[#7ba54a]/20 rounded-xl flex items-center justify-center">
                                <svg class="w-6 h-6 text-[#7ba54a] dark:text-[#9dcd5a]" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                                </svg>
                            </div>
                            <span
                                class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Orders</span>
                        </div>
                        <div class="mb-2">
                            <span class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">{{
                                stats.totalOrders }}</span>
                        </div>
                        <p class="text-sm text-gray-600 dark:text-gray-400">Total completed</p>
                    </div>

                    <!-- Favorite Farms -->
                    <div
                        class="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-gray-900/5 dark:shadow-gray-900/10 p-6 lg:p-8 hover:shadow-xl hover:shadow-gray-900/10 dark:hover:shadow-gray-900/20 transition-all duration-300 hover:-translate-y-1">
                        <div class="flex items-center justify-between mb-4">
                            <div
                                class="w-12 h-12 bg-gradient-to-br from-[#9dcd5a]/20 to-[#7ba54a]/20 dark:from-[#b8d975]/20 dark:to-[#9dcd5a]/20 rounded-xl flex items-center justify-center">
                                <svg class="w-6 h-6 text-[#7ba54a] dark:text-[#9dcd5a]" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                                    </path>
                                </svg>
                            </div>
                            <span
                                class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Favorites</span>
                        </div>
                        <div class="mb-2">
                            <span class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">{{
                                stats.favoriteFarms }}</span>
                        </div>
                        <p class="text-sm text-gray-600 dark:text-gray-400">Trusted farms</p>
                    </div>

                    <!-- Saved Items -->
                    <div
                        class="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-gray-900/5 dark:shadow-gray-900/10 p-6 lg:p-8 hover:shadow-xl hover:shadow-gray-900/10 dark:hover:shadow-gray-900/20 transition-all duration-300 hover:-translate-y-1">
                        <div class="flex items-center justify-between mb-4">
                            <div
                                class="w-12 h-12 bg-gradient-to-br from-[#b8d975]/20 to-[#9dcd5a]/20 dark:from-[#c5e085]/20 dark:to-[#b8d975]/20 rounded-xl flex items-center justify-center">
                                <svg class="w-6 h-6 text-[#7ba54a] dark:text-[#9dcd5a]" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                                </svg>
                            </div>
                            <span
                                class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Saved</span>
                        </div>
                        <div class="mb-2">
                            <span class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">{{
                                stats.savedItems }}</span>
                        </div>
                        <p class="text-sm text-gray-600 dark:text-gray-400">Items saved</p>
                    </div>
                </div>
            </div>

            <!-- Quick Actions -->
            <div class="mb-12">
                <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8">Quick Actions</h2>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    <!-- Primary Actions -->
                    <div class="space-y-4">
                        <!-- Browse Market -->
                        <NuxtLink to="/market"
                            class="group flex items-center p-6 lg:p-8 bg-gradient-to-r from-[#7ba54a] to-[#6a9342] dark:from-[#9dcd5a] dark:to-[#7ba54a] hover:from-[#6a9342] hover:to-[#5d7c3a] dark:hover:from-[#7ba54a] dark:hover:to-[#6a9342] text-white rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl shadow-[#7ba54a]/30 dark:shadow-[#9dcd5a]/30">
                            <div
                                class="flex-shrink-0 w-16 h-16 bg-white/20 dark:bg-white/15 rounded-2xl flex items-center justify-center mr-6">
                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                                </svg>
                            </div>
                            <div class="flex-grow">
                                <h3 class="text-xl lg:text-2xl font-bold mb-2">Browse Market</h3>
                                <p class="text-white/90 text-base lg:text-lg">Explore premium Nigerian heritage foods
                                </p>
                            </div>
                            <svg class="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                            </svg>
                        </NuxtLink>

                        <!-- View Orders -->
                        <NuxtLink to="/orders"
                            class="group flex items-center p-6 lg:p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-gray-900/5 dark:shadow-gray-900/10 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/10 dark:hover:shadow-gray-900/20 hover:-translate-y-1">
                            <div
                                class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#9dcd5a]/20 to-[#7ba54a]/20 dark:from-[#b8d975]/20 dark:to-[#9dcd5a]/20 rounded-2xl flex items-center justify-center mr-6">
                                <svg class="w-8 h-8 text-[#7ba54a] dark:text-[#9dcd5a]" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2">
                                    </path>
                                </svg>
                            </div>
                            <div class="flex-grow">
                                <h3 class="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">My Orders
                                </h3>
                                <p class="text-gray-600 dark:text-gray-400 text-base lg:text-lg">Track your order
                                    history and status</p>
                            </div>
                            <svg class="w-6 h-6 text-gray-400 dark:text-gray-500 group-hover:translate-x-2 transition-transform"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                            </svg>
                        </NuxtLink>
                    </div>

                    <!-- Secondary Actions & Account -->
                    <div
                        class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-gray-900/5 dark:shadow-gray-900/10 p-6 lg:p-8">
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">Account & Settings</h3>

                        <div class="space-y-4">
                            <!-- Profile Settings -->
                            <NuxtLink to="/profile"
                                class="flex items-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group">
                                <div
                                    class="w-10 h-10 bg-gradient-to-br from-[#7ba54a]/20 to-[#6a9342]/20 dark:from-[#9dcd5a]/20 dark:to-[#7ba54a]/20 rounded-lg flex items-center justify-center mr-4">
                                    <svg class="w-5 h-5 text-[#7ba54a] dark:text-[#9dcd5a]" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="flex-grow">
                                    <p class="font-semibold text-gray-900 dark:text-white">Profile Settings</p>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">Update your personal information
                                    </p>
                                </div>
                                <svg class="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:translate-x-1 transition-transform"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7"></path>
                                </svg>
                            </NuxtLink>

                            <!-- Delivery Addresses -->
                            <NuxtLink to="/addresses"
                                class="flex items-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group">
                                <div
                                    class="w-10 h-10 bg-gradient-to-br from-[#9dcd5a]/20 to-[#7ba54a]/20 dark:from-[#b8d975]/20 dark:to-[#9dcd5a]/20 rounded-lg flex items-center justify-center mr-4">
                                    <svg class="w-5 h-5 text-[#7ba54a] dark:text-[#9dcd5a]" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                        </path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>
                                <div class="flex-grow">
                                    <p class="font-semibold text-gray-900 dark:text-white">Delivery Addresses</p>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">Manage your delivery locations
                                    </p>
                                </div>
                                <svg class="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:translate-x-1 transition-transform"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7"></path>
                                </svg>
                            </NuxtLink>

                            <!-- Payment Methods -->
                            <NuxtLink to="/payment-methods"
                                class="flex items-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group">
                                <div
                                    class="w-10 h-10 bg-gradient-to-br from-[#b8d975]/20 to-[#9dcd5a]/20 dark:from-[#c5e085]/20 dark:to-[#b8d975]/20 rounded-lg flex items-center justify-center mr-4">
                                    <svg class="w-5 h-5 text-[#7ba54a] dark:text-[#9dcd5a]" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="flex-grow">
                                    <p class="font-semibold text-gray-900 dark:text-white">Payment Methods</p>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">Manage cards and payment options
                                    </p>
                                </div>
                                <svg class="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:translate-x-1 transition-transform"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7"></path>
                                </svg>
                            </NuxtLink>

                            <!-- Notifications -->
                            <NuxtLink to="/notifications"
                                class="flex items-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group">
                                <div
                                    class="w-10 h-10 bg-gradient-to-br from-[#c5e085]/20 to-[#b8d975]/20 dark:from-[#d2e595]/20 dark:to-[#c5e085]/20 rounded-lg flex items-center justify-center mr-4">
                                    <svg class="w-5 h-5 text-[#7ba54a] dark:text-[#9dcd5a]" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 17h5l-5 5v-5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="flex-grow">
                                    <p class="font-semibold text-gray-900 dark:text-white">Notifications</p>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">Manage your preferences</p>
                                </div>
                                <svg class="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:translate-x-1 transition-transform"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7"></path>
                                </svg>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Recent Activity Placeholder -->
            <div class="mb-8">
                <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">Recent Activity</h2>
                <div
                    class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-gray-900/5 dark:shadow-gray-900/10 p-8 lg:p-12 text-center">
                    <div
                        class="w-16 h-16 bg-gradient-to-br from-[#7ba54a]/20 to-[#6a9342]/20 dark:from-[#9dcd5a]/20 dark:to-[#7ba54a]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-[#7ba54a] dark:text-[#9dcd5a]" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4">
                            </path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">No activity yet</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                        Start shopping to see your order history, favorite farms, and personalized recommendations here.
                    </p>
                    <NuxtLink to="/market"
                        class="inline-flex items-center px-6 py-3 bg-[#7ba54a] dark:bg-[#9dcd5a] hover:bg-[#6a9342] dark:hover:bg-[#7ba54a] text-white font-semibold rounded-xl transition-colors">
                        Browse Market
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                        </svg>
                    </NuxtLink>
                </div>
            </div>

            <!-- Footer Actions -->
            <div class="flex justify-center pt-8">
                <button @click="handleLogout" :disabled="isLoading"
                    class="flex items-center px-6 py-3 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 font-medium transition-colors disabled:opacity-50">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                        </path>
                    </svg>
                    {{ isLoading ? 'Signing out...' : 'Sign out' }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuth } from '~/composables/useAuth';

// Set page meta
definePageMeta({
    middleware: 'auth',
    layout: "landing"
})

// Use auth composable
const { user, logout, isLoading } = useAuth()

// Computed properties
const displayUserName = computed(() => {
    if (user.value?.firstName) {
        return user.value.firstName
    } else if (user.value?.name) {
        // If firstName is not available, try to get first name from full name
        return user.value.name.split(' ')[0]
    } else if (user.value?.email) {
        // If no name is available, use the part before @ in email
        return user.value.email.split('@')[0]
    } else {
        return 'User'
    }
})

// Mock stats data - replace with actual data from your API
const stats = ref({
    totalOrders: 0,
    favoriteFarms: 0,
    savedItems: 0
})

// Handle logout
const handleLogout = async () => {
    try {
        await logout()
    } catch (error) {
        console.error('Logout error:', error)
    }
}

// Load user stats (you'll need to implement this)
const loadUserStats = async () => {
    try {
        // Replace with actual API call
        // const response = await $fetch('/api/user/stats')
        // stats.value = response
    } catch (error) {
        console.error('Failed to load user stats:', error)
    }
}

// Set page title
useHead({
    title: `Dashboard - Farm2Door`,
    meta: [
        { name: 'description', content: 'Your Farm2Door dashboard - manage orders, browse products, and connect with local farms.' }
    ]
})

// Load stats on mount
onMounted(() => {
    loadUserStats()
})
</script>