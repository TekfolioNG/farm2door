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
                            class="flex flex-col items-center justify-start pt-2 pb-3 px-6 md:hidden bg-gradient-to-br from-[#7ba54a] to-[#6a9342]">
                            <img src="/assets/img/Farm2Door Logo-trans.png" alt="Farm2Door"
                                class="h-12 w-auto mb-1 filter brightness-0 invert" />
                            <h2 class="text-white text-lg font-semibold text-center mb-0.5">Welcome to Farm2Door</h2>
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
                                        <div class="relative">
                                            <input id="login-password" v-model="loginForm.password"
                                                :type="showLoginPassword ? 'text' : 'password'" required
                                                :disabled="loading"
                                                class="w-full px-3 py-2 md:px-4 md:py-2.5 pr-10 text-sm md:text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#7ba54a] focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors disabled:opacity-50"
                                                placeholder="Enter your password">
                                            <button type="button" @click="showLoginPassword = !showLoginPassword"
                                                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                                                <Eye v-if="!showLoginPassword" class="w-4 h-4" />
                                                <EyeOff v-else class="w-4 h-4" />
                                            </button>
                                        </div>
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

                                    <!-- Name Fields -->
                                    <div class="grid grid-cols-2 gap-3 md:gap-4">
                                        <div>
                                            <label for="signup-firstname"
                                                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First
                                                Name</label>
                                            <input id="signup-firstname" v-model="signupForm.firstName" type="text"
                                                required :disabled="loading"
                                                class="w-full px-3 py-2 md:px-4 md:py-2.5 text-sm md:text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#7ba54a] focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors disabled:opacity-50"
                                                placeholder="First name">
                                        </div>
                                        <div>
                                            <label for="signup-lastname"
                                                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last
                                                Name</label>
                                            <input id="signup-lastname" v-model="signupForm.lastName" type="text"
                                                required :disabled="loading"
                                                class="w-full px-3 py-2 md:px-4 md:py-2.5 text-sm md:text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#7ba54a] focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors disabled:opacity-50"
                                                placeholder="Last name">
                                        </div>
                                    </div>

                                    <!-- Email -->
                                    <div>
                                        <label for="signup-email"
                                            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                                        <input id="signup-email" v-model="signupForm.email" type="email" required
                                            :disabled="loading"
                                            class="w-full px-3 py-2 md:px-4 md:py-2.5 text-sm md:text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#7ba54a] focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors disabled:opacity-50"
                                            placeholder="your.email@example.com">
                                    </div>

                                    <!-- Password -->
                                    <div>
                                        <label for="signup-password"
                                            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
                                        <div class="relative">
                                            <input id="signup-password" v-model="signupForm.password"
                                                :type="showSignupPassword ? 'text' : 'password'" required
                                                :disabled="loading"
                                                class="w-full px-3 py-2 md:px-4 md:py-2.5 pr-10 text-sm md:text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#7ba54a] focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors disabled:opacity-50"
                                                placeholder="Create a strong password" @input="checkPasswordStrength">
                                            <button type="button" @click="showSignupPassword = !showSignupPassword"
                                                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                                                <Eye v-if="!showSignupPassword" class="w-4 h-4" />
                                                <EyeOff v-else class="w-4 h-4" />
                                            </button>
                                        </div>

                                        <!-- Password Strength Indicator -->
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
                                    </div>

                                    <!-- Confirm Password -->
                                    <div>
                                        <label for="confirm-password"
                                            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Confirm
                                            Password</label>
                                        <div class="relative">
                                            <input id="confirm-password" v-model="signupForm.confirmPassword"
                                                :type="showConfirmPassword ? 'text' : 'password'" required
                                                :disabled="loading"
                                                class="w-full px-3 py-2 md:px-4 md:py-2.5 pr-10 text-sm md:text-base border transition-colors disabled:opacity-50"
                                                :class="[
                                                    passwordsMatch ? 'border-gray-300 dark:border-gray-600' : 'border-red-300 dark:border-red-600',
                                                    'rounded-lg focus:ring-2 focus:ring-[#7ba54a] focus:border-transparent dark:bg-gray-700 dark:text-white'
                                                ]" placeholder="Confirm your password">
                                            <button type="button" @click="showConfirmPassword = !showConfirmPassword"
                                                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                                                <Eye v-if="!showConfirmPassword" class="w-4 h-4" />
                                                <EyeOff v-else class="w-4 h-4" />
                                            </button>
                                        </div>

                                        <!-- Password Match Indicator -->
                                        <div v-if="signupForm.confirmPassword" class="mt-1">
                                            <p class="text-xs"
                                                :class="passwordsMatch ? 'text-green-600' : 'text-red-600'">
                                                <CheckCircle v-if="passwordsMatch" class="w-3 h-3 inline mr-1" />
                                                <XCircle v-else class="w-3 h-3 inline mr-1" />
                                                {{ passwordsMatch ? 'Passwords match' : 'Passwords do not match' }}
                                            </p>
                                        </div>
                                    </div>

                                    <!-- Terms Agreement -->
                                    <div class="flex items-start">
                                        <input id="terms" v-model="signupForm.agreeToTerms" type="checkbox" required
                                            :disabled="loading"
                                            class="h-4 w-4 text-[#7ba54a] focus:ring-[#7ba54a] border-gray-300 rounded flex-shrink-0 disabled:opacity-50 mt-0.5">
                                        <label for="terms"
                                            class="ml-2 block text-xs md:text-sm text-gray-700 dark:text-gray-300">
                                            I agree to the <a href="#" class="text-[#7ba54a] hover:underline">Terms of
                                                Service</a>
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
import { CheckCircle, Eye, EyeOff, X, XCircle } from 'lucide-vue-next'
import { computed, reactive, ref, watch } from 'vue'

