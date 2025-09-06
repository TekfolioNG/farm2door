<!-- components/landing/InsideNavbar.vue -->
<template>
    <nav
        class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#9dcd5a]/10 to-transparent dark:from-[#9dcd5a]/5 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <!-- Logo -->
                <div class="flex-shrink-0">
                    <NuxtLink to="/">
                        <img src="/assets/img/Farm2Door Logo-trans.png" alt="Farm2Door"
                            class="pt-12 h-40 w-auto filter dark:brightness-0 dark:invert transition-all duration-300" />
                    </NuxtLink>
                </div>

                <!-- Desktop Navigation Links -->
                <div class="hidden md:flex items-center space-x-8">
                    <NuxtLink to="/dashboard"
                        class="relative text-gray-700 dark:text-gray-300 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] font-medium transition-colors duration-200 pb-1"
                        :class="{
                            'text-[#7ba54a] dark:text-[#9dcd5a] after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#7ba54a] after:dark:bg-[#9dcd5a] after:rounded-full': $route.path === '/dashboard'
                        }">
                        Dashboard
                    </NuxtLink>

                    <!-- Market Dropdown -->
                    <div class="relative group">
                        <button
                            class="relative flex items-center text-gray-700 dark:text-gray-300 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] font-medium transition-colors duration-200 pb-1"
                            :class="{
                                'text-[#7ba54a] dark:text-[#9dcd5a] after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#7ba54a] after:dark:bg-[#9dcd5a] after:rounded-full': $route.path.startsWith('/market')
                            }">
                            Market
                            <ChevronDown class="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                        </button>

                        <!-- Market Dropdown Menu -->
                        <div
                            class="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <NuxtLink to="/market"
                                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] transition-colors">
                                All Products
                            </NuxtLink>
                            <div class="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                            <NuxtLink to="/market/pure-heritage-proteins"
                                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] transition-colors">
                                Pure Heritage Proteins
                            </NuxtLink>
                            <NuxtLink to="/market/traditional-staples"
                                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] transition-colors">
                                Traditional Staples
                            </NuxtLink>
                            <NuxtLink to="/market/village-story-ingredients"
                                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] transition-colors">
                                Village Story Ingredients
                            </NuxtLink>
                            <NuxtLink to="/market/native-seasonals"
                                class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] transition-colors">
                                Native Seasonals
                            </NuxtLink>
                        </div>
                    </div>

                    <NuxtLink to="/orders"
                        class="relative text-gray-700 dark:text-gray-300 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] font-medium transition-colors duration-200 pb-1"
                        :class="{
                            'text-[#7ba54a] dark:text-[#9dcd5a] after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#7ba54a] after:dark:bg-[#9dcd5a] after:rounded-full': $route.path === '/orders'
                        }">
                        Orders
                    </NuxtLink>

                    <NuxtLink to="/profile"
                        class="relative text-gray-700 dark:text-gray-300 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] font-medium transition-colors duration-200 pb-1"
                        :class="{
                            'text-[#7ba54a] dark:text-[#9dcd5a] after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#7ba54a] after:dark:bg-[#9dcd5a] after:rounded-full': $route.path === '/profile'
                        }">
                        Profile
                    </NuxtLink>

                    <NuxtLink to="/support"
                        class="relative text-gray-700 dark:text-gray-300 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] font-medium transition-colors duration-200 pb-1"
                        :class="{
                            'text-[#7ba54a] dark:text-[#9dcd5a] after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#7ba54a] after:dark:bg-[#9dcd5a] after:rounded-full': $route.path === '/support'
                        }">
                        Support
                    </NuxtLink>
                </div>

                <!-- Right side: Theme toggle, Cart, and Auth/User -->
                <div class="flex items-center space-x-2 sm:space-x-4">
                    <!-- Theme Toggle -->
                    <button @click="toggleTheme"
                        class="p-2 rounded-lg bg-[#c6fc89]/50 dark:bg-[#213b03] hover:bg-[#c6fc89] dark:hover:bg-[#213b03]/80 transition-colors duration-200">
                        <Sun v-if="isDarkMode" class="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        <Moon v-else class="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </button>

                    <!-- Cart Icon with Badge -->
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

                    <!-- Authenticated User Menu -->
                    <div v-if="isLoggedIn" class="relative" ref="userMenuRef">
                        <button @click="toggleUserMenu"
                            class="flex items-center space-x-2 px-3 py-2 rounded-lg bg-[#c6fc89]/50 dark:bg-[#213b03] hover:bg-[#c6fc89] dark:hover:bg-[#213b03]/80 transition-colors duration-200">
                            <!-- User Avatar -->
                            <div class="w-7 h-7 bg-[#7ba54a] rounded-full flex items-center justify-center">
                                <User class="w-4 h-4 text-white" />
                            </div>
                            <span class="hidden sm:inline text-sm font-medium text-gray-700 dark:text-gray-300">
                                {{ displayUserName }}
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
                                    <p class="text-sm font-medium text-gray-900 dark:text-gray-100">{{ displayUserName
                                    }}</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">{{ user?.email ||
                                        'user@example.com' }}</p>
                                </div>

                                <!-- Menu Items -->
                                <NuxtLink to="/dashboard" @click="closeUserMenu"
                                    class="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                    <LayoutDashboard class="w-4 h-4 mr-3" />
                                    Dashboard
                                </NuxtLink>

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

                                <div class="border-t border-gray-200 dark:border-gray-700 my-1"></div>

                                <button @click="handleLogout"
                                    class="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                    <LogOut class="w-4 h-4 mr-3" />
                                    Sign Out
                                </button>
                            </div>
                        </Transition>
                    </div>

                    <!-- Login/Signup Button (for non-authenticated users) -->
                    <button v-else @click="handleAuth"
                        class="flex items-center px-3 py-2 sm:px-4 bg-[#7ba54a] hover:bg-[#6a9342] text-white text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 flex-shrink-0">
                        <UserPlus class="w-4 h-4 sm:mr-2" />
                        <span class="hidden sm:inline">Log In / Sign Up</span>
                        <span class="sm:hidden">Join</span>
                    </button>

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
                        <!-- Navigation Links -->
                        <NuxtLink to="/dashboard" @click="closeMobileMenu"
                            class="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                            active-class="text-[#7ba54a] dark:text-[#9dcd5a] bg-gray-100 dark:bg-gray-700">
                            Dashboard
                        </NuxtLink>

                        <!-- Market Section in Mobile -->
                        <div class="space-y-1">
                            <NuxtLink to="/market" @click="closeMobileMenu"
                                class="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                                active-class="text-[#7ba54a] dark:text-[#9dcd5a] bg-gray-100 dark:bg-gray-700">
                                Market
                            </NuxtLink>
                            <!-- Market Subcategories -->
                            <div class="pl-4 space-y-1">
                                <NuxtLink to="/market/pure-heritage-proteins" @click="closeMobileMenu"
                                    class="block px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors">
                                    Pure Heritage Proteins
                                </NuxtLink>
                                <NuxtLink to="/market/traditional-staples" @click="closeMobileMenu"
                                    class="block px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors">
                                    Traditional Staples
                                </NuxtLink>
                                <NuxtLink to="/market/village-story-ingredients" @click="closeMobileMenu"
                                    class="block px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors">
                                    Village Story Ingredients
                                </NuxtLink>
                                <NuxtLink to="/market/native-seasonals" @click="closeMobileMenu"
                                    class="block px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors">
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

                        <!-- Authenticated user logout (mobile) -->
                        <template v-if="isLoggedIn">
                            <div class="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                            <button @click="handleLogout"
                                class="block w-full text-left px-3 py-2 text-base font-medium text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors">
                                Sign Out
                            </button>
                        </template>
                    </div>
                </div>
            </Transition>
        </div>
    </nav>
</template>

<script setup lang="ts">
import {
    ChevronDown,
    LayoutDashboard,
    LogOut,
    Menu,
    Moon,
    Package,
    ShoppingCart,
    Sun, User,
    UserPlus,
    X
} from 'lucide-vue-next';
import { useAuth } from '~/composables/useAuth';
import { useAuthModal } from '~/composables/useAuthModal';

// Composables
const { user, logout, isLoggedIn } = useAuth();
const { openAuthModal } = useAuthModal();

// State
const isDarkMode = ref(false);
const showUserMenu = ref(false);
const showMobileMenu = ref(false);
const userMenuRef = ref<HTMLElement>();

// Mock cart count - replace with actual cart composable later
const cartCount = ref(2);

// Mock user for development (remove in production)
const isDev = process.dev
const mockUser = isDev ? {
    firstName: 'John',
    lastName: 'Doe',
    name: 'John Doe',
    email: 'john.doe@example.com'
} : null

// Computed properties
const displayUserName = computed(() => {
    const currentUser = user.value || mockUser

    if (currentUser?.firstName) {
        return currentUser.firstName
    } else if (currentUser?.name) {
        // If firstName is not available, try to get first name from full name
        return currentUser.name.split(' ')[0]
    } else if (currentUser?.email) {
        // If no name is available, use the part before @ in email
        return currentUser.email.split('@')[0]
    } else {
        return 'User'
    }
})

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
};

const closeUserMenu = (): void => {
    showUserMenu.value = false;
};

const toggleMobileMenu = (): void => {
    showMobileMenu.value = !showMobileMenu.value;
    showUserMenu.value = false;
};

const closeMobileMenu = (): void => {
    showMobileMenu.value = false;
};

const goToCart = (): void => {
    // Navigate to cart page when implemented
    console.log('Navigate to cart');
};

const handleAuth = (): void => {
    openAuthModal();
    closeMobileMenu();
};

const handleLogout = async (): Promise<void> => {
    try {
        await logout();
        closeUserMenu();
        closeMobileMenu();
    } catch (error) {
        console.error('Logout failed:', error);
    }
};

// Close dropdowns when clicking outside
const handleClickOutside = (event: Event): void => {
    if (userMenuRef.value && !userMenuRef.value.contains(event.target as Node)) {
        showUserMenu.value = false;
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