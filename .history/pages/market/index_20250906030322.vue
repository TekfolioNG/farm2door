<!-- pages/market/index.vue -->
<template>
    <div class="max-w-screen-xl mx-auto px-5 pt-24 bg-white dark:bg-gray-900">

        <!-- Page Header -->
        <div class="max-w-7xl mx-auto px-4 pt-8 pb-4">
            <div class="flex justify-between items-start mb-8">
                <div>
                    <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Market
                    </h1>
                    <p class="text-gray-600 dark:text-gray-400">
                        Browse our collection of authentic Nigerian foods
                    </p>
                </div>
                <div class="text-right max-w-xs">
                    <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        Nigeria's Heritage Market
                    </h2>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                        Discover authentic Nigerian foods sourced directly from local farms and traditional processors.
                    </p>
                </div>
            </div>
        </div>

        <!-- Products Grid -->
        <div class="max-w-7xl mx-auto px-4 py-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <!-- Pure Heritage Proteins -->
                <div
                    class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
                    <!-- Product Image -->
                    <div class="aspect-square overflow-hidden bg-gray-50 dark:bg-gray-700">
                        <div
                            class="w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-[#7ba54a]/10 to-[#6a9342]/10">
                            <Fish class="w-16 h-16 text-[#7ba54a] dark:text-[#9dcd5a]" />
                        </div>
                    </div>

                    <!-- Product Info -->
                    <div class="p-4">
                        <div class="mb-2">
                            <span class="text-xs font-medium text-[#7ba54a] bg-[#7ba54a]/10 px-2 py-1 rounded-full">
                                Traditonally-Sourced & Processed
                            </span>
                        </div>
                        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
                            Pure Heritage Proteins
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            Locally sourced meat, fish, and seafood, prepared the traditional way for rich, natural
                            flavor.
                        </p>

                        <!-- Action Button -->
                        <NuxtLink to="/market/pure-heritage-proteins"
                            class="block w-full bg-[#7ba54a] text-white py-2 px-4 rounded-lg hover:bg-[#6a9342] transition-colors font-medium text-center">
                            Shop Proteins
                        </NuxtLink>
                    </div>
                </div>

                <!-- Traditional Staples -->
                <div
                    class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
                    <!-- Product Image -->
                    <div class="aspect-square overflow-hidden bg-gray-50 dark:bg-gray-700">
                        <div
                            class="w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-[#9dcd5a]/10 to-[#7ba54a]/10">
                            <Wheat class="w-16 h-16 text-[#9dcd5a] dark:text-[#b8d975]" />
                        </div>
                    </div>

                    <!-- Product Info -->
                    <div class="p-4">
                        <div class="mb-2">
                            <span class="text-xs font-medium text-[#9dcd5a] bg-[#9dcd5a]/10 px-2 py-1 rounded-full">
                                Organic & Chemical-Free
                            </span>
                        </div>
                        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
                            Traditional Staples
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            Everyday essentials like palm oil, flours, and garri; naturally processed without chemical
                            additives.
                        </p>

                        <!-- Action Button -->
                        <NuxtLink to="/market/traditional-staples"
                            class="block w-full bg-[#9dcd5a] text-white py-2 px-4 rounded-lg hover:bg-[#7ba54a] transition-colors font-medium text-center">
                            Shop Staples
                        </NuxtLink>
                    </div>
                </div>

                <!-- Village Story Ingredients -->
                <div
                    class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
                    <!-- Product Image -->
                    <div class="aspect-square overflow-hidden bg-gray-50 dark:bg-gray-700">
                        <div
                            class="w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-[#b8d975]/10 to-[#9dcd5a]/10">
                            <Sprout class="w-16 h-16 text-[#b8d975] dark:text-[#c5e085]" />
                        </div>
                    </div>

                    <!-- Product Info -->
                    <div class="p-4">
                        <div class="mb-2">
                            <span class="text-xs font-medium text-[#b8d975] bg-[#b8d975]/10 px-2 py-1 rounded-full">
                                Native Delicacies
                            </span>
                        </div>
                        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
                            Village Story Ingredients
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            Nigerian kitchen favorites like egusi, ogbono, iru, ugba, and more—dried or preserved the
                            natural way.
                        </p>

                        <!-- Action Button -->
                        <NuxtLink to="/market/village-story-ingredients"
                            class="block w-full bg-[#b8d975] text-white py-2 px-4 rounded-lg hover:bg-[#9dcd5a] transition-colors font-medium text-center">
                            Shop Ingredients
                        </NuxtLink>
                    </div>
                </div>

                <!-- Native Seasonals -->
                <div
                    class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
                    <!-- Product Image -->
                    <div class="aspect-square overflow-hidden bg-gray-50 dark:bg-gray-700">
                        <div
                            class="w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-[#c5e085]/10 to-[#b8d975]/10">
                            <Calendar class="w-16 h-16 text-[#c5e085] dark:text-[#d2e595]" />
                        </div>
                    </div>

                    <!-- Product Info -->
                    <div class="p-4">
                        <div class="mb-2">
                            <span class="text-xs font-medium text-[#c5e085] bg-[#c5e085]/10 px-2 py-1 rounded-full">
                                Fresh & Limited Harvests
                            </span>
                        </div>
                        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
                            Native Seasonals
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            Fresh maize, plantain, and other seasonal foods available only at certain times of the year.
                        </p>

                        <!-- Action Button -->
                        <NuxtLink to="/market/native-seasonals"
                            class="block w-full bg-[#c5e085] text-gray-800 py-2 px-4 rounded-lg hover:bg-[#b8d975] transition-colors font-medium text-center">
                            Shop Seasonals
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Calendar, Fish, Sprout, Wheat } from 'lucide-vue-next';

definePageMeta({
    layout: "landing"
});

// No auth middleware needed for browsing
</script>