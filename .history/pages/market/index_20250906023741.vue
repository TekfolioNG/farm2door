<!-- pages/market/index.vue -->
<template>
    <div class="max-w-screen-xl mx-auto px-5 pt-24 bg-white dark:bg-gray-900 min-h-screen">

        <!-- Hero Section -->
        <div class="max-w-7xl mx-auto px-4 py-12">
            <div class="text-center mb-16">
                <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                    Discover Nigeria's Heritage Foods
                </h1>
                <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Explore our curated collection of authentic Nigerian ingredients, sourced directly from local
                    farmers and traditional processors.
                </p>
            </div>

            <!-- Categories Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <!-- Pure Heritage Proteins -->
                <NuxtLink to="/market/pure-heritage-proteins"
                    class="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:-translate-y-2">
                    <div
                        class="aspect-video overflow-hidden bg-gradient-to-br from-[#7ba54a]/10 to-[#6a9342]/10 dark:from-[#9dcd5a]/10 dark:to-[#7ba54a]/10">
                        <div class="h-full flex items-center justify-center p-8">
                            <div
                                class="w-20 h-20 bg-[#7ba54a] dark:bg-[#9dcd5a] rounded-2xl flex items-center justify-center text-white">
                                <Fish class="w-10 h-10" />
                            </div>
                        </div>
                    </div>
                    <div class="p-8">
                        <div class="mb-4">
                            <span
                                class="text-xs font-semibold text-[#7ba54a] dark:text-[#9dcd5a] uppercase tracking-wider">
                                Pure Heritage Proteins
                            </span>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Wild-sourced & Traditionally Processed
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            Proteins rich in authentic taste, sustainably sourced and processed using traditional
                            methods.
                        </p>
                        <div class="flex items-center justify-between">
                            <span class="text-sm font-medium text-[#7ba54a] dark:text-[#9dcd5a] group-hover:underline">
                                Shop Proteins
                            </span>
                            <ArrowRight
                                class="w-5 h-5 text-[#7ba54a] dark:text-[#9dcd5a] group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </NuxtLink>

                <!-- Traditional Staples -->
                <NuxtLink to="/market/traditional-staples"
                    class="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:-translate-y-2">
                    <div
                        class="aspect-video overflow-hidden bg-gradient-to-br from-[#9dcd5a]/10 to-[#7ba54a]/10 dark:from-[#b8d975]/10 dark:to-[#9dcd5a]/10">
                        <div class="h-full flex items-center justify-center p-8">
                            <div
                                class="w-20 h-20 bg-[#9dcd5a] dark:bg-[#b8d975] rounded-2xl flex items-center justify-center text-white">
                                <Wheat class="w-10 h-10" />
                            </div>
                        </div>
                    </div>
                    <div class="p-8">
                        <div class="mb-4">
                            <span
                                class="text-xs font-semibold text-[#9dcd5a] dark:text-[#b8d975] uppercase tracking-wider">
                                Traditional Staples
                            </span>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Chemical-Free & Unrefined
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            Unrefined oils, flours, and grains—processed without artificial additives or chemicals.
                        </p>
                        <div class="flex items-center justify-between">
                            <span class="text-sm font-medium text-[#9dcd5a] dark:text-[#b8d975] group-hover:underline">
                                Shop Staples
                            </span>
                            <ArrowRight
                                class="w-5 h-5 text-[#9dcd5a] dark:text-[#b8d975] group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </NuxtLink>

                <!-- Village Story Ingredients -->
                <NuxtLink to="/market/village-story-ingredients"
                    class="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:-translate-y-2">
                    <div
                        class="aspect-video overflow-hidden bg-gradient-to-br from-[#b8d975]/10 to-[#9dcd5a]/10 dark:from-[#c5e085]/10 dark:to-[#b8d975]/10">
                        <div class="h-full flex items-center justify-center p-8">
                            <div
                                class="w-20 h-20 bg-[#b8d975] dark:bg-[#c5e085] rounded-2xl flex items-center justify-center text-white">
                                <Sprout class="w-10 h-10" />
                            </div>
                        </div>
                    </div>
                    <div class="p-8">
                        <div class="mb-4">
                            <span
                                class="text-xs font-semibold text-[#b8d975] dark:text-[#c5e085] uppercase tracking-wider">
                                Village Story Ingredients
                            </span>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Heirloom & Traditional Delicacies
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            Heirloom seeds, dried vegetables, and fermented delicacies from local traditions and
                            heritage.
                        </p>
                        <div class="flex items-center justify-between">
                            <span class="text-sm font-medium text-[#b8d975] dark:text-[#c5e085] group-hover:underline">
                                Shop Ingredients
                            </span>
                            <ArrowRight
                                class="w-5 h-5 text-[#b8d975] dark:text-[#c5e085] group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </NuxtLink>

                <!-- Native Seasonals -->
                <NuxtLink to="/market/native-seasonals"
                    class="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:-translate-y-2">
                    <div
                        class="aspect-video overflow-hidden bg-gradient-to-br from-[#c5e085]/10 to-[#b8d975]/10 dark:from-[#d2e595]/10 dark:to-[#c5e085]/10">
                        <div class="h-full flex items-center justify-center p-8">
                            <div
                                class="w-20 h-20 bg-[#c5e085] dark:bg-[#d2e595] rounded-2xl flex items-center justify-center text-white">
                                <Calendar class="w-10 h-10" />
                            </div>
                        </div>
                    </div>
                    <div class="p-8">
                        <div class="mb-4">
                            <span
                                class="text-xs font-semibold text-[#c5e085] dark:text-[#d2e595] uppercase tracking-wider">
                                Native Seasonals
                            </span>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Fresh & Limited Harvests
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            Fresh harvests and seasonal specials, available for a limited time from local farms.
                        </p>
                        <div class="flex items-center justify-between">
                            <span class="text-sm font-medium text-[#c5e085] dark:text-[#d2e595] group-hover:underline">
                                Shop Seasonals
                            </span>
                            <ArrowRight
                                class="w-5 h-5 text-[#c5e085] dark:text-[#d2e595] group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </NuxtLink>
            </div>

            <!-- Featured Products Section (Optional) -->
            <div class="mt-20 text-center">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Why Choose Farm2Door?
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div class="text-center">
                        <div
                            class="w-16 h-16 bg-[#7ba54a]/10 dark:bg-[#9dcd5a]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Shield class="w-8 h-8 text-[#7ba54a] dark:text-[#9dcd5a]" />
                        </div>
                        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Authentic Quality</h3>
                        <p class="text-gray-600 dark:text-gray-300">Direct from local farmers using traditional methods
                        </p>
                    </div>
                    <div class="text-center">
                        <div
                            class="w-16 h-16 bg-[#7ba54a]/10 dark:bg-[#9dcd5a]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Truck class="w-8 h-8 text-[#7ba54a] dark:text-[#9dcd5a]" />
                        </div>
                        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Fresh Delivery</h3>
                        <p class="text-gray-600 dark:text-gray-300">Carefully packaged and delivered to your doorstep
                        </p>
                    </div>
                    <div class="text-center">
                        <div
                            class="w-16 h-16 bg-[#7ba54a]/10 dark:bg-[#9dcd5a]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Heart class="w-8 h-8 text-[#7ba54a] dark:text-[#9dcd5a]" />
                        </div>
                        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Community Support</h3>
                        <p class="text-gray-600 dark:text-gray-300">Supporting local farmers and preserving traditions
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ArrowRight, Calendar, Fish, Heart, Shield, Sprout, Truck, Wheat } from 'lucide-vue-next';

definePageMeta({
    layout: "landing"
});

// No auth middleware needed for browsing
</script>

<style scoped>
/* Custom hover effects */
.group:hover .group-hover\:translate-x-1 {
    transform: translateX(0.25rem);
}
</style>