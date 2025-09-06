<!-- components/landing/Footer.vue -->
<template>
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        <!-- Company Info -->
        <div class="space-y-4 text-center md:text-left">
          <div class="flex justify-center md:justify-start">
            <img src="/assets/img/Farm2Door Logo-trans.png" alt="Farm2Door" class="h-12 w-auto mx-auto md:mx-0"
              :class="isDarkMode ? 'filter invert brightness-0 contrast-100' : ''" />
          </div>
          <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Connecting local farms directly to your table. Fresh, sustainable produce delivered with care and commitment
            to quality.
          </p>
          <div class="flex space-x-4 justify-center md:justify-start">
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

        <!-- Get in Touch (Moved to 3rd column) -->
        <div class="space-y-4 text-center md:text-left">
          <h3 class="text-gray-900 dark:text-white font-semibold">Get in Touch</h3>
          <div class="space-y-3">
            <div class="flex items-start space-x-3 justify-center md:justify-start">
              <MapPin class="w-4 h-4 text-[#7ba54a] mt-0.5 flex-shrink-0" />
              <div>
                <p class="text-gray-600 dark:text-gray-400 text-sm">
                  123 Farm Street<br />
                  Lagos, Nigeria 100001
                </p>
              </div>
            </div>

            <div class="flex items-center space-x-3 justify-center md:justify-start">
              <Phone class="w-4 h-4 text-[#7ba54a] flex-shrink-0" />
              <a href="tel:+2341234567890"
                class="text-gray-600 dark:text-gray-400 hover:text-[#7ba54a] text-sm transition-colors">
                +234 123 456 7890
              </a>
            </div>

            <div class="flex items-center space-x-3 justify-center md:justify-start">
              <Mail class="w-4 h-4 text-[#7ba54a] flex-shrink-0" />
              <a href="mailto:hello@farm2door.com"
                class="text-gray-600 dark:text-gray-400 hover:text-[#7ba54a] text-sm transition-colors">
                hello@farm2door.com
              </a>
            </div>

            <div class="flex items-center space-x-3 justify-center md:justify-start">
              <Clock class="w-4 h-4 text-[#7ba54a] flex-shrink-0" />
              <p class="text-gray-600 dark:text-gray-400 text-sm">
                Mon - Fri: 8AM - 6PM
              </p>
            </div>
          </div>
        </div>

        <!-- Newsletter (Moved to 4th column) -->
        <div class="space-y-4 text-center md:text-left">
          <h3 class="text-gray-900 dark:text-white font-semibold">Stay Updated</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm">
            Subscribe to our newsletter for the latest updates, fresh produce tips, and exclusive offers delivered
            straight to your inbox.
          </p>
          <form @submit.prevent="handleNewsletterSubmit" class="space-y-3">
            <input v-model="newsletterEmail" type="email" placeholder="Enter your email"
              class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#7ba54a] focus:border-transparent dark:bg-gray-800 dark:text-white"
              required>
            <button type="submit"
              class="w-full px-4 py-2 bg-[#7ba54a] hover:bg-[#6a9342] text-white text-sm font-medium rounded-lg transition-colors">
              Subscribe Now
            </button>
          </form>
          <p class="text-gray-500 dark:text-gray-400 text-xs">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Farm2Door.
          </p>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div class="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <!-- Copyright and Additional Info -->
          <div
            class="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-center order-2 lg:order-1">
            <p class="text-gray-500 dark:text-gray-400 text-sm">
              &copy; {{ currentYear }} Farm2Door. All rights reserved.
            </p>
            <span class="text-gray-500 dark:text-gray-400 text-sm">•</span>
            <p class="text-gray-500 dark:text-gray-400 text-sm">
              Proudly Nigerian
            </p>
            <span class="text-gray-500 dark:text-gray-400 text-sm">•</span>
            <a href="https://tekfol.io" target="_blank"
              class="text-gray-500 dark:text-gray-400 hover:text-[#7ba54a] text-sm transition-colors">
              Designed & Developed by Tekfolio
            </a>
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

<style scoped>
@media (max-width: 768px) {
  .grid>div {
    text-align: center;
    justify-items: center;
  }

  .flex.justify-center {
    justify-content: center;
  }

  .flex.items-center {
    justify-content: center;
  }
}
</style>