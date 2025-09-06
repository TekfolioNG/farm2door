<!-- layouts/default.vue -->
<template>
  <div class="min-h-screen flex flex-col">
    <LandingNavbar v-if="$route.path === '/'"></LandingNavbar>
    <LandingNavbar2 v-else></LandingNavbar2>

    <slot></slot>

    <LandingFooter v-if="$route.path !== '/'"></LandingFooter>

    <!-- Global Auth Modal -->
    <AuthModal :showAuthModal="showAuthModal" :isDarkMode="isDarkMode" @close="closeAuthModal"
      @login="handleLoginSubmit" @signup="handleSignupSubmit" @social-login="handleSocialLogin" />
  </div>
</template>

<script setup lang="ts">
import { useAuthModal } from '~/composables/useAuthModal';
// Make sure to import the AuthModal component
import AuthModal from '~/components/landing/AuthModal.vue';

const { showAuthModal, closeAuthModal } = useAuthModal();
const isDarkMode = ref(false);

// Handle form submissions
const handleLoginSubmit = (loginData: any) => {
  console.log('Login data:', loginData);
  closeAuthModal();
};

const handleSignupSubmit = (signupData: any) => {
  console.log('Signup data:', signupData);
  closeAuthModal();
};

const handleSocialLogin = (provider: string) => {
  console.log('Social login with:', provider);
};
</script>