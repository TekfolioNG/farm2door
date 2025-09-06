<!-- pages/market/index.vue -->
<template>
    <div class="max-w-screen-xl mx-auto px-5 pt-24 bg-white dark:bg-gray-900">

        <!-- Hero Section -->
        <div class="max-w-7xl mx-auto px-4 py-12">
            <div class="text-center mb-16">
                <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                    Nigeria's <span class="text-[#7ba54a] dark:text-[#9dcd5a]">Heritage Market</span>
                </h1>
                <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Discover authentic Nigerian foods sourced directly from local farms and traditional processors.
                    Each product tells a story of our rich culinary heritage.
                </p>
            </div>

            <!-- Categories Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

                <!-- Pure Heritage Proteins -->
                <div
                    class="group relative overflow-hidden rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl shadow-gray-900/5 dark:shadow-gray-900/20 hover:shadow-2xl hover:shadow-gray-900/10 dark:hover:shadow-gray-900/30 transition-all duration-500 hover:-translate-y-2">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-[#7ba54a]/5 via-transparent to-[#6a9342]/5 dark:from-[#9dcd5a]/10 dark:via-transparent dark:to-[#7ba54a]/10">
                    </div>
                    <div class="relative p-8 lg:p-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                        <div class="flex items-start mb-6">
                            <div
                                class="w-16 h-16 bg-gradient-to-br from-[#7ba54a] to-[#6a9342] dark:from-[#9dcd5a] dark:to-[#7ba54a] rounded-2xl flex items-center justify-center shadow-lg shadow-[#7ba54a]/25 dark:shadow-[#9dcd5a]/25 mr-6">
                                <Fish class="w-8 h-8 text-white" />
                            </div>
                            <div class="flex-1">
                                <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                                    Pure Heritage Proteins
                                </h2>
                                <p class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                                    Wild-sourced and traditionally processed proteins rich in authentic taste.
                                </p>
                            </div>
                        </div>

                        <NuxtLink to="/market/proteins"
                            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#7ba54a] to-[#6a9342] dark:from-[#9dcd5a] dark:to-[#7ba54a] hover:from-[#6a9342] hover:to-[#5d7c3a] dark:hover:from-[#7ba54a] dark:hover:to-[#6a9342] text-white font-semibold rounded-xl transition-all duration-300 group-hover:scale-105 shadow-lg hover:shadow-xl">
                            Shop Proteins
                            <ArrowRight class="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Traditional Staples -->
                <div
                    class="group relative overflow-hidden rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl shadow-gray-900/5 dark:shadow-gray-900/20 hover:shadow-2xl hover:shadow-gray-900/10 dark:hover:shadow-gray-900/30 transition-all duration-500 hover:-translate-y-2">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-[#9dcd5a]/5 via-transparent to-[#7ba54a]/5 dark:from-[#b8d975]/10 dark:via-transparent dark:to-[#9dcd5a]/10">
                    </div>
                    <div class="relative p-8 lg:p-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                        <div class="flex items-start mb-6">
                            <div
                                class="w-16 h-16 bg-gradient-to-br from-[#9dcd5a] to-[#7ba54a] dark:from-[#b8d975] dark:to-[#9dcd5a] rounded-2xl flex items-center justify-center shadow-lg shadow-[#9dcd5a]/25 dark:shadow-[#b8d975]/25 mr-6">
                                <Wheat class="w-8 h-8 text-white" />
                            </div>
                            <div class="flex-1">
                                <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                                    Traditional Staples <span
                                        class="text-lg font-normal text-[#7ba54a] dark:text-[#9dcd5a]">(Chemical-Free)</span>
                                </h2>
                                <p class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                                    Unrefined oils, flours, and grains—processed without artificial additives.
                                </p>
                            </div>
                        </div>

                        <NuxtLink to="/market/staples"
                            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#9dcd5a] to-[#7ba54a] dark:from-[#b8d975] dark:to-[#9dcd5a] hover:from-[#7ba54a] hover:to-[#6a9342] dark:hover:from-[#9dcd5a] dark:hover:to-[#7ba54a] text-white font-semibold rounded-xl transition-all duration-300 group-hover:scale-105 shadow-lg hover:shadow-xl">
                            Shop Staples
                            <ArrowRight class="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Village Story Ingredients -->
                <div
                    class="group relative overflow-hidden rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl shadow-gray-900/5 dark:shadow-gray-900/20 hover:shadow-2xl hover:shadow-gray-900/10 dark:hover:shadow-gray-900/30 transition-all duration-500 hover:-translate-y-2">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-[#b8d975]/5 via-transparent to-[#9dcd5a]/5 dark:from-[#c5e085]/10 dark:via-transparent dark:to-[#b8d975]/10">
                    </div>
                    <div class="relative p-8 lg:p-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                        <div class="flex items-start mb-6">
                            <div
                                class="w-16 h-16 bg-gradient-to-br from-[#b8d975] to-[#9dcd5a] dark:from-[#c5e085] dark:to-[#b8d975] rounded-2xl flex items-center justify-center shadow-lg shadow-[#b8d975]/25 dark:shadow-[#c5e085]/25 mr-6">
                                <Sprout class="w-8 h-8 text-white" />
                            </div>
                            <div class="flex-1">
                                <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                                    Village Story Ingredients
                                </h2>
                                <p class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                                    Heirloom seeds, dried vegetables, and fermented delicacies from local traditions.
                                </p>
                            </div>
                        </div>

                        <NuxtLink to="/market/ingredients"
                            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#b8d975] to-[#9dcd5a] dark:from-[#c5e085] dark:to-[#b8d975] hover:from-[#9dcd5a] hover:to-[#7ba54a] dark:hover:from-[#b8d975] dark:to-[#9dcd5a] text-white font-semibold rounded-xl transition-all duration-300 group-hover:scale-105 shadow-lg hover:shadow-xl">
                            Shop Ingredients
                            <ArrowRight class="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Native Seasonals -->
                <div
                    class="group relative overflow-hidden rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl shadow-gray-900/5 dark:shadow-gray-900/20 hover:shadow-2xl hover:shadow-gray-900/10 dark:hover:shadow-gray-900/30 transition-all duration-500 hover:-translate-y-2">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-[#c5e085]/5 via-transparent to-[#b8d975]/5 dark:from-[#d2e595]/10 dark:via-transparent dark:to-[#c5e085]/10">
                    </div>
                    <div class="relative p-8 lg:p-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                        <div class="flex items-start mb-6">
                            <div
                                class="w-16 h-16 bg-gradient-to-br from-[#c5e085] to-[#b8d975] dark:from-[#d2e595] dark:to-[#c5e085] rounded-2xl flex items-center justify-center shadow-lg shadow-[#c5e085]/25 dark:shadow-[#d2e595]/25 mr-6">
                                <CalendarDays class="w-8 h-8 text-white" />
                            </div>
                            <div class="flex-1">
                                <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                                    Native Seasonals
                                </h2>
                                <p class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                                    Fresh harvests and seasonal specials, available for a limited time.
                                </p>
                                <div
                                    class="inline-flex items-center px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-sm font-medium rounded-full mb-4">
                                    <Clock class="w-4 h-4 mr-2" />
                                    Limited Time Only
                                </div>
                            </div>
                        </div>

                        <NuxtLink to="/market/seasonals"
                            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#c5e085] to-[#b8d975] dark:from-[#d2e595] dark:to-[#c5e085] hover:from-[#b8d975] hover:to-[#9dcd5a] dark:hover:from-[#c5e085] dark:hover:to-[#b8d975] text-white font-semibold rounded-xl transition-all duration-300 group-hover:scale-105 shadow-lg hover:shadow-xl">
                            Shop Seasonals
                            <ArrowRight class="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                        </NuxtLink>
                    </div>
                </div>

            </div>

            <!-- Why Shop Heritage Section -->
            <div class="mt-20 text-center">
                <div
                    class="bg-gradient-to-r from-[#7ba54a]/5 via-[#9dcd5a]/5 to-[#b8d975]/5 dark:from-[#7ba54a]/10 dark:via-[#9dcd5a]/10 dark:to-[#b8d975]/10 rounded-3xl border border-[#7ba54a]/20 dark:border-[#9dcd5a]/20 p-8 lg:p-12">
                    <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        Why Choose Heritage Foods?
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div class="text-center">
                            <div
                                class="w-12 h-12 bg-[#7ba54a] dark:bg-[#9dcd5a] rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Shield class="w-6 h-6 text-white" />
                            </div>
                            <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Authenticity Guaranteed</h4>
                            <p class="text-gray-600 dark:text-gray-300">Traditional processing methods preserved for
                                generations</p>
                        </div>
                        <div class="text-center">
                            <div
                                class="w-12 h-12 bg-[#9dcd5a] dark:bg-[#b8d975] rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Users class="w-6 h-6 text-white" />
                            </div>
                            <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Support Local Farmers</h4>
                            <p class="text-gray-600 dark:text-gray-300">Direct partnerships with Nigerian farming
                                communities</p>
                        </div>
                        <div class="text-center">
                            <div
                                class="w-12 h-12 bg-[#b8d975] dark:bg-[#c5e085] rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Heart class="w-6 h-6 text-white" />
                            </div>
                            <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Chemical-Free Quality</h4>
                            <p class="text-gray-600 dark:text-gray-300">Pure ingredients with no artificial additives or
                                preservatives</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "landing"
});

import {
    ArrowRight,
    CalendarDays,
    Clock,
    Fish,
    Heart,
    Shield,
    Sprout,
    Users,
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