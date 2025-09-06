<!-- pages/market/index.vue -->
<template>
    <div class="min-h-screen bg-white dark:bg-gray-900">
        <!-- Header -->
        <div class="bg-gradient-to-r from-[#7ba54a] to-[#6a9342] text-white">
            <div class="max-w-7xl mx-auto px-4 py-12">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">Farm Market</h1>
                <p class="text-xl opacity-90">Premium Nigerian heritage foods from trusted farms</p>
            </div>
        </div>

        <!-- Auth status banner for non-logged users -->
        <div v-if="!isLoggedIn" class="bg-[#9dcd5a]/10 border-b border-[#9dcd5a]/20">
            <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <Info class="w-5 h-5 text-[#7ba54a]" />
                    <span class="text-gray-700 dark:text-gray-300">
                        Browse our products. Sign in to add items to cart and place orders.
                    </span>
                </div>
                <button @click="openLoginModal"
                    class="bg-[#7ba54a] text-white px-4 py-2 rounded-lg hover:bg-[#6a9342] transition-colors">
                    Sign In
                </button>
            </div>
        </div>

        <!-- Products Grid -->
        <div class="max-w-7xl mx-auto px-4 py-12">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div v-for="product in products" :key="product.id"
                    class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
                    <!-- Product Image -->
                    <div class="aspect-square overflow-hidden bg-gray-50 dark:bg-gray-700">
                        <img :src="product.image" :alt="product.alt"
                            class="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300" />
                    </div>

                    <!-- Product Info -->
                    <div class="p-4">
                        <div class="mb-2">
                            <span class="text-xs font-medium text-[#7ba54a] bg-[#7ba54a]/10 px-2 py-1 rounded-full">
                                {{ product.category }}
                            </span>
                        </div>
                        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
                            {{ product.name }}
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            Premium quality, directly from local farms
                        </p>

                        <!-- Price (placeholder) -->
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-lg font-bold text-gray-900 dark:text-white">
                                ₦{{ (Math.random() * 5000 + 1000).toFixed(0) }}
                            </span>
                            <span class="text-sm text-gray-500">per kg</span>
                        </div>

                        <!-- Action Button -->
                        <button v-if="isLoggedIn" @click="addToCart(product)"
                            class="w-full bg-[#7ba54a] text-white py-2 px-4 rounded-lg hover:bg-[#6a9342] transition-colors font-medium">
                            Add to Cart
                        </button>
                        <button v-else @click="openLoginModal"
                            class="w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg hover:bg-[#7ba54a] hover:text-white transition-colors font-medium">
                            Sign In to Purchase
                        </button>
                    </div>
                </div>
            </div>

            <!-- Empty State (if no products) -->
            <div v-if="products.length === 0" class="text-center py-20">
                <ShoppingCart class="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 class="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
                    Products Coming Soon
                </h3>
                <p class="text-gray-500">We're stocking up with the best Nigerian heritage foods.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "landing"
});
import { Info, ShoppingCart } from 'lucide-vue-next';

// Don't add auth middleware - let anyone browse
// definePageMeta({ middleware: 'auth' }) // Remove this line

const { isLoggedIn } = useAuth()
const { openAuthModal } = useAuthModal()

// Sample products (you can move this to a composable later)
const products = ref([
    {
        id: 1,
        name: "Premium Stockfish",
        category: "Heritage Proteins",
        image: "/images/stockfish.jpg",
        alt: "Premium Nigerian stockfish"
    },
    {
        id: 2,
        name: "Traditional Smoked Fish",
        category: "Heritage Proteins",
        image: "/images/smoked-fish.jpg",
        alt: "Traditional smoked fish"
    },
    {
        id: 3,
        name: "Single-Origin Palm Oil",
        category: "Traditional Staples",
        image: "/images/palm-oil.jpg",
        alt: "Pure red palm oil"
    },
    {
        id: 4,
        name: "Fresh Crayfish",
        category: "Heritage Proteins",
        image: "/images/crayfish.jpg",
        alt: "Fresh Nigerian crayfish"
    },
    // Add more products as needed
])

// Methods
const addToCart = (product) => {
    // TODO: Implement cart functionality
    console.log('Adding to cart:', product)
    // You can show a toast notification here
}

const openLoginModal = () => {
    openAuthModal()
}
</script>