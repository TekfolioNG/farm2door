<template>
    <div>
        <!-- Auth Modal Backdrop -->
        <div v-if="show"
            class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            @click.self="closeModal">
            <!-- Modal Container with responsive margins and max height -->
            <div
                class="relative w-full max-w-md mx-4 bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-100 opacity-100 my-8 md:my-16 md:max-w-lg lg:max-w-xl md:max-h-[85vh] md:overflow-y-auto">
                <!-- Close Button -->
                <button @click="closeModal"
                    class="absolute top-4 right-4 z-10 p-1 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <X class="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>

                <!-- Desktop: Two Column Layout, Mobile: Single Column -->
                <div class="md:flex md:min-h-0">
                    <!-- Left Column: Logo and Branding (Desktop Only) -->
                    <div
                        class="hidden md:flex md:flex-col md:justify-center md:items-center md:w-1/3 md:bg-gradient-to-br md:from-[#7ba54a] md:to-[#6a9342] md:p-8">
                        <img src="/assets/img/Farm2Door Logo-trans.png" alt="Farm2Door"
                            class="h-16 w-auto mb-4 filter brightness-0 invert" />
                        <h2 class="text-white text-xl font-semibold text-center mb-2">Welcome to Farm2Door</h2>
                        <p class="text-white/90 text-sm text-center">Fresh produce directly from farms to your door</p>
                    </div>

                    <!-- Right Column: Forms (Full width on mobile, 2/3 on desktop) -->
                    <div class="md:w-2/3 md:flex md:flex-col">
                        <!-- Mobile Logo (Hidden on Desktop) -->
                        <div
                            class="flex flex-col items-center justify-center pt-6 pb-4 px-6 md:hidden bg-gradient-to-br from-[#7ba54a] to-[#6a9342]">
                            <img src="/assets/img/Farm2Door Logo-trans.png" alt="Farm2Door"
                                class="h-12 w-auto mb-2 filter brightness-0 invert" />
                            <h2 class="text-white text-lg font-semibold text-center mb-1">Welcome to Farm2Door</h2>
                            <p class="text-white/90 text-xs text-center">Fresh produce directly from farms to your door
                            </p>
                        </div>

                        <!-- Tabs -->
                        <div class="flex border-b border-gray-200 dark:border-gray-700 mt-4 md:mt-0">
                            <button @click="switchTab('login')"
                                class="flex-1 py-3 md:py-4 text-center font-medium transition-colors" :class="currentMode === 'login'
                                    ? 'text-[#7ba54a] border-b-2 border-[#7ba54a]'
                                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'">
                                Login
                            </button>
                            <button @click="switchTab('signup')"
                                class="flex-1 py-3 md:py-4 text-center font-medium transition-colors" :class="currentMode === 'signup'
                                    ? 'text-[#7ba54a] border-b-2 border-[#7ba54a]'
                                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'">
                                Sign Up
                            </button>
                        </div>

                        <!-- Forms Container with flex-grow for proper spacing -->
                        <div class="flex-grow flex flex-col justify-between">
                            <div class="px-6 py-4 md:px-8 md:py-6">
                                <!-- Login Form -->
                                <form v-if="currentMode === 'login'" @submit.prevent="handleLogin"
                                    class="space-y-3 md:space-y-4">
                                    <div>
                                        <label for="login-email"
                                            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                                        <input id="login-email" v-model="loginForm.email" type="email" required
                                            :disabled="loading"
                                            class="w-full px-3 py-2 md:px-4 md:py-2.5 text-sm md:text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#7ba54a] focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors disabled:opacity-50"
                                            placeholder="your.email@example.com">
                                    </div>

                                    <div>
                                        <label for="login-password"
                                            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
                                        <input id="login-password" v-model="loginForm.password" type="password" required
                                            :disabled="loading"
                                            class="w-full px-3 py-2 md:px-4 md:py-2.5 text-sm md:text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#7ba54a] focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors disabled:opacity-50"
                                            placeholder="Enter your password">
                                    </div>

                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <input id="remember-me" v-model="loginForm.rememberMe" type="checkbox"
                                                :disabled="loading"
                                                class="h-4 w-4 text-[#7ba54a] focus:ring-[#7ba54a] border-gray-300 rounded disabled:opacity-50">
                                            <label for="remember-me"
                                                class="ml-2 block text-xs md:text-sm text-gray-700 dark:text-gray-300">Remember
                                                me</label>
                                        </div>

                                        <a href="#" class="text-xs md:text-sm text-[#7ba54a] hover:underline">Forgot
                                            password?</a>
                                    </div>

                                    <button type="submit" :disabled="loading"
                                        class="w-full py-2 md:py-3 px-4 bg-[#7ba54a] hover:bg-[#6a9342] text-white text-sm md:text-base font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
                                        <span v-if="loading"
                                            class="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                                        {{ loading ? 'Logging in...' : 'Log In' }}
                                    </button>
                                </form>

                                <!-- Signup Form -->
                                <form v-if="currentMode === 'signup'" @submit.prevent="handleSignup"
                                    class="space-y-3 md:space-y-4">
                                    <div class="md:grid md:grid-cols-2 md:gap-4 space-y-3 md:space-y-0">
                                        <div class="md:col-span-2">
                                            <label for="signup-name"
                                                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full
                                                Name</label>
                                            <input id="signup-name" v-model="signupForm.name" type="text" required
                                                :disabled="loading"
                                                class="w-full px-3 py-2 md:px-4 md:py-2.5 text-sm md:text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#7ba54a] focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors disabled:opacity-50"
                                                placeholder="Enter your full name">
                                        </div>

                                        <div class="md:col-span-2">
                                            <label for="signup-email"
                                                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                                            <input id="signup-email" v-model="signupForm.email" type="email" required
                                                :disabled="loading"
                                                class="w-full px-3 py-2 md:px-4 md:py-2.5 text-sm md:text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#7ba54a] focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors disabled:opacity-50"
                                                placeholder="your.email@example.com">
                                        </div>

                                        <div>
                                            <label for="signup-password"
                                                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
                                            <input id="signup-password" v-model="signupForm.password" type="password"
                                                required :disabled="loading"
                                                class="w-full px-3 py-2 md:px-4 md:py-2.5 text-sm md:text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#7ba54a] focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors disabled:opacity-50"
                                                placeholder="Create a strong password" @input="checkPasswordStrength">
                                        </div>

                                        <div>
                                            <label for="confirm-password"
                                                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Confirm
                                                Password</label>
                                            <input id="confirm-password" v-model="signupForm.confirmPassword"
                                                type="password" required :disabled="loading"
                                                class="w-full px-3 py-2 md:px-4 md:py-2.5 text-sm md:text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#7ba54a] focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors disabled:opacity-50"
                                                placeholder="Confirm your password">
                                        </div>
                                    </div>

                                    <div v-if="signupForm.password" class="mt-2">
                                        <div
                                            class="h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                            <div class="h-full transition-all duration-300" :class="{
                                                'w-1/4 bg-red-500': passwordStrength === 'weak',
                                                'w-2/4 bg-yellow-500': passwordStrength === 'medium',
                                                'w-full bg-green-500': passwordStrength === 'strong'
                                            }"></div>
                                        </div>
                                        <p class="text-xs mt-1 text-gray-500 dark:text-gray-400">
                                            Strength:
                                            <span :class="{
                                                'text-red-500': passwordStrength === 'weak',
                                                'text-yellow-500': passwordStrength === 'medium',
                                                'text-green-500': passwordStrength === 'strong'
                                            }">
                                                {{ passwordStrength }}
                                            </span>
                                        </p>
                                    </div>

                                    <div class="flex items-center">
                                        <input id="terms" v-model="signupForm.agreeToTerms" type="checkbox" required
                                            :disabled="loading"
                                            class="h-4 w-4 text-[#7ba54a] focus:ring-[#7ba54a] border-gray-300 rounded flex-shrink-0 disabled:opacity-50">
                                        <label for="terms"
                                            class="ml-2 block text-xs md:text-sm text-gray-700 dark:text-gray-300">
                                            I agree to the <a href="#" class="text-[#7ba54a] hover:underline">Terms</a>
                                            and <a href="#" class="text-[#7ba54a] hover:underline">Privacy Policy</a>
                                        </label>
                                    </div>

                                    <button type="submit" :disabled="loading || !isSignupValid"
                                        class="w-full py-2 md:py-3 px-4 bg-[#7ba54a] hover:bg-[#6a9342] text-white text-sm md:text-base font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
                                        <span v-if="loading"
                                            class="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                                        {{ loading ? 'Creating Account...' : 'Create Account' }}
                                    </button>
                                </form>

                                <!-- Social Login Divider -->
                                <div class="relative flex items-center my-4 md:my-6">
                                    <div class="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
                                    <span
                                        class="flex-shrink mx-4 text-gray-500 dark:text-gray-400 text-xs md:text-sm">Or
                                        continue
                                        with</span>
                                    <div class="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
                                </div>

                                <!-- Social Login Buttons -->
                                <div class="grid grid-cols-2 gap-2 md:gap-3">
                                    <button @click="handleSocialLogin('google')" :disabled="loading"
                                        class="flex items-center justify-center py-2 md:py-2.5 px-3 md:px-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors text-xs md:text-sm disabled:opacity-50 disabled:cursor-not-allowed">
                                        <svg class="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" viewBox="0 0 24 24">
                                            <path fill="#4285F4"
                                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853"
                                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05"
                                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                            <path fill="#EA4335"
                                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                        </svg>
                                        Google
                                    </button>

                                    <button @click="handleSocialLogin('microsoft')" :disabled="loading"
                                        class="flex items-center justify-center py-2 md:py-2.5 px-3 md:px-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors text-xs md:text-sm disabled:opacity-50 disabled:cursor-not-allowed">
                                        <svg class="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" viewBox="0 0 23 23" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.5 0H0V11.5H11.5V0Z" fill="#F1511B" />
                                            <path d="M23 0H11.5V11.5H23V0Z" fill="#80CC28" />
                                            <path d="M11.5 11.5H0V23H11.5V11.5Z" fill="#00ADEF" />
                                            <path d="M23 11.5H11.5V23H23V11.5Z" fill="#FBBC09" />
                                        </svg>
                                        Outlook
                                    </button>
                                </div>
                            </div>

                            <!-- Footer Links -->
                            <div class="px-6 py-3 md:px-8 md:py-4 bg-gray-50 dark:bg-gray-700/50 text-center">
                                <p class="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                                    {{ currentMode === 'login' ? "Don't have an account?" : "Already have an account?"
                                    }}
                                    <button type="button" class="text-[#7ba54a] hover:underline font-medium ml-1"
                                        @click="switchTab(currentMode === 'login' ? 'signup' : 'login')">
                                        {{ currentMode === 'login' ? 'Sign up' : 'Log in' }}
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { X } from 'lucide-vue-next'

