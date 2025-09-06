<template>
    <div class="max-w-screen-xl mx-auto px-5 pt-24 bg-white dark:bg-gray-900">

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
                                    }}!</span>
                            </h1>
                            <p
                                class="text-lg lg:text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed max-w-2xl">
                                Your next taste of Nigeria's heritage starts here. Discover fresh proteins, staples, and
                                seasonal foods from trusted local farmers and processors.
                            </p>
                        </div>
                        <div class="hidden lg:block">
                            <div
                                class="w-24 h-24 bg-[#5d7c3a] rounded-2xl flex items-center justify-center shadow-xl shadow-[#7ba54a]/25 dark:shadow-[#9dcd5a]/25">
                                <ShoppingBag class="w-12 h-12 text-white" />
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
                                <Package class="w-6 h-6 text-[#7ba54a] dark:text-[#9dcd5a]" />
                            </div>
                            <span
                                class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Orders</span>
                        </div>
                        <div class="mb-2">
                            <span class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">{{
                                stats.totalOrders }}</span>
                        </div>
                        <p class="text-sm text-gray-600 dark:text-gray-400">Completed so far</p>
                    </div>

                    <!-- Favorite Farms -->
                    <div
                        class="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-gray-900/5 dark:shadow-gray-900/10 p-6 lg:p-8 hover:shadow-xl hover:shadow-gray-900/10 dark:hover:shadow-gray-900/20 transition-all duration-300 hover:-translate-y-1">
                        <div class="flex items-center justify-between mb-4">
                            <div
                                class="w-12 h-12 bg-gradient-to-br from-[#9dcd5a]/20 to-[#7ba54a]/20 dark:from-[#b8d975]/20 dark:to-[#9dcd5a]/20 rounded-xl flex items-center justify-center">
                                <Heart class="w-6 h-6 text-[#7ba54a] dark:text-[#9dcd5a]" />
                            </div>
                            <span
                                class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Favorites</span>
                        </div>
                        <div class="mb-2">
                            <span class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">{{
                                stats.favoriteFarms }}</span>
                        </div>
                        <p class="text-sm text-gray-600 dark:text-gray-400">Farms you trust</p>
                    </div>

                    <!-- Saved Items -->
                    <div
                        class="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-gray-900/5 dark:shadow-gray-900/10 p-6 lg:p-8 hover:shadow-xl hover:shadow-gray-900/10 dark:hover:shadow-gray-900/20 transition-all duration-300 hover:-translate-y-1">
                        <div class="flex items-center justify-between mb-4">
                            <div
                                class="w-12 h-12 bg-gradient-to-br from-[#b8d975]/20 to-[#9dcd5a]/20 dark:from-[#c5e085]/20 dark:to-[#b8d975]/20 rounded-xl flex items-center justify-center">
                                <Bookmark class="w-6 h-6 text-[#7ba54a] dark:text-[#9dcd5a]" />
                            </div>
                            <span
                                class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Saved</span>
                        </div>
                        <div class="mb-2">
                            <span class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">{{
                                stats.savedItems }}</span>
                        </div>
                        <p class="text-sm text-gray-600 dark:text-gray-400">Items waiting for you</p>
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
                            class="group flex items-center p-6 lg:p-8 bg-gradient-to-r from-[#5d7c3a] to-[#4a632e] dark:from-[#7ba54a] dark:to-[#6a9342] hover:from-[#4a632e] hover:to-[#3d5126] dark:hover:from-[#6a9342] dark:hover:to-[#5d7c3a] text-white rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl shadow-[#5d7c3a]/30 dark:shadow-[#7ba54a]/30">
                            <div
                                class="flex-shrink-0 w-16 h-16 bg-white/20 dark:bg-white/15 rounded-2xl flex items-center justify-center mr-6">
                                <MousePointerClick class="w-8 h-8 text-white" />
                            </div>
                            <div class="flex-grow">
                                <h3 class="text-xl lg:text-2xl font-bold mb-2">Browse Market</h3>
                                <p class="text-white/90 text-base lg:text-lg">Shop fresh proteins, staples, and seasonal
                                    harvests</p>
                            </div>
                            <ArrowRight class="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </NuxtLink>

                        <!-- View Orders -->
                        <NuxtLink to="/orders"
                            class="group flex items-center p-6 lg:p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-gray-900/5 dark:shadow-gray-900/10 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/10 dark:hover:shadow-gray-900/20 hover:-translate-y-1">
                            <div
                                class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#9dcd5a]/20 to-[#7ba54a]/20 dark:from-[#b8d975]/20 dark:to-[#9dcd5a]/20 rounded-2xl flex items-center justify-center mr-6">
                                <ShoppingCart class="w-8 h-8 text-[#7ba54a] dark:text-[#9dcd5a]" />
                            </div>
                            <div class="flex-grow">
                                <h3 class="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">My Orders
                                </h3>
                                <p class="text-gray-600 dark:text-gray-400 text-base lg:text-lg">View and track your
                                    past and current orders</p>
                            </div>
                            <ArrowRight
                                class="w-6 h-6 text-gray-400 dark:text-gray-500 group-hover:translate-x-2 transition-transform" />
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
                                    <User class="w-5 h-5 text-[#7ba54a] dark:text-[#9dcd5a]" />
                                </div>
                                <div class="flex-grow">
                                    <p class="font-semibold text-gray-900 dark:text-white">Profile Settings</p>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">Update your profile, delivery
                                        details, and payment methods</p>
                                </div>
                                <ArrowRight
                                    class="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:translate-x-1 transition-transform" />
                            </NuxtLink>
                            <!-- Delivery Addresses -->
                            <NuxtLink to="/addresses"
                                class="flex items-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group">
                                <div
                                    class="w-10 h-10 bg-gradient-to-br from-[#9dcd5a]/20 to-[#7ba54a]/20 dark:from-[#b8d975]/20 dark:to-[#9dcd5a]/20 rounded-lg flex items-center justify-center mr-4">
                                    <MapPin class="w-5 h-5 text-[#7ba54a] dark:text-[#9dcd5a]" />
                                </div>
                                <div class="flex-grow">
                                    <p class="font-semibold text-gray-900 dark:text-white">Delivery Details</p>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">Manage your delivery addresses
                                    </p>
                                </div>
                                <ArrowRight
                                    class="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:translate-x-1 transition-transform" />
                            </NuxtLink>

                            <!-- Notifications -->
                            <NuxtLink to="/notifications"
                                class="flex items-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group">
                                <div
                                    class="w-10 h-10 bg-gradient-to-br from-[#c5e085]/20 to-[#b8d975]/20 dark:from-[#d2e595]/20 dark:to-[#c5e085]/20 rounded-lg flex items-center justify-center mr-4">
                                    <Bell class="w-5 h-5 text-[#7ba54a] dark:text-[#9dcd5a]" />
                                </div>
                                <div class="flex-grow">
                                    <p class="font-semibold text-gray-900 dark:text-white">Notifications</p>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">Choose how you'd like to stay
                                        updated</p>
                                </div>
                                <ArrowRight
                                    class="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:translate-x-1 transition-transform" />
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
                        <Inbox class="w-8 h-8 text-[#7ba54a] dark:text-[#9dcd5a]" />
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">No activity yet</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                        Start shopping to see your orders, favorite farms, and tailored recommendations here.
                    </p>
                    <NuxtLink to="/market"
                        class="inline-flex items-center px-6 py-3 bg-[#5d7c3a] hover:bg-[#6a9342] dark:hover:bg-[#7ba54a] text-white font-semibold rounded-xl transition-colors">
                        Browse Market
                        <ArrowRight class="w-4 h-4 ml-2" />
                    </NuxtLink>
                </div>
            </div>

            <!-- Footer Actions -->
            <div class="flex justify-center pt-8">
                <button @click="handleLogout" :disabled="isLoading"
                    class="flex items-center px-6 py-3 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 font-medium transition-colors disabled:opacity-50">
                    <LogOut class="w-4 h-4 mr-2" />
                    {{ isLoading ? 'Signing out...' : 'Sign out' }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    ArrowRight,
    Bell,
    Bookmark,
    Heart,
    Inbox,
    LogOut,
    MapPin,
    MousePointerClick,
    Package,
    ShoppingBag,
    ShoppingCart,
    User
} from 'lucide-vue-next';
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
    // if (process.dev) {
    //   return 'Kel'
    // } 

    if (user.value?.firstName) {
        return user.value.firstName
    } else if (user.value?.name) {
        // If firstName is not available, try to get first name from full name
        return user.value.name.split(' ')[0]
    } else if (user.value?.email) {
        // If no name is available, use the part before @ in email
        return user.value.email.split('@')[0]
    } else {
        return 'Guest'
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