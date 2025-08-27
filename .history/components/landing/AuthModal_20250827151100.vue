<template>
    <Teleport to="body">
        <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto" @click="closeModal">
            <!-- Backdrop -->
            <div class="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" />

            <!-- Modal -->
            <div class="flex min-h-full items-center justify-center p-4">
                <div class="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-2xl transition-all"
                    @click.stop>
                    <!-- Close Button -->
                    <button @click="closeModal"
                        class="absolute right-4 top-4 z-10 rounded-lg p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                        <X class="w-5 h-5" />
                    </button>

                    <!-- Logo -->
                    <div class="flex justify-center pt-8 pb-4">
                        <img src="/assets/img/Farm2Door Logo-trans.png" alt="Farm2Door" class="h-12 w-auto"
                            :class="isDarkMode ? 'filter invert brightness-0 contrast-100' : ''" />
                    </div>

                    <!-- Tab Navigation -->
                    <div class="flex border-b border-gray-200 dark:border-gray-700">
                        <button @click="activeTab = 'login'"
                            class="flex-1 py-3 px-4 text-sm font-medium border-b-2 transition-colors"
                            :class="activeTab === 'login'
                                ? 'text-[#7ba54a] border-[#7ba54a]'
                                : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-700 dark:hover:text-gray-300'">
                            Log In
                        </button>
                        <button @click="activeTab = 'signup'"
                            class="flex-1 py-3 px-4 text-sm font-medium border-b-2 transition-colors"
                            :class="activeTab === 'signup'
                                ? 'text-[#7ba54a] border-[#7ba54a]'
                                : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-700 dark:hover:text-gray-300'">
                            Sign Up
                        </button>
                    </div>

                    <!-- Form Content -->
                    <div class="p-6">
                        <!-- Login Form -->
                        <form v-if="activeTab === 'login'" @submit.prevent="handleLogin" class="space-y-4">
                            <div>
                                <label for="login-email"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Email
                                </label>
                                <input id="login-email" v-model="loginForm.email" type="email" required
                                    class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#7ba54a] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
                                    :class="loginErrors.email ? 'border-red-500' : ''" placeholder="Enter your email" />
                                <p v-if="loginErrors.email" class="text-red-500 text-xs mt-1">{{ loginErrors.email }}
                                </p>
                            </div>

                            <div>
                                <label for="login-password"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Password
                                </label>
                                <div class="relative">
                                    <input id="login-password" v-model="loginForm.password"
                                        :type="showPassword ? 'text' : 'password'" required
                                        class="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#7ba54a] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
                                        :class="loginErrors.password ? 'border-red-500' : ''"
                                        placeholder="Enter your password" />
                                    <button type="button" @click="showPassword = !showPassword"
                                        class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                                        <Eye v-if="!showPassword" class="w-4 h-4" />
                                        <EyeOff v-else class="w-4 h-4" />
                                    </button>
                                </div>
                                <p v-if="loginErrors.password" class="text-red-500 text-xs mt-1">{{ loginErrors.password
                                }}</p>
                            </div>

                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <input id="remember-me" v-model="loginForm.rememberMe" type="checkbox"
                                        class="h-4 w-4 text-[#7ba54a] focus:ring-[#7ba54a] border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700" />
                                    <label for="remember-me"
                                        class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                                        Remember me
                                    </label>
                                </div>
                                <button type="button" @click="showForgotPassword = true"
                                    class="text-sm text-[#7ba54a] hover:text-[#6a9342] transition-colors">
                                    Forgot password?
                                </button>
                            </div>

                            <button type="submit" :disabled="isLoading"
                                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#7ba54a] hover:bg-[#6a9342] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7ba54a] disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                                <Loader2 v-if="isLoading" class="w-4 h-4 mr-2 animate-spin" />
                                Log In
                            </button>
                        </form>

                        <!-- Sign Up Form -->
                        <form v-else @submit.prevent="handleSignup" class="space-y-4">
                            <div class="grid grid-cols-2 gap-3">
                                <div>
                                    <label for="first-name"
                                        class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        First Name
                                    </label>
                                    <input id="first-name" v-model="signupForm.firstName" type="text" required
                                        class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#7ba54a] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
                                        :class="signupErrors.firstName ? 'border-red-500' : ''"
                                        placeholder="First name" />
                                    <p v-if="signupErrors.firstName" class="text-red-500 text-xs mt-1">{{
                                        signupErrors.firstName }}</p>
                                </div>
                                <div>
                                    <label for="last-name"
                                        class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Last Name
                                    </label>
                                    <input id="last-name" v-model="signupForm.lastName" type="text" required
                                        class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#7ba54a] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
                                        :class="signupErrors.lastName ? 'border-red-500' : ''"
                                        placeholder="Last name" />
                                    <p v-if="signupErrors.lastName" class="text-red-500 text-xs mt-1">{{
                                        signupErrors.lastName }}</p>
                                </div>
                            </div>

                            <div>
                                <label for="signup-email"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Email
                                </label>
                                <input id="signup-email" v-model="signupForm.email" type="email" required
                                    class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#7ba54a] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
                                    :class="signupErrors.email ? 'border-red-500' : ''"
                                    placeholder="Enter your email" />
                                <p v-if="signupErrors.email" class="text-red-500 text-xs mt-1">{{ signupErrors.email }}
                                </p>
                            </div>

                            <div>
                                <label for="signup-password"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Password
                                </label>
                                <div class="relative">
                                    <input id="signup-password" v-model="signupForm.password"
                                        :type="showPassword ? 'text' : 'password'" required
                                        class="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#7ba54a] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
                                        :class="signupErrors.password ? 'border-red-500' : ''"
                                        placeholder="Create a password" @input="checkPasswordStrength" />
                                    <button type="button" @click="showPassword = !showPassword"
                                        class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                                        <Eye v-if="!showPassword" class="w-4 h-4" />
                                        <EyeOff v-else class="w-4 h-4" />
                                    </button>
                                </div>

                                <!-- Password Strength Indicator -->
                                <div v-if="signupForm.password" class="mt-2">
                                    <div class="flex space-x-1">
                                        <div v-for="i in 4" :key="i" class="flex-1 h-2 rounded-full" :class="i <= passwordStrength.score
                                            ? passwordStrength.color
                                            : 'bg-gray-200 dark:bg-gray-600'" />
                                    </div>
                                    <p class="text-xs mt-1" :class="passwordStrength.textColor">
                                        {{ passwordStrength.text }}
                                    </p>
                                </div>
                                <p v-if="signupErrors.password" class="text-red-500 text-xs mt-1">{{
                                    signupErrors.password }}</p>
                            </div>

                            <div>
                                <label for="confirm-password"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Confirm Password
                                </label>
                                <input id="confirm-password" v-model="signupForm.confirmPassword" type="password"
                                    required
                                    class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#7ba54a] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
                                    :class="signupErrors.confirmPassword ? 'border-red-500' : ''"
                                    placeholder="Confirm your password" />
                                <p v-if="signupErrors.confirmPassword" class="text-red-500 text-xs mt-1">{{
                                    signupErrors.confirmPassword }}</p>
                            </div>

                            <div class="flex items-center">
                                <input id="terms" v-model="signupForm.acceptTerms" type="checkbox" required
                                    class="h-4 w-4 text-[#7ba54a] focus:ring-[#7ba54a] border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700" />
                                <label for="terms" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                                    I agree to the <a href="#" class="text-[#7ba54a] hover:text-[#6a9342]">Terms of
                                        Service</a> and
                                    <a href="#" class="text-[#7ba54a] hover:text-[#6a9342]">Privacy Policy</a>
                                </label>
                            </div>

                            <button type="submit" :disabled="isLoading || passwordStrength.score < 2"
                                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#7ba54a] hover:bg-[#6a9342] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7ba54a] disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                                <Loader2 v-if="isLoading" class="w-4 h-4 mr-2 animate-spin" />
                                Create Account
                            </button>
                        </form>

                        <!-- Social Login Divider -->
                        <div class="mt-6">
                            <div class="relative">
                                <div class="absolute inset-0 flex items-center">
                                    <div class="w-full border-t border-gray-300 dark:border-gray-600" />
                                </div>
                                <div class="relative flex justify-center text-sm">
                                    <span class="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">Or
                                        continue with</span>
                                </div>
                            </div>

                            <!-- Social Login Buttons -->
                            <div class="mt-4 grid grid-cols-2 gap-3">
                                <button type="button" @click="handleSocialLogin('google')"
                                    class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                                    <Mail class="w-4 h-4 mr-2" />
                                    Gmail
                                </button>
                                <button type="button" @click="handleSocialLogin('outlook')"
                                    class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                                    <Mail class="w-4 h-4 mr-2" />
                                    Outlook
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Forgot Password Modal -->
                    <div v-if="showForgotPassword" class="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl p-6">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Reset Password</h3>
                            <button @click="showForgotPassword = false"
                                class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                                <X class="w-5 h-5" />
                            </button>
                        </div>
                        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">

                            Enter your email address and we'll send you a link to reset your password.
                        </p>

                        <form @submit.prevent="handleForgotPassword" class="space-y-4">


                            <div>
                                <label for="reset-email"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Email
                                </label>
                                <input id="reset-email" v-model="forgotPasswordEmail" type="email" required
                                    class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#7ba54a] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                                    placeholder="Enter your email" />
                            </div>

                            <div class="flex space-x-3">
                                <button type="button" @click="showForgotPassword = false"
                                    class="flex-1 py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                                    Cancel
                                </button>
                                <button type="submit" :disabled="isLoading"
                                    class="flex-1 py-2 px-4 border border-transparent rounded-lg text-sm font-medium text-white bg-[#7ba54a] hover:bg-[#6a9342] disabled:opacity-50 transition-colors">
                                    <Loader2 v-if="isLoading" class="w-4 h-4 mr-2 animate-spin" />
                                    Send Reset Link
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { Eye, EyeOff, Loader2, Mail, X } from 'lucide-vue-next';

