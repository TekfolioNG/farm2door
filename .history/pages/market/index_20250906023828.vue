<!-- pages/market/index.vue -->
<template>
    <div class="max-w-screen-xl mx-auto px-5 pt-24 bg-white dark:bg-gray-900">

        <!-- Header -->
        <div class="max-w-7xl mx-auto px-4 py-8">
            <div class="text-right mb-8">
                <h1 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Nigeria's <span class="text-[#7ba54a] dark:text-[#9dcd5a]">Heritage Market</span>
                </h1>
                <p class="text-sm text-gray-600 dark:text-gray-300 max-w-md ml-auto">
                    Discover authentic Nigerian foods sourced directly from local farms and traditional processors.
                    Each product tells a story of our rich culinary heritage.
                </p>
            </div>
        </div>

        <!-- Categories Grid -->
        <div class="max-w-7xl mx-auto px-4 py-12">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                <!-- Pure Heritage Proteins -->
                <div
                    class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
                    <!-- Category Image -->
                    <div class="aspect-square overflow-hidden bg-gray-50 dark:bg-gray-700">
                        <div class="w-full h-full flex items-center justify-center p-8">
                            <Fish class="w-20 h-20 text-[#7ba54a] dark:text-[#9dcd5a]" />
                        </div>
                    </div>

                    <!-- Category Info -->
                    <div class="p-4">
                        <div class="mb-2">
                            <span class="text-xs font-medium text-[#7ba54a] bg-[#7ba54a]/10 px-2 py-1 rounded-full">
                                Category
                            </span>
                        </div>
                        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
                            Pure Heritage Proteins
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            Wild-sourced and traditionally processed proteins rich in authentic taste.
                        </p>

                        <!-- Action Button -->
                        <NuxtLink to="/market/proteins"
                            class="w-full bg-[#7ba54a] text-white py-2 px-4 rounded-lg hover:bg-[#6a9342] transition-colors font-medium block text-center">
                            Shop Proteins
                        </NuxtLink>
                    </div>
                </div>

                <!-- Traditional Staples -->
                <div
                    class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
                    <!-- Category Image -->
                    <div class="aspect-square overflow-hidden bg-gray-50 dark:bg-gray-700">
                        <div class="w-full h-full flex items-center justify-center p-8">
                            <Wheat class="w-20 h-20 text-[#7ba54a] dark:text-[#9dcd5a]" />
                        </div>
                    </div>

                    <!-- Category Info -->
                    <div class="p-4">
                        <div class="mb-2">
                            <span class="text-xs font-medium text-[#7ba54a] bg-[#7ba54a]/10 px-2 py-1 rounded-full">
                                Category
                            </span>
                        </div>
                        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
                            Traditional Staples (Chemical-Free)
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            Unrefined oils, flours, and grains—processed without artificial additives.
                        </p>

                        <!-- Action Button -->
                        <NuxtLink to="/market/staples"
                            class="w-full bg-[#7ba54a] text-white py-2 px-4 rounded-lg hover:bg-[#6a9342] transition-colors font-medium block text-center">
                            Shop Staples
                        </NuxtLink>
                    </div>
                </div>

                <!-- Village Story Ingredients -->
                <div
                    class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
                    <!-- Category Image -->
                    <div class="aspect-square overflow-hidden bg-gray-50 dark:bg-gray-700">
                        <div class="w-full h-full flex items-center justify-center p-8">
                            <Sprout class="w-20 h-20 text-[#7ba54a] dark:text-[#9dcd5a]" />
                        </div>
                    </div>

                    <!-- Category Info -->
                    <div class="p-4">
                        <div class="mb-2">
                            <span class="text-xs font-medium text-[#7ba54a] bg-[#7ba54a]/10 px-2 py-1 rounded-full">
                                Category
                            </span>
                        </div>
                        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
                            Village Story Ingredients
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            Heirloom seeds, dried vegetables, and fermented delicacies from local traditions.
                        </p>

                        <!-- Action Button -->
                        <NuxtLink to="/market/ingredients"
                            class="w-full bg-[#7ba54a] text-white py-2 px-4 rounded-lg hover:bg-[#6a9342] transition-colors font-medium block text-center">
                            Shop Ingredients
                        </NuxtLink>
                    </div>
                </div>

                <!-- Native Seasonals -->
                <div
                    class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
                    <!-- Category Image -->
                    <div class="aspect-square overflow-hidden bg-gray-50 dark:bg-gray-700">
                        <div class="w-full h-full flex items-center justify-center p-8">
                            <CalendarDays class="w-20 h-20 text-[#7ba54a] dark:text-[#9dcd5a]" />
                        </div>
                    </div>

                    <!-- Category Info -->
                    <div class="p-4">
                        <div class="mb-2">
                            <span
                                class="text-xs font-medium text-orange-600 bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded-full">
                                Limited Time
                            </span>
                        </div>
                        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
                            Native Seasonals
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            Fresh harvests and seasonal specials, available for a limited time.
                        </p>

                        <!-- Action Button -->
                        <NuxtLink to="/market/seasonals"
                            class="w-full bg-[#7ba54a] text-white py-2 px-4 rounded-lg hover:bg-[#6a9342] transition-colors font-medium block text-center">
                            Shop Seasonals
                        </NuxtLink>
                    </div>
                </div>

            </div>

            <!-- Empty State (if no categories) -->
            <div v-if="false" class="text-center py-20">
                <ShoppingCart class="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 class="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
                    Categories Coming Soon
                </h3>
                <p class="text-gray-500">We're organizing the best Nigerian heritage foods.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "landing"
});

import {
    CalendarDays,
    Fish,
    ShoppingCart,
    Sprout,
    Wheat
} from 'lucide-vue-next';

// Set page title and meta
useHead({
    title: 'Heritage Market - Farm2Door',
    meta: [
        { name: 'description', content: 'Discover authentic Nigerian heritage foods sourced directly from local farms. Shop traditional proteins, chemical-free staples, village ingredients, and seasonal specialties.' }
    ]
});
</script>