<!-- components/landing/AuthenticatedNavbar.vue -->
<template>
    <nav
        class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#9dcd5a]/10 to-transparent dark:from-[#9dcd5a]/5 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <!-- Logo -->
                <div class="flex-shrink-0">
                    <NuxtLink to="/dashboard">
                        <img src="/assets/img/Farm2Door Logo-trans.png" alt="Farm2Door"
                            class="pt-12 h-40 w-auto filter dark:brightness-0 dark:invert transition-all duration-300" />
                    </NuxtLink>
                </div>

                <!-- Desktop Navigation Links -->
                <div class="hidden md:flex items-center space-x-8">
                    <!-- Dashboard -->
                    <NuxtLink to="/dashboard"
                        class="relative text-gray-700 dark:text-gray-300 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] font-medium transition-colors duration-200 py-2"
                        active-class="!text-[#7ba54a] dark:!text-[#9dcd5a]">
                        Dashboard
                        <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7ba54a] dark:bg-[#9dcd5a] transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
                            :class="{ 'scale-x-100': $route.path === '/dashboard' }"></div>
                    </NuxtLink>

                    <!-- Market with Dropdown -->
                    <div class="relative" ref="marketMenuRef">
                        <NuxtLink to="/market" @click="toggleMarketMenu"
                            class="relative flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] font-medium transition-colors duration-200 py-2"
                            :class="{ 'text-[#7ba54a] dark:text-[#9dcd5a]': $route.path.startsWith('/market') }">
                            <span>Market</span>
                            <ChevronDown class="w-4 h-4 transition-transform duration-200"
                                :class="{ 'rotate-180': showMarketMenu }" />
                            <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7ba54a] dark:bg-[#9dcd5a] transform scale-x-0 transition-transform duration-200"
                                :class="{ 'scale-x-100': $route.path.startsWith('/market') }"></div>
                        </NuxtLink>

                        <!-- Market Dropdown Menu -->
                        <Transition enter-active-class="transition ease-out duration-100"
                            enter-from-class="transform opacity-0 scale-95"
                            enter-to-class="transform opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75"
                            leave-from-class="transform opacity-100 scale-100"
                            leave-to-class="transform opacity-0 scale-95">
                            <div v-if="showMarketMenu"
                                class="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1">
                                <NuxtLink to="/market/heritage-proteins" @click="closeMarketMenu"
                                    class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] transition-colors"
                                    active-class="!text-[#7ba54a] dark:!text-[#9dcd5a] bg-gray-100 dark:bg-gray-700">
                                    Pure Heritage Proteins
                                </NuxtLink>
                                <NuxtLink to="/market/traditional-staples" @click="closeMarketMenu"
                                    class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] transition-colors"
                                    active-class="!text-[#7ba54a] dark:!text-[#9dcd5a] bg-gray-100 dark:bg-gray-700">
                                    Traditional Staples
                                </NuxtLink>
                                <NuxtLink to="/market/village-ingredients" @click="closeMarketMenu"
                                    class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] transition-colors"
                                    active-class="!text-[#7ba54a] dark:!text-[#9dcd5a] bg-gray-100 dark:bg-gray-700">
                                    Village Story Ingredients
                                </NuxtLink>
                                <NuxtLink to="/market/native-seasonals" @click="closeMarketMenu"
                                    class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] transition-colors"
                                    active-class="!text-[#7ba54a] dark:!text-[#9dcd5a] bg-gray-100 dark:bg-gray-700">
                                    Native Seasonals
                                </NuxtLink>
                            </div>
                        </Transition>
                    </div>

                    <!-- Orders -->
                    <NuxtLink to="/orders"
                        class="relative text-gray-700 dark:text-gray-300 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] font-medium transition-colors duration-200 py-2"
                        active-class="text-[#7ba54a] dark:text-[#9dcd5a]">
                        Orders
                        <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7ba54a] dark:bg-[#9dcd5a] transform scale-x-0 transition-transform duration-200"
                            :class="{ 'scale-x-100': $route.path === '/orders' }"></div>
                    </NuxtLink>

                    <!-- Profile -->
                    <NuxtLink to="/profile"
                        class="relative text-gray-700 dark:text-gray-300 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] font-medium transition-colors duration-200 py-2"
                        active-class="text-[#7ba54a] dark:text-[#9dcd5a]">
                        Profile
                        <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7ba54a] dark:bg-[#9dcd5a] transform scale-x-0 transition-transform duration-200"
                            :class="{ 'scale-x-100': $route.path === '/profile' }"></div>
                    </NuxtLink>

                    <!-- Support -->
                    <NuxtLink to="/support"
                        class="relative text-gray-700 dark:text-gray-300 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] font-medium transition-colors duration-200 py-2"
                        active-class="text-[#7ba54a] dark:text-[#9dcd5a]">
                        Support
                        <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7ba54a] dark:bg-[#9dcd5a] transform scale-x-0 transition-transform duration-200"
                            :class="{ 'scale-x-100': $route.path === '/support' }"></div>
                    </NuxtLink>
                </div>

                <!-- Right side: Theme toggle, Cart, and User menu -->
                <div class="flex items-center space-x-2 sm:space-x-4">
                    <!-- Theme Toggle (moved to left) -->
                    <button @click="toggleTheme"
                        class="p-2 rounded-lg bg-[#c6fc89]/50 dark:bg-[#213b03] hover:bg-[#c6fc89] dark:hover:bg-[#213b03]/80 transition-colors duration-200">
                        <Sun v-if="isDarkMode" class="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        <Moon v-else class="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </button>

                    <!-- Cart Icon with Badge (moved to right) -->
                    <div class="relative">
                        <button @click="goToCart"
                            class="p-2 rounded-lg bg-[#c6fc89]/50 dark:bg-[#213b03] hover:bg-[#c6fc89] dark:hover:bg-[#213b03]/80 transition-colors duration-200">
                            <ShoppingCart class="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        </button>
                        <!-- Cart Badge -->
                        <span v-if="cartCount > 0"
                            class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                            {{ cartCount > 99 ? '99+' : cartCount }}
                        </span>
                    </div>

                    <!-- User Menu -->
                    <div class="relative" ref="userMenuRef">
                        <button @click="toggleUserMenu"
                            class="flex items-center space-x-2 px-3 py-2 rounded-lg bg-[#c6fc89]/50 dark:bg-[#213b03] hover:bg-[#c6fc89] dark:hover:bg-[#213b03]/80 transition-colors duration-200">
                            <!-- User Avatar -->
                            <div class="w-7 h-7 bg-[#7ba54a] rounded-full flex items-center justify-center">
                                <User class="w-4 h-4 text-white" />
                            </div>
                            <span class="hidden sm:inline text-sm font-medium text-gray-700 dark:text-gray-300">
                                {{ user?.firstName || 'User' }}
                            </span>
                            <ChevronDown
                                class="w-4 h-4 text-gray-600 dark:text-gray-300 transition-transform duration-200"
                                :class="{ 'rotate-180': showUserMenu }" />
                        </button>

                        <!-- User Dropdown Menu -->
                        <Transition enter-active-class="transition ease-out duration-100"
                            enter-from-class="transform opacity-0 scale-95"
                            enter-to-class="transform opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75"
                            leave-from-class="transform opacity-100 scale-100"
                            leave-to-class="transform opacity-0 scale-95">
                            <div v-if="showUserMenu"
                                class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1">

                                <!-- User Info Header -->
                                <div class="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                                    <p class="text-sm font-medium text-gray-900 dark:text-gray-100">{{ user?.name }}</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">{{ user?.email }}</p>
                                </div>

                                <!-- Menu Items -->
                                <NuxtLink to="/profile" @click="closeUserMenu"
                                    class="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                    <User class="w-4 h-4 mr-3" />
                                    Profile
                                </NuxtLink>

                                <NuxtLink to="/orders" @click="closeUserMenu"
                                    class="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                    <Package class="w-4 h-4 mr-3" />
                                    My Orders
                                </NuxtLink>

                                <NuxtLink to="/settings" @click="closeUserMenu"
                                    class="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                    <Settings class="w-4 h-4 mr-3" />
                                    Settings
                                </NuxtLink>

                                <div class="border-t border-gray-200 dark:border-gray-700 my-1"></div>

                                <button @click="handleLogout"
                                    class="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                    <LogOut class="w-4 h-4 mr-3" />
                                    Sign Out
                                </button>
                            </div>
                        </Transition>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button @click="toggleMobileMenu"
                        class="md:hidden p-2 rounded-lg bg-[#c6fc89]/50 dark:bg-[#213b03] hover:bg-[#c6fc89] dark:hover:bg-[#213b03]/80 transition-colors duration-200">
                        <Menu v-if="!showMobileMenu" class="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        <X v-else class="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </button>
                </div>
            </div>

            <!-- Mobile Menu -->
            <Transition enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95">
                <div v-if="showMobileMenu"
                    class="md:hidden mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                    <div class="px-2 pt-2 pb-3 space-y-1">
                        <NuxtLink to="/dashboard" @click="closeMobileMenu"
                            class="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                            active-class="text-[#7ba54a] dark:text-[#9dcd5a] bg-gray-100 dark:bg-gray-700">
                            Dashboard
                        </NuxtLink>

                        <!-- Mobile Market Section -->
                        <div>
                            <button @click="toggleMobileMarketMenu"
                                class="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                                :class="{ 'text-[#7ba54a] dark:text-[#9dcd5a] bg-gray-100 dark:bg-gray-700': $route.path.startsWith('/market') }">
                                <span>Market</span>
                                <ChevronDown class="w-4 h-4 transition-transform duration-200"
                                    :class="{ 'rotate-180': showMobileMarketMenu }" />
                            </button>
                            <div v-if="showMobileMarketMenu" class="ml-4 mt-1 space-y-1">
                                <NuxtLink to="/market/heritage-proteins" @click="closeMobileMenu"
                                    class="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                                    active-class="text-[#7ba54a] dark:text-[#9dcd5a] bg-gray-100 dark:bg-gray-700">
                                    Pure Heritage Proteins
                                </NuxtLink>
                                <NuxtLink to="/market/traditional-staples" @click="closeMobileMenu"
                                    class="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                                    active-class="text-[#7ba54a] dark:text-[#9dcd5a] bg-gray-100 dark:bg-gray-700">
                                    Traditional Staples
                                </NuxtLink>
                                <NuxtLink to="/market/village-ingredients" @click="closeMobileMenu"
                                    class="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                                    active-class="text-[#7ba54a] dark:text-[#9dcd5a] bg-gray-100 dark:bg-gray-700">
                                    Village Story Ingredients
                                </NuxtLink>
                                <NuxtLink to="/market/native-seasonals" @click="closeMobileMenu"
                                    class="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                                    active-class="text-[#7ba54a] dark:text-[#9dcd5a] bg-gray-100 dark:bg-gray-700">
                                    Native Seasonals
                                </NuxtLink>
                            </div>
                        </div>

                        <NuxtLink to="/orders" @click="closeMobileMenu"
                            class="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                            active-class="text-[#7ba54a] dark:text-[#9dcd5a] bg-gray-100 dark:bg-gray-700">
                            Orders
                        </NuxtLink>
                        <NuxtLink to="/profile" @click="closeMobileMenu"
                            class="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                            active-class="text-[#7ba54a] dark:text-[#9dcd5a] bg-gray-100 dark:bg-gray-700">
                            Profile
                        </NuxtLink>
                        <NuxtLink to="/support" @click="closeMobileMenu"
                            class="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                            active-class="text-[#7ba54a] dark:text-[#9dcd5a] bg-gray-100 dark:bg-gray-700">
                            Support
                        </NuxtLink>
                    </div>
                </div>
            </Transition>
        </div>
    </nav>
</template>

<script setup lang="ts">
import {
    ChevronDown, LogOut,
    Menu,
    Moon,
    Package, Settings,
    ShoppingCart,
    Sun, User,
    X
} from 'lucide-vue-next';
import { useAuth } from '~/composables/useAuth';

// Composables
const { user, logout } = useAuth();

// State
const isDarkMode = ref(false);
const showUserMenu = ref(false);
const showMobileMenu = ref(false);
const showMarketMenu = ref(false);
const showMobileMarketMenu = ref(false);
const userMenuRef = ref<HTMLElement>();
const marketMenuRef = ref<HTMLElement>();

// Mock cart count - replace with actual cart composable later
const cartCount = ref(3);

// Methods
const toggleTheme = (): void => {
    isDarkMode.value = !isDarkMode.value;
    if (typeof document !== 'undefined') {
        document.documentElement.classList.toggle('dark', isDarkMode.value);
    }
};

const toggleUserMenu = (): void => {
    showUserMenu.value = !showUserMenu.value;
    showMobileMenu.value = false;
    showMarketMenu.value = false;
};

const closeUserMenu = (): void => {
    showUserMenu.value = false;
};

const toggleMarketMenu = (): void => {
    showMarketMenu.value = !showMarketMenu.value;
    showUserMenu.value = false;
    showMobileMenu.value = false;
};

const closeMarketMenu = (): void => {
    showMarketMenu.value = false;
};

const toggleMobileMenu = (): void => {
    showMobileMenu.value = !showMobileMenu.value;
    showUserMenu.value = false;
    showMarketMenu.value = false;
};

const closeMobileMenu = (): void => {
    showMobileMenu.value = false;
    showMobileMarketMenu.value = false;
};

const toggleMobileMarketMenu = (): void => {
    showMobileMarketMenu.value = !showMobileMarketMenu.value;
};

const goToCart = (): void => {
    // Navigate to cart page when implemented
    console.log('Navigate to cart');
};

const handleLogout = async (): Promise<void> => {
    try {
        await logout();
        closeUserMenu();
    } catch (error) {
        console.error('Logout failed:', error);
    }
};

// Close dropdowns when clicking outside
const handleClickOutside = (event: Event): void => {
    if (userMenuRef.value && !userMenuRef.value.contains(event.target as Node)) {
        showUserMenu.value = false;
    }
    if (marketMenuRef.value && !marketMenuRef.value.contains(event.target as Node)) {
        showMarketMenu.value = false;
    }
};

// Lifecycle
onMounted(() => {
    if (typeof document !== 'undefined') {
        isDarkMode.value = document.documentElement.classList.contains('dark');
        document.addEventListener('click', handleClickOutside);
    }
});

onUnmounted(() => {
    if (typeof document !== 'undefined') {
        document.removeEventListener('click', handleClickOutside);
    }
});
</script>