// Define types for our data structures
interface LoginFormData {
    email: string
    password: string
    rememberMe: boolean
}

interface SignupFormData {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
    agreeToTerms: boolean
}

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
    signup: [value: Omit<SignupFormData, 'confirmPassword'>]
    'switch-mode': []
}>()

// Reactive state
const currentMode = ref<AuthMode>(props.mode || 'login')
const passwordStrength = ref<'weak' | 'medium' | 'strong'>('weak')

// Password visibility toggles
const showLoginPassword = ref(false)
const showSignupPassword = ref(false)
const showConfirmPassword = ref(false)

// Form data with proper typing
const loginForm = reactive<LoginFormData>({
    email: '',
    password: '',
    rememberMe: false
})

const signupForm = reactive<SignupFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
})

// Computed properties
const passwordsMatch = computed(() => {
    if (!signupForm.confirmPassword) return true
    return signupForm.password === signupForm.confirmPassword
})

const isSignupValid = computed(() => {
    return signupForm.firstName.trim() !== '' &&
        signupForm.lastName.trim() !== '' &&
        signupForm.email.trim() !== '' &&
        signupForm.password !== '' &&
        signupForm.confirmPassword !== '' &&
        passwordsMatch.value &&
        signupForm.agreeToTerms &&
        passwordStrength.value !== 'weak'
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
        // Remove confirmPassword before sending to backend
        const { confirmPassword, ...signupData } = signupForm
        emit('signup', signupData)
    }
}

const checkPasswordStrength = (): void => {
    const password = signupForm.password
    if (password.length === 0) {
        passwordStrength.value = 'weak'
        return
    }

    // Enhanced password strength check
    let strength = 0
    if (password.length >= 8) strength++
    if (password.length >= 12) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[a-z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    if (/[^A-Za-z0-9]/.test(password)) strength++

    if (strength < 3) {
        passwordStrength.value = 'weak'
    } else if (strength < 5) {
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

        signupForm.firstName = ''
        signupForm.lastName = ''
        signupForm.email = ''
        signupForm.password = ''
        signupForm.confirmPassword = ''
        signupForm.agreeToTerms = false

        passwordStrength.value = 'weak'
        showLoginPassword.value = false
        showSignupPassword.value = false
        showConfirmPassword.value = false
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
/* Ensure submit buttons are properly styled when enabled/disabled */
.submit-btn {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.submit-btn:disabled {
    cursor: not-allowed;
    opacity: 0.6;
}

.submit-btn:not(:disabled):hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Checkbox styling */
.checkbox-container {
    cursor: pointer;
}

.checkbox-container input[type="checkbox"] {
    cursor: pointer;
}

.checkbox-container label {
    cursor: pointer;
    user-select: none;
}

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
</style>