// Props
interface Props {
    isOpen: boolean
    isDarkMode?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    isDarkMode: false
})

// Emits
const emit = defineEmits<{
    close: []
    login: [credentials: LoginForm]
    signup: [userData: SignupForm]
    socialLogin: [provider: string]
    forgotPassword: [email: string]
}>()

// Types
interface LoginForm {
    email: string
    password: string
    rememberMe: boolean
}

interface SignupForm {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
    acceptTerms: boolean
}

interface ValidationErrors {
    [key: string]: string
}

interface PasswordStrength {
    score: number
    text: string
    color: string
    textColor: string
}

// Reactive state
const activeTab = ref<'login' | 'signup'>('login')
const showPassword = ref(false)
const showForgotPassword = ref(false)
const isLoading = ref(false)
const forgotPasswordEmail = ref('')

// Form data
const loginForm = ref<LoginForm>({
    email: '',
    password: '',
    rememberMe: false
})

const signupForm = ref<SignupForm>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
})

// Validation errors
const loginErrors = ref<ValidationErrors>({})
const signupErrors = ref<ValidationErrors>({})

// Password strength
const passwordStrength = ref<PasswordStrength>({
    score: 0,
    text: '',
    color: 'bg-gray-200',
    textColor: 'text-gray-500'
})

