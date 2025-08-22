<template>
  <section
    class="relative w-full min-h-screen overflow-hidden bg-white dark:bg-gray-900/90 transition-colors duration-500">
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <!-- Gradient overlays -->
      <div
        class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#9dcd5a]/10 to-transparent dark:from-[#9dcd5a]/5" />
      <div
        class="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#b8d975]/10 to-transparent dark:from-[#b8d975]/5" />

      <!-- Subtle pattern overlay -->
      <div class="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style="background-image: url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'60\' height=\'60\' viewBox=\'0 0 60 60\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" />
    </div>

    <!-- Main Content Container -->
    <div
      class="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <!-- Hero Content -->
      <div class="w-full max-w-4xl mx-auto text-center space-y-8">
        <!-- Main Headline -->
        <div class="space-y-4 transition-all duration-1000 transform"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
          <h2
            class="font-['Barlow_Condensed'] text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
            Authentic Nigerian heritage foods from trusted farms<br class="hidden sm:block" />
            <span class="block sm:inline">delivered fresh to your doorstep</span>
          </h2>
        </div>

        <!-- Product Gallery -->
        <div
          class="relative w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto h-56 sm:h-64 md:h-72 mt-8 mb-12 transition-all duration-1000 transform delay-300"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
          <!-- Main Featured Image -->
          <div class="absolute inset-2 rounded-full overflow-hidden shadow-xl z-20 animate-smooth-morph">
            <img :src="featuredProduct.image" :alt="featuredProduct.alt" :key="featuredProduct.id"
              class="w-full h-full object-contain transition-all duration-1500 ease-in-out hover:scale-105"
              :class="imageTransitioning ? 'opacity-20 scale-95' : 'opacity-100 scale-100'" />
            <div class="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent" />
          </div>

          <!-- Decorative Elements -->
          <div class="absolute top-4 right-4 w-3 h-3 bg-[#9dcd5a] rounded-full opacity-80 animate-pulse"></div>
          <div class="absolute bottom-4 left-4 w-2 h-2 bg-[#7ba54a] rounded-full opacity-60 animate-pulse-slow"></div>
        </div>

        <!-- Food Categories Scroll - Fixed to break out of container properly -->
        <div class="relative w-full mt-6 mb-8 transition-all duration-1000 transform delay-600"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
          <!-- Break out of parent container for full width -->
          <div class="absolute left-1/2 transform -translate-x-1/2 w-screen overflow-hidden">
            <div class="animate-scroll-categories flex whitespace-nowrap py-3 justify-center">
              <span v-for="(category, index) in duplicatedCategories" :key="`${category}-${index}`"
                class="inline-block font-sans font-medium text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 px-8 sm:px-12">
                {{ category }}
              </span>
            </div>
          </div>
          <!-- Spacer to maintain layout -->
          <div class="h-12 sm:h-14"></div>
        </div>

        <!-- CTA Button -->
        <div class="transition-all duration-1000 transform delay-500"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
          <button @click="enterFarmMarket"
            class="relative px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 bg-[#7ba54a] hover:bg-[#6a9342] text-white font-['Barlow_Condensed'] font-semibold text-base sm:text-lg rounded-lg transition-all duration-300 hover:scale-110 shadow-[#7ba54a]/20 focus:outline-none focus:ring-2 focus:ring-[#7ba54a] focus:ring-offset-2 dark:focus:ring-offset-gray-900">
            Enter Farm Market
          </button>
        </div>

        <!-- Trust Badges -->
        <div
          class="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 text-sm sm:text-base text-gray-600 dark:text-gray-400 transition-all duration-1000 transform delay-700"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
          <div class="flex items-center px-3 py-2">
            <span class="font-['Barlow_Condensed'] font-medium whitespace-nowrap mr-3">Authentic village flavor</span>
            <Utensils class="w-5 h-5 text-[#5d7c3a] flex-shrink-0" />
          </div>
          <div class="flex items-center px-3 py-2">
            <span class="font-['Barlow_Condensed'] font-medium whitespace-nowrap mr-3">Chemicals-free</span>
            <ShieldCheck class="w-5 h-5 text-[#5d7c3a] flex-shrink-0" />
          </div>
          <div class="flex items-center px-3 py-2">
            <span class="font-['Barlow_Condensed'] font-medium whitespace-nowrap mr-3">Same-day delivery</span>
            <Truck class="w-5 h-5 text-[#5d7c3a] flex-shrink-0" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ShieldCheck, Truck, Utensils } from 'lucide-vue-next'

interface Product {
  id: number
  name: string
  category: string
  image: string
  alt: string
}

// Props
interface Props {
  autoStart?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  autoStart: true
})

// Emits
const emit = defineEmits<{
  enterFarmMarket: []
}>()

// Reactive state
const isLoaded = ref(false)
const currentFeaturedIndex = ref(0)
const imageTransitioning = ref(false)

// Food categories for scrolling
const foodCategories = ref([
  "Pure Heritage Proteins",
  "Traditional Staples",
  "Village Story Condiments",
  "Native Seasonals"
])

