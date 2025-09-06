<!-- pages/dashboard.vue -->
<template>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    Welcome to your Dashboard!
                </h1>

                <div v-if="user" class="mb-6">
                    <p class="text-lg text-gray-700 dark:text-gray-300">
                        Hello, {{ user.firstName }} {{ user.lastName }}!
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                        Email: {{ user.email }}
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <!-- Stats Cards -->
                    <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                        <h3 class="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
                            Total Orders
                        </h3>
                        <p class="text-3xl font-bold text-green-600 dark:text-green-400">0</p>
                    </div>

                    <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                        <h3 class="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
                            Favorite Farms
                        </h3>
                        <p class="text-3xl font-bold text-blue-600 dark:text-blue-400">0</p>
                    </div>

                    <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                        <h3 class="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-2">
                            Saved Items
                        </h3>
                        <p class="text-3xl font-bold text-purple-600 dark:text-purple-400">0</p>
                    </div>
                </div>

                <!-- Quick Actions -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="border border-gray-200 dark:border-gray-600 rounded-lg p-6">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Quick Actions
                        </h3>
                        <div class="space-y-3">
                            <NuxtLink to="/products"
                                class="block w-full bg-[#7ba54a] hover:bg-[#6a9342] text-white py-2 px-4 rounded-lg text-center transition-colors">
                                Browse Products
                            </NuxtLink>
                            <NuxtLink to="/farms"
                                class="block w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-center transition-colors">
                                Find Farms
                            </NuxtLink>
                        </div>
                    </div>

                    <div class="border border-gray-200 dark:border-gray-600 rounded-lg p-6">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Recent Activity
                        </h3>
                        <p class="text-gray-500 dark:text-gray-400">
                            No recent activity yet. Start browsing products to see your activity here!
                        </p>
                    </div>
                </div>

                <!-- Logout Button -->
                <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                    <button @click="handleLogout" :disabled="isLoading"
                        class="bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white py-2 px-6 rounded-lg transition-colors">
                        {{ isLoading ? 'Logging out...' : 'Logout' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuth } from '~/composables/useAuth'

// Set page meta
definePageMeta({
    middleware: 'auth' // You'll need to create this middleware
})

// Use auth composable
const { user, logout, isLoading } = useAuth()

// Handle logout
const handleLogout = async () => {
    try {
        await logout()
    } catch (error) {
        console.error('Logout error:', error)
    }
}

// Debug: Log user data
console.log('Dashboard - Current user:', user.value)
</script>