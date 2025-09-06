<!-- components/landing/Footer.vue -->
<template>
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        <!-- Company Logo -->
        <div class="space-y-4 text-center md:text-left">
          <div class="flex justify-center md:justify-start">
            <img src="/assets/img/Farm2Door Logo-trans.png" alt="Farm2Door" class="h-24 pt-12 w-auto sm:h-60"
              :class="isDarkMode ? 'filter invert brightness-0 contrast-100' : ''" />
          </div>
          <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Connecting local farms directly to your table. Fresh, sustainable produce delivered with care and commitment
            to quality.
          </p>
          <div class="flex justify-center md:justify-start space-x-4">
            <a href="#" class="text-gray-400 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] transition-colors">
              <Facebook class="w-5 h-5" />
            </a>
            <a href="#" class="text-gray-400 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] transition-colors">
              <Twitter class="w-5 h-5" />
            </a>
            <a href="#" class="text-gray-400 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] transition-colors">
              <Instagram class="w-5 h-5" />
            </a>
            <a href="#" class="text-gray-400 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] transition-colors">
              <Youtube class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4 text-center md:text-left">
          <h3 class="text-gray-900 dark:text-white font-semibold">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/"
                class="text-gray-600 dark:text-gray-400 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] text-sm transition-colors">
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/market"
                class="text-gray-600 dark:text-gray-400 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] text-sm transition-colors">
                Market
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about"
                class="text-gray-600 dark:text-gray-400 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] text-sm transition-colors">
                About Us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/how-it-works"
                class="text-gray-600 dark:text-gray-400 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] text-sm transition-colors">
                How It Works
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact"
                class="text-gray-600 dark:text-gray-400 hover:text-[#7ba54a] dark:hover:text-[#9dcd5a] text-sm transition-colors">
                Contact
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Get in Touch -->
        <div class="space-y-4 text-center md:text-left">
          <h3 class="text-gray-900 dark:text-white font-semibold">Get in Touch</h3>
          <div class="space-y-3">
            <div class="flex items-start justify-center md:justify-start space-x-3">
              <MapPin class="w-4 h-4 text-[#7ba54a] mt-0.5 flex-shrink-0" />
              <div class="text-center md:text-left">
                <p class="text-gray-600 dark:text-gray-400 text-sm">
                  123 Farm Street<br />
                  Lagos, Nigeria 100001
                </p>
              </div>
            </div>

            <div class="flex items-center justify-center md:justify-start space-x-3">
              <Phone class="w-4 h-4 text-[#7ba54a] flex-shrink-0" />
              <a href="tel:+2341234567890"
                class="text-gray-600 dark:text-gray-400 hover:text-[#7ba54a] text-sm transition-colors">
                +234 123 456 7890
              </a>
            </div>

            <div class="flex items-center justify-center md:justify-start space-x-3">
              <Mail class="w-4 h-4 text-[#7ba54a] flex-shrink-0" />
              <a href="mailto:hello@farm2door.com"
                class="text-gray-600 dark:text-gray-400 hover:text-[#7ba54a] text-sm transition-colors">
                hello@farm2door.com
              </a>
            </div>

            <div class="flex items-center justify-center md:justify-start space-x-3">
              <Clock class="w-4 h-4 text-[#7ba54a] flex-shrink-0" />
              <p class="text-gray-600 dark:text-gray-400 text-sm">
                Mon - Fri: 8AM - 6PM
              </p>
            </div>
          </div>
        </div>

        <!-- Newsletter -->
        <div class="space-y-4 text-center md:text-left">
          <h3 class="text-gray-900 dark:text-white font-semibold">Stay Fresh</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Subscribe to our newsletter for the latest updates on fresh produce, seasonal specials, and farming tips
            delivered straight to your inbox.
          </p>
          <form @submit.prevent="handleNewsletterSubmit" class="space-y-3">
            <input v-model="newsletterEmail" type="email" placeholder="Enter your email address"
              class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#7ba54a] focus:border-transparent dark:bg-gray-800 dark:text-white"
              required>
            <button type="submit"
              class="w-full px-4 py-2 bg-[#7ba54a] hover:bg-[#6a9342] text-white text-sm font-medium rounded-lg transition-colors">
              Subscribe to Newsletter
            </button>
          </form>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div class="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-6">
          <!-- Copyright -->
          <div class="text-center lg:text-left order-2 lg:order-1">
            <p class="text-gray-500 dark:text-gray-400 text-sm">
              &copy; {{ currentYear }} Farm2Door. All rights reserved.
            </p>
            <p class="text-gray-500 dark:text-gray-400 text-xs mt-1">
              Proudly Nigerian 🇳🇬
            </p>
          </div>

          <!-- Legal Links -->
          <div
            class="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-center order-3 lg:order-2">
            <NuxtLink to="/privacy"
              class="text-gray-500 dark:text-gray-400 hover:text-[#7ba54a] text-sm transition-colors">
              Privacy Policy
            </NuxtLink>
            <NuxtLink to="/terms"
              class="text-gray-500 dark:text-gray-400 hover:text-[#7ba54a] text-sm transition-colors">
              Terms of Service
            </NuxtLink>
            <NuxtLink to="/cookies"
              class="text-gray-500 dark:text-gray-400 hover:text-[#7ba54a] text-sm transition-colors">
              Cookie Policy
            </NuxtLink>
          </div>

          <!-- Developer Credit -->
          <div class="text-center lg:text-right order-1 lg:order-3">
            <p class="text-gray-500 dark:text-gray-400 text-xs">
              Designed & Developed by
              <a href="https://tekfol.io" target="_blank" rel="noopener noreferrer"
                class="text-[#7ba54a] hover:text-[#6a9342] transition-colors font-medium">
                Tekfolio
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin, Phone,
  Twitter,
  Youtube
} from 'lucide-vue-next';

// State
const newsletterEmail = ref('');
const isDarkMode = ref(false);

// Computed
const currentYear = computed(() => new Date().getFullYear());

// Methods
const handleNewsletterSubmit = () => {
  if (newsletterEmail.value) {
    // Handle newsletter subscription
    console.log('Newsletter subscription:', newsletterEmail.value);
    // Show success message or handle API call
    alert('Thank you for subscribing to our newsletter!');
    newsletterEmail.value = '';
  }
};

// Lifecycle
onMounted(() => {
  if (typeof document !== 'undefined') {
    isDarkMode.value = document.documentElement.classList.contains('dark');
  }
});
</script>