// Create enough duplicates for seamless scrolling
const duplicatedCategories = computed(() => {
  // Duplicate categories multiple times for seamless infinite scroll
  const repeats = 6 // Increase repeats for better seamless effect
  return Array(repeats).fill(foodCategories.value).flat()
})

import ponmo from "@/assets/img/farm-2dooor-chicken.png"
import crayfish from "@/assets/img/farm-2dooor-crayfish.png"
import smokedkote from "@/assets/img/farm-2dooor-delivery.png"
import smokedFish from "@/assets/img/farm-2dooor-driedfish.png"
import blackfish from "@/assets/img/farm-2dooor-garri.png"
import driedfish from "@/assets/img/farm-2dooor-meat.png"
import stockfish from "@/assets/img/farm-2dooor-order.png"
import palmOil from "@/assets/img/farm-2dooor-redoil.png"
import plantain from "@/assets/img/farm-2dooor-seasonala.png"
import poultry from "@/assets/img/farm2door-poultry.png"

const products = ref<Product[]>([
  {
    id: 1,
    name: "Premium Stockfish",
    category: "Heritage Proteins",
    image: stockfish,
    alt: "Premium Nigerian stockfish"
  },
  {
    id: 2,
    name: "Traditional Smoked Fish",
    category: "Heritage Proteins",
    image: smokedFish,
    alt: "Traditional smoked fish"
  },
  {
    id: 3,
    name: "Single-Origin Palm Oil",
    category: "Traditional Staples",
    image: palmOil,
    alt: "Pure red palm oil"
  },
  {
    id: 4,
    name: "Fresh Crayfish",
    category: "Heritage Proteins",
    image: crayfish,
    alt: "Fresh Nigerian crayfish"
  },
  {
    id: 5,
    name: "Blackfish",
    category: "Heritage Proteins",
    image: blackfish,
    alt: "Nigerian blackfish"
  },
  {
    id: 6,
    name: "Smoked Catfish",
    category: "Heritage Proteins",
    image: smokedkote,
    alt: "Smoked catfish"
  },
  {
    id: 7,
    name: "Ponmo",
    category: "Heritage Proteins",
    image: ponmo,
    alt: "Traditional ponmo"
  },
  {
    id: 8,
    name: "Organic Poultry",
    category: "Heritage Proteins",
    image: poultry,
    alt: "Organic poultry"
  },
  {
    id: 9,
    name: "Dried Fish",
    category: "Heritage Proteins",
    image: driedfish,
    alt: "Traditional dried fish"
  },
  {
    id: 10,
    name: "Plantain",
    category: "Traditional Staples",
    image: plantain,
    alt: "Fresh plantain"
  }
])

// Fallback image in case others don't load
const fallbackImage = "/images/farm2door-default.png";

// Featured product with fallback
const featuredProduct = computed(() => {
  const product = products.value[currentFeaturedIndex.value];
  return {
    ...product,
    image: product?.image || fallbackImage
  };
});

// Methods
const enterFarmMarket = () => {
  emit('enterFarmMarket')
  navigateTo('/market')
}

// Auto-rotate featured product with subtle morph transition
const startProductRotation = () => {
  const interval = setInterval(() => {
    if (!isLoaded.value) return // Don't run if not loaded

    imageTransitioning.value = true

    setTimeout(() => {
      currentFeaturedIndex.value = (currentFeaturedIndex.value + 1) % products.value.length

      setTimeout(() => {
        imageTransitioning.value = false
      }, 200)
    }, 750)
  }, 4000) // Change every 4 seconds

  // Clean up interval when component unmounts
  onUnmounted(() => {
    clearInterval(interval)
  })
}

// Lifecycle
onMounted(() => {
  if (props.autoStart) {
    setTimeout(() => {
      isLoaded.value = true
    }, 300)
  }

  // Start product rotation after initial load
  setTimeout(() => {
    startProductRotation()
  }, 3000)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&display=swap');

/* Smooth morphing animation for image transitions */
@keyframes smooth-morph {

  0%,
  100% {
    transform: perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1);
    border-radius: 50%;
  }

  20% {
    transform: perspective(1000px) rotateX(2deg) rotateY(-2deg) rotateZ(1deg) scale(1.02);
    border-radius: 45%;
  }

  40% {
    transform: perspective(1000px) rotateX(-1deg) rotateY(3deg) rotateZ(-1deg) scale(1.01);
    border-radius: 55%;
  }

  60% {
    transform: perspective(1000px) rotateX(1deg) rotateY(-1deg) rotateZ(2deg) scale(1.03);
    border-radius: 48%;
  }

  80% {
    transform: perspective(1000px) rotateX(-2deg) rotateY(1deg) rotateZ(-1deg) scale(1.01);
    border-radius: 52%;
  }
}

.animate-smooth-morph {
  animation: smooth-morph 15s ease-in-out infinite;
}

/* Scrolling categories animation */
@keyframes scroll-categories {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-100% / 6));
  }
}

.animate-scroll-categories {
  animation: scroll-categories 10s linear infinite;
}

.animate-pulse-slow {
  animation: pulse 6s ease-in-out infinite;
}

/* Ensure images are properly contained with smooth transitions */
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>