// Define types for our data structures
interface LoginFormData {
    email: string
    password: string
    rememberMe: boolean
}

interface SignupFormData {
    name: string
    email: string
    password: string
    confirmPassword: string
    agreeToTerms: boolean
}

type SocialProvider = 'google' | 'microsoft'
type AuthMode = 'login' | 'signup'

// Props
const props = defineProps<{
    show: boolean
    mode?: AuthMode
    isDarkMode?: boolean
    loading?: boolean
}>()

// Emits with proper typing
const emit = defineEmits<{
    close: []
    login: [value: LoginFormData]
    signup: [value: SignupFormData]
    'social-login': [provider: SocialProvider]
    'switch-mode': []
}>()

// Reactive state
const currentMode = ref<AuthMode>(props.mode || 'login')
const passwordStrength = ref<'weak' | 'medium' | 'strong'>('weak')

// Form data with proper typing
const loginForm = reactive<LoginFormData>({
    email: '',
    password: '',
    rememberMe: false
})

const signupForm = reactive<SignupFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
})

// Computed properties
const isSignupValid = computed(() => {
    return signupForm.name.trim() !== '' &&
        signupForm.email.trim() !== '' &&
        signupForm.password !== '' &&
        signupForm.confirmPassword !== '' &&
        signupForm.password === signupForm.confirmPassword &&
        signupForm.agreeToTerms
})

