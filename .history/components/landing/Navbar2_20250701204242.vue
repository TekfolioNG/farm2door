<script setup>
import { ref } from 'vue';

const menuitems = [
    { title: "Home", path: "/" },
    { title: "About Wilson", path: "/about" },
    { title: "Clarity Sessions", path: "/clarity" },
    { title: "Training", path: "/training" },
    { title: "My Books", path: "/books" },
];

const open = ref(false);
const isContactClicked = ref(false);
const isContactHovered = ref(false);

const handleContactClick = () => {
    isContactClicked.value = true;
    setTimeout(() => {
        isContactClicked.value = false;
    }, 300);
};

const handleContactHover = (hovered) => {
    isContactHovered.value = hovered;
};

// Inverted color classes for non-homepage
const textColorClass = 'text-gray-700 hover:text-white hover:bg-gray-700';
const progressBarColor = 'bg-gray-700';
</script>

<template>
    <div class="absolute w-full z-50 top-0 left-0 right-0 -mt-4">
        <!-- Inverted background - gray instead of transparent -->
        <div class="bg-gray-50/95 backdrop-blur-md border-b border-gray-200/50">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <header class="flex items-center justify-between py-6">
                    <!-- Logo section - removed invert classes for black logo -->
                    <NuxtLink to="/" class="inline-block">
                        <img src="/img/wilsonsamson-logo.png" alt="wilsonsamson Logo"
                            class="h-16 md:h-20 drop-shadow-lg" />
                    </NuxtLink>

                    <!-- Desktop Navigation -->
                    <div class="hidden md:flex items-center w-full">
                        <!-- Left-aligned Nav Items -->
                        <nav class="ml-16">
                            <ul class="flex space-x-6 lg:space-x-8">
                                <li v-for="item in menuitems" :key="item.title" class="relative">
                                    <NuxtLink :to="item.path" :class="[
                                        'text-sm lg:text-base transition-all duration-300 flex items-center whitespace-nowrap font-medium text-gray-500 hover:text-gray-800 hover:scale-105 hover:font-semibold relative group',
                                        { 'router-link-exact-active': false }
                                    ]">
                                        {{ item.title }}
                                        <!-- Underline hover effect - now gray -->
                                        <span
                                            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </nav>

                        <!-- Right-aligned Connect with Me Button -->
                        <div class="hidden md:flex items-center ml-auto">
                            <NuxtLink to="/contact"
                                class="px-4 py-2 rounded-md text-xs lg:text-sm font-medium whitespace-nowrap transition-all duration-200 mr-12 relative overflow-hidden group"
                                :class="[
                                    textColorClass,
                                    'border border-transparent bg-transparent',
                                    isContactClicked ? 'animate-pulse scale-95' : ''
                                ]" @click="handleContactClick" @mouseenter="handleContactHover(true)"
                                @mouseleave="handleContactHover(false)">
                                CONNECT WITH ME

                                <!-- Animated Border Progress - Default state (visible) -->
                                <div class="absolute inset-0 rounded-md pointer-events-none">
                                    <!-- Top border -->
                                    <div class="absolute top-0 left-0 h-0.5 rounded-t-md transition-all duration-300 ease-out"
                                        :class="[
                                            progressBarColor,
                                            !isContactHovered && !isContactClicked ? 'w-full' : 'w-0'
                                        ]"></div>
                                    <!-- Right border -->
                                    <div class="absolute top-0 right-0 w-0.5 rounded-tr-md transition-all duration-300 ease-out delay-75"
                                        :class="[
                                            progressBarColor,
                                            !isContactHovered && !isContactClicked ? 'h-full' : 'h-0'
                                        ]"></div>
                                    <!-- Bottom border -->
                                    <div class="absolute bottom-0 right-0 h-0.5 rounded-br-md transition-all duration-300 ease-out delay-150"
                                        :class="[
                                            progressBarColor,
                                            !isContactHovered && !isContactClicked ? 'w-full' : 'w-0'
                                        ]"></div>
                                    <!-- Left border -->
                                    <div class="absolute bottom-0 left-0 w-0.5 rounded-bl-md transition-all duration-300 ease-out delay-[225ms]"
                                        :class="[
                                            progressBarColor,
                                            !isContactHovered && !isContactClicked ? 'h-full' : 'h-0'
                                        ]"></div>
                                </div>

                                <!-- Small dash underneath text on hover - now white for contrast -->
                                <div class="absolute bottom-0 right-4 h-0.5 bg-white rounded-full transition-all duration-300 ease-out"
                                    :class="[
                                        isContactHovered ? 'w-8 opacity-100' : 'w-0 opacity-0'
                                    ]"></div>

                                <!-- Ripple effect overlay - now gray -->
                                <span v-if="isContactClicked"
                                    class="absolute inset-0 bg-gray-700 rounded-md animate-ping"></span>
                            </NuxtLink>
                        </div>
                    </div>

                    <!-- Mobile Menu Button -->
                    <div class="md:hidden flex items-center">
                        <button @click="open = !open"
                            class="focus:outline-none text-gray-500 hover:text-gray-800 transition-colors duration-200">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path v-show="!open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                                <path v-show="open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </header>

                <!-- Mobile Menu -->
                <transition enter-active-class="transition ease-out duration-200"
                    enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-150"
                    leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                    <div v-show="open"
                        class="md:hidden mt-2 py-4 rounded-xl shadow-2xl bg-white/95 backdrop-blur-md border border-gray-200">
                        <div v-for="item in menuitems" :key="item.title" class="block">
                            <!-- Regular menu items - inverted colors -->
                            <NuxtLink :to="item.path"
                                class="block px-6 py-4 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 mx-2 rounded-lg"
                                @click="open = false">
                                {{ item.title }}
                            </NuxtLink>
                        </div>

                        <!-- Mobile Connect Button - inverted colors -->
                        <div class="px-4 mt-6 border-t border-gray-200 pt-4">
                            <NuxtLink to="/contact"
                                class="block w-full text-center px-6 py-4 rounded-lg text-base font-medium text-gray-700 hover:text-white bg-gray-100 hover:bg-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl border border-gray-200"
                                @click="open = false">
                                CONNECT WITH ME
                            </NuxtLink>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Active link styling - inverted colors */
:deep(.router-link-exact-active) {
    color: #1f2937 !important;
    /* gray-800 */
    font-weight: 600;
    transform: scale(1.05);
}

:deep(.router-link-exact-active::after) {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #1f2937;
    /* gray-800 */
    border-radius: 1px;
}

/* Prevent non-exact active links from getting the active color */
:deep(.router-link-active:not(.router-link-exact-active)) {
    color: inherit;
    font-weight: inherit;
}

/* Enhanced transitions */
a,
button {
    transition-property: color, background-color, border-color, transform, box-shadow, font-weight;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Mobile dropdown animation */
.max-h-0 {
    max-height: 0;
}

.max-h-96 {
    max-height: 32rem;
}
</style>