// Methods
const closeModal = () => {
    emit('close')
    resetForms()
}

const resetForms = () => {
    loginForm.value = { email: '', password: '', rememberMe: false }
    signupForm.value = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', acceptTerms: false }
    loginErrors.value = {}
    signupErrors.value = {}
    showForgotPassword.value = false
    showPassword.value = false
}

const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

const validateLoginForm = (): boolean => {
    loginErrors.value = {}

    if (!loginForm.value.email) {
        loginErrors.value.email = 'Email is required'
    } else if (!validateEmail(loginForm.value.email)) {
        loginErrors.value.email = 'Please enter a valid email'
    }

    if (!loginForm.value.password) {
        loginErrors.value.password = 'Password is required'
    } else if (loginForm.value.password.length < 6) {
        loginErrors.value.password = 'Password must be at least 6 characters'
    }

    return Object.keys(loginErrors.value).length === 0
}

const validateSignupForm = (): boolean => {
    signupErrors.value = {}

    if (!signupForm.value.firstName.trim()) {
        signupErrors.value.firstName = 'First name is required'
    }

    if (!signupForm.value.lastName.trim()) {
        signupErrors.value.lastName = 'Last name is required'
    }

    if (!signupForm.value.email) {
        signupErrors.value.email = 'Email is required'
    } else if (!validateEmail(signupForm.value.email)) {
        signupErrors.value.email = 'Please enter a valid email'
    }

    if (!signupForm.value.password) {
        signupErrors.value.password = 'Password is required'
    } else if (passwordStrength.value.score < 2) {
        signupErrors.value.password = 'Password is too weak'
    }

    if (!signupForm.value.confirmPassword) {
        signupErrors.value.confirmPassword = 'Please confirm your password'
    } else if (signupForm.value.password !== signupForm.value.confirmPassword) {
        signupErrors.value.confirmPassword = 'Passwords do not match'
    }

    return Object.keys(signupErrors.value).length === 0
}

const checkPasswordStrength = () => {
    const password = signupForm.value.password
    let score = 0

    if (password.length >= 8) score++
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++
    if (/\d/.test(password)) score++
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++

    const strengths = [
        { text: 'Very Weak', color: 'bg-red-500', textColor: 'text-red-500' },
        { text: 'Weak', color: 'bg-orange-500', textColor: 'text-orange-500' },
        { text: 'Fair', color: 'bg-yellow-500', textColor: 'text-yellow-500' },
        { text: 'Good', color: 'bg-green-500', textColor: 'text-green-500' },
        { text: 'Strong', color: 'bg-green-600', textColor: 'text-green-600' }
    ]

    passwordStrength.value = { score, ...(strengths[score] ?? { text: '', color: 'bg-gray-200', textColor: 'text-gray-500' }) }


    const handleLogin = async () => {
        if (!validateLoginForm()) return

        isLoading.value = true
        try {
            emit('login', { ...loginForm.value })
        } finally {
            isLoading.value = false
        }
    }

    const handleSignup = async () => {
        if (!validateSignupForm()) return

        isLoading.value = true
        try {
            emit('signup', { ...signupForm.value })
        } finally {
            isLoading.value = false
        }
    }

    const handleSocialLogin = (provider: string) => {
        emit('socialLogin', provider)
    }

    function handleForgotPassword() {
        if (!forgotPasswordEmail.value || !validateEmail(forgotPasswordEmail.value)) return

        isLoading.value = true
        try {
            emit('forgotPassword', forgotPasswordEmail.value)
            showForgotPassword.value = false
            forgotPasswordEmail.value = ''
        } finally {
            isLoading.value = false
        }
    }


    // Watch for ESC key to close modal
    onMounted(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && props.isOpen) {
                closeModal()
            }
        }

        document.addEventListener('keydown', handleEsc)

        onUnmounted(() => {
            document.removeEventListener('keydown', handleEsc)
        })
    })
}
</script>