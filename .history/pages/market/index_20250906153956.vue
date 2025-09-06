<!-- pages/market/index.vue -->
<template>
    <div class="max-w-screen-xl mx-auto px-5 pt-32 pb-16 bg-white dark:bg-gray-900">

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
        <div class="max-w-7xl mx-auto px-4 py-6 mb-24">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <!-- Pure Heritage Proteins -->
                <div
                    class="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-[#7ba54a]/30 dark:hover:border-[#7ba54a]/30 hover:-translate-y-1">
                    <!-- Product Image -->
                    <div class="h-48 overflow-hidden bg-transparent">
                        <div class="w-full h-full flex items-center justify-center p-4">
                            <img src="/assets/img/farm-2dooor-meat.png" alt="Farm2Door"
                                class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                        </div>
                    </div>

                    <!-- Product Info -->
                    <div class="p-4">
                        <div class="mb-2">
                            <span
                                class="text-xs font-medium text-[#7ba54a] bg-[#7ba54a]/10 px-2 py-1 rounded-full group-hover:bg-[#7ba54a]/15 transition-colors duration-200">
                                Traditonally-Sourced & Processed
                            </span>
                        </div>
                        <h3
                            class="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[#7ba54a] dark:group-hover:text-[#9dcd5a] transition-colors duration-200">
                            Pure Heritage Proteins
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            Locally sourced meat, fish, and seafood, prepared the traditional way for rich, natural
                            flavor.
                        </p>

                        <!-- Action Button -->
                        <NuxtLink to="/market/pure-heritage-proteins"
                            class="block w-full bg-[#6a9342] hover:bg-[#5a7d38] text-white py-3 px-4 rounded-lg transition-all duration-200 font-medium text-center shadow-sm hover:shadow-md transform hover:scale-[1.02] active:scale-[0.98] group-hover:shadow-lg">
                            Shop Proteins
                        </NuxtLink>
                    </div>
                </div>

                <!-- Traditional Staples -->
                <div
                    class="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-[#9dcd5a]/30 dark:hover:border-[#9dcd5a]/30 hover:-translate-y-1">
                    <!-- Product Image -->
                    <div class="h-48 overflow-hidden bg-transparent">
                        <div class="w-full h-full flex items-center justify-center p-4">
                            <img src="/assets/img/farm-2dooor-meat.png" alt="Farm2Door"
                                class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                        </div>
                    </div>

                    <!-- Product Info -->
                    <div class="p-4">
                        <div class="mb-2">
                            <span
                                class="text-xs font-medium text-[#9dcd5a] bg-[#9dcd5a]/10 px-2 py-1 rounded-full group-hover:bg-[#9dcd5a]/15 transition-colors duration-200">
                                Organic & Chemical-Free
                            </span>
                        </div>
                        <h3
                            class="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[#9dcd5a] dark:group-hover:text-[#b8d975] transition-colors duration-200">
                            Traditional Staples
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            Everyday essentials like palm oil, flours, and garri; naturally processed without chemical
                            additives.
                        </p>

                        <!-- Action Button -->
                        <NuxtLink to="/market/traditional-staples"
                            class="block w-full bg-[#7ba54a] hover:bg-[#6a9342] text-white py-3 px-4 rounded-lg transition-all duration-200 font-medium text-center shadow-sm hover:shadow-md transform hover:scale-[1.02] active:scale-[0.98] group-hover:shadow-lg">
                            Shop Staples
                        </NuxtLink>
                    </div>
                </div>

                <!-- Village Story Ingredients -->
                <div
                    class="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-[#b8d975]/30 dark:hover:border-[#b8d975]/30 hover:-translate-y-1">
                    <!-- Product Image -->
                    <div class="h-48 overflow-hidden bg-transparent">
                        <div class="w-full h-full flex items-center justify-center p-4">
                            <img src="/assets/img/farm-2dooor-meat.png" alt="Farm2Door"
                                class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                        </div>
                    </div>

                    <!-- Product Info -->
                    <div class="p-4">
                        <div class="mb-2">
                            <span
                                class="text-xs font-medium text-[#b8d975] bg-[#b8d975]/10 px-2 py-1 rounded-full group-hover:bg-[#b8d975]/15 transition-colors duration-200">
                                Native Delicacies
                            </span>
                        </div>
                        <h3
                            class="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[#b8d975] dark:group-hover:text-[#c5e085] transition-colors duration-200">
                            Village Story Ingredients
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            Nigerian kitchen favorites like egusi, ogbono, iru, ugba, and more—dried or preserved the
                            natural way.
                        </p>

                        <!-- Action Button -->
                        <NuxtLink to="/market/village-story-ingredients"
                            class="block w-full bg-[#7ba54a] hover:bg-[#6a9342] text-white py-3 px-4 rounded-lg transition-all duration-200 font-medium text-center shadow-sm hover:shadow-md transform hover:scale-[1.02] active:scale-[0.98] group-hover:shadow-lg">
                            Shop Ingredients
                        </NuxtLink>
                    </div>
                </div>

                <!-- Native Seasonals -->
                <div
                    class="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-[#c5e085]/30 dark:hover:border-[#c5e085]/30 hover:-translate-y-1">
                    <!-- Product Image -->
                    <div class="h-48 overflow-hidden bg-transparent">
                        <div class="w-full h-full flex items-center justify-center p-4">
                            <img src="/assets/img/farm-2dooor-meat.png" alt="Farm2Door"
                                class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                        </div>
                    </div>

                    <!-- Product Info -->
                    <div class="p-4">
                        <div class="mb-2">
                            <span
                                class="text-xs font-medium text-[#c5e085] bg-[#c5e085]/10 px-2 py-1 rounded-full group-hover:bg-[#c5e085]/15 transition-colors duration-200">
                                Fresh & Limited Harvests
                            </span>
                        </div>
                        <h3
                            class="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[#c5e085] dark:group-hover:text-[#c5e085] transition-colors duration-200">
                            Native Seasonals
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            Fresh maize, plantain, and other seasonal foods available only at certain times of the year.
                        </p>

                        <!-- Action Button -->
                        <NuxtLink to="/market/native-seasonals"
                            class="block w-full bg-[#b8d975] hover:bg-[#9dcd5a] text-gray-800 hover:text-white dark:text-gray-900 dark:hover:text-white py-3 px-4 rounded-lg transition-all duration-200 font-medium text-center shadow-sm hover:shadow-md transform hover:scale-[1.02] active:scale-[0.98] group-hover:shadow-lg">
                            Shop Seasonals
                        </NuxtLink>
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

// No auth middleware needed for browsing
</script>