// Methods
const closeModal = (): void => {
    emit('close')
}

const switchTab = (mode: AuthMode): void => {
    currentMode.value = mode
    emit('switch-mode')
}

const handleLogin = (): void => {
    if (!props.loading) {
        emit('login', { ...loginForm })
    }
}

const handleSignup = (): void => {
    if (!props.loading && isSignupValid.value) {
        if (signupForm.password !== signupForm.confirmPassword) {
            // Show error - passwords don't match
            console.error('Passwords do not match')
            return
        }

        // Prepare signup data according to the interface
        const signupData: SignupCredentials = {
            email: signupForm.email,
            password: signupForm.password,
            confirmPassword: signupForm.confirmPassword,
            agreeToTerms: signupForm.agreeToTerms,
            name: signupForm.name // This will be used as the full name
        }

        emit('signup', signupData)
    }
}

const handleSocialLogin = (provider: SocialProvider): void => {
    if (!props.loading) {
        emit('social-login', provider)
    }
}

const checkPasswordStrength = (): void => {
    const password = signupForm.password
    if (password.length === 0) {
        passwordStrength.value = 'weak'
        return
    }

    // Simple password strength check
    let strength = 0
    if (password.length >= 8) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    if (/[^A-Za-z0-9]/.test(password)) strength++

    if (strength < 2) {
        passwordStrength.value = 'weak'
    } else if (strength < 4) {
        passwordStrength.value = 'medium'
    } else {
        passwordStrength.value = 'strong'
    }
}

// Watch for modal opening to reset form
watch(() => props.show, (newVal) => {
    if (newVal) {
        // Reset forms when modal opens
        loginForm.email = ''
        loginForm.password = ''
        loginForm.rememberMe = false

        signupForm.name = ''
        signupForm.email = ''
        signupForm.password = ''
        signupForm.confirmPassword = ''
        signupForm.agreeToTerms = false

        passwordStrength.value = 'weak'
    }
})

// Watch for mode prop changes
watch(() => props.mode, (newMode) => {
    if (newMode) {
        currentMode.value = newMode
    }
})
</script>

<style scoped>
/* Custom animations for modal */
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-content-enter-active,
.modal-content-leave-active {
    transition: all 0.3s ease;
}

.modal-content-enter-from,
.modal-content-leave-to {
    opacity: 0;
    transform: scale(0.95);
}

/* Custom scrollbar styling */
.md\:overflow-y-auto::-webkit-scrollbar {
    width: 6px;
}

.md\:overflow-y-auto::-webkit-scrollbar-track {
    background: transparent;
}

.md\:overflow-y-auto::-webkit-scrollbar-thumb {
    background: #d1d5db;
    border-radius: 3px;
}

.md\:overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: #9ca3af;
}

.dark .md\:overflow-y-auto::-webkit-scrollbar-thumb {
    background: #4b5563;
}

.dark .md\:overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: #6b7280;
}

/* Custom scrollbar for modal on mobile */
@media (max-height: 600px) {
    .modal-container {
        max-height: 90vh;
        overflow-y: auto;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    .modal-container::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .modal-container {
        -ms-overflow-style: none;
        /* IE and Edge */
        scrollbar-width: none;
        /* Firefox */
    }
}
</style>