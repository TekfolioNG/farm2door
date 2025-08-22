<template>
  <section
    class="relative w-full min-h-screen overflow-hidden bg-white dark:bg-gray-900/90 transition-colors duration-500">
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <!-- Gradient overlays -->
      <div
        class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#9dcd5a]/8 to-transparent dark:from-[#9dcd5a]/4" />
      <div
        class="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#b8d975]/8 to-transparent dark:from-[#b8d975]/4" />

      <!-- Subtle floating elements -->
      <div class="absolute top-20 left-10 w-4 h-4 bg-[#9dcd5a]/30 rounded-full animate-float" />
      <div class="absolute top-40 right-20 w-3 h-3 bg-[#7ba54a]/40 rounded-full animate-float-delayed" />
      <div class="absolute bottom-32 left-20 w-2 h-2 bg-[#b8d975]/50 rounded-full animate-float-slow" />
    </div>

    <!-- Main Content Container -->
    <div class="relative z-10 w-full min-h-screen flex items-center px-4 sm:px-6 lg:px-12 pt-24">
      <div class="w-full max-w-7xl mx-auto">
        <!-- Two Column Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-2 items-center">

          <!-- Left Column - Content -->
          <div class="order-2 lg:order-1 space-y-6 mt-8 lg:mt-32 lg:pr-8">
            <!-- Main Headline -->
            <div class="space-y-4 transition-all duration-1000 transform"
              :class="isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'">
              <h1
                class="font-['Barlow_Condensed'] text-center md:text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.9] tracking-tight text-gray-900 dark:text-white">
                Authentic Nigerian<br />
                <span class="text-[#7ba54a]">heritage foods</span><br />
                from trusted farms
              </h1>
              <p
                class="text-center md:text-left text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light leading-relaxed max-w-lg">
                Fresh, premium ingredients delivered straight from village farms to your doorstep
              </p>
            </div>

            <!-- Trust Badges - Now with sequential fade in/out -->
            <div class="h-48 md:h-52 relative mt-6">
              <div v-for="(badge, index) in trustBadges" :key="badge.id"
                class="absolute top-0 left-0 w-full transition-all duration-700" :class="{
                  'opacity-100 translate-y-0': activeBadgeIndex === index,
                  'opacity-0 -translate-y-4': activeBadgeIndex !== index
                }" :style="{ transitionDelay: activeBadgeIndex === index ? '0ms' : '0ms' }">
                <div class="flex items-center justify-center">
                  <div
                    class="flex items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700 max-w-md">
                    <component :is="badge.icon"
                      class="w-6 h-6 sm:w-7 sm:h-7 text-[#7ba54a] mr-4 flex-shrink-0 transition-transform duration-300" />
                    <span class="text-base sm:text-lg font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap">
                      {{ badge.text }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - Product Showcase -->
          <div class="order-1 lg:order-2 flex justify-center lg:justify-end lg:pl-8 -mt-2 lg:-mt-16">
            <div class="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 transition-all duration-1000 transform"
              :class="isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'">

              <!-- Main Featured Image -->
              <div class="relative w-full h-full transition-all duration-1000 transform hover:scale-105">
                <img :src="featuredProduct.image" :alt="featuredProduct.alt" :key="featuredProduct.id"
                  class="w-full h-full object-contain transition-all duration-1500 ease-in-out drop-shadow-2xl"
                  :class="imageTransitioning ? 'opacity-30 scale-95' : 'opacity-100 scale-100'" />

                <!-- Glow effect behind image -->
                <div
                  class="absolute inset-0 bg-gradient-radial from-[#9dcd5a]/20 via-transparent to-transparent blur-xl -z-10 animate-pulse-glow" />
              </div>

              <!-- Product indicator dots -->
              <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <div v-for="(product, index) in products.slice(0, 6)" :key="product.id"
                  class="w-2 h-2 rounded-full transition-all duration-300"
                  :class="index === currentFeaturedIndex ? 'bg-[#7ba54a] w-6' : 'bg-gray-300 dark:bg-gray-600 hover:bg-[#7ba54a]/50'" />
              </div>

              <!-- Floating accent elements -->
              <div
                class="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-[#9dcd5a] to-[#7ba54a] rounded-full opacity-80 animate-float" />
              <div
                class="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-[#b8d975] to-[#9dcd5a] rounded-full opacity-60 animate-float-delayed" />
            </div>
          </div>
        </div>

        <!-- Centered Button Below Columns -->
        <div class="w-full flex justify-center transition-all duration-1000 transform delay-1000"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
          <button @click="enterFarmMarket"
            class="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#7ba54a] to-[#6a9342] hover:from-[#6a9342] hover:to-[#5d7c3a] text-white font-['Barlow_Condensed'] font-bold text-lg sm:text-xl rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-[#7ba54a]/30 focus:outline-none focus:ring-4 focus:ring-[#7ba54a]/50 focus:ring-offset-2 dark:focus:ring-offset-gray-900 overflow-hidden animate-pulse">
            <span class="relative z-10">Enter Farm Market</span>
            <div
              class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Award, ChefHat, Clock, Leaf, Users, Utensils } from 'lucide-vue-next'

interface Product {
  id: number
  name: string
  category: string
  image: string
  alt: string
}

interface TrustBadge {
  id: number
  text: string
  icon: any
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
const activeBadgeIndex = ref(0)

// Enhanced trust badges
const trustBadges = ref<TrustBadge[]>([
  {
    id: 1,
    text: "Authentic local flavor",
    icon: Utensils
  },
  {
    id: 2,
    text: "100% chemicals-free, no artificial preservatives",
    icon: Leaf
  },
  {
    id: 3,
    text: "24-48 hours delivery",
    icon: Clock
  },
  {
    id: 4,
    text: "Trusted by families & chefs worldwide",
    icon: Users
  },
  {
    id: 5,
    text: "Premium quality guarantee",
    icon: Award
  },
  {
    id: 6,
    text: "Serving hotels & restaurants globally",
    icon: ChefHat
  }
])

import smokedkote from "@/assets/img/farm-2dooor-bus.png"
import crayfish from "@/assets/img/farm-2dooor-crayfish.png"
import smokedFish from "@/assets/img/farm-2dooor-driedfish.png"
import blackfish from "@/assets/img/farm-2dooor-garri.png"
import stockfish from "@/assets/img/farm-2dooor-order.png"
import palmOil from "@/assets/img/farm-2dooor-redoil.png"

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

// Rotate trust badges with fade in/out effect
const startBadgeRotation = () => {
  setInterval(() => {
    activeBadgeIndex.value = (activeBadgeIndex.value + 1) % trustBadges.value.length;
  }, 2500); // Change every 2.5 seconds
}

// Auto-rotate featured product with smooth transition
const startProductRotation = () => {
  const interval = setInterval(() => {
    if (!isLoaded.value) return

    imageTransitioning.value = true

    setTimeout(() => {
      currentFeaturedIndex.value = (currentFeaturedIndex.value + 1) % products.value.length

      setTimeout(() => {
        imageTransitioning.value = false
      }, 300)
    }, 600)
  }, 4500) // Change every 4.5 seconds

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
    startBadgeRotation()
  }, 2000)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

/* Custom floating animations */
@keyframes float {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-10px) rotate(5deg);
  }
}

@keyframes float-delayed {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-15px) rotate(-5deg);
  }
}

@keyframes float-slow {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-8px) rotate(3deg);
  }
}

@keyframes pulse-glow {

  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }

  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(123, 165, 74, 0.7);
  }

  70% {
    box-shadow: 0 0 0 10px rgba(123, 165, 74, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(123, 165, 74, 0);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 10s ease-in-out infinite;
}

.animate-pulse-glow {
  animation: pulse-glow 4s ease-in-out infinite;
}

.animate-pulse {
  animation: pulse 2s infinite;
}

/* Gradient radial utility */
.bg-gradient-radial {
  background: radial-gradient(circle, var(--tw-gradient-stops));
}

/* Enhanced image hover effects */
.product-image-container {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-image-container:hover {
  transform: scale(1.05) rotate(2deg);
  filter: brightness(1.1) contrast(1.1);
}

/* Custom button shimmer effect */
.shimmer-effect {
  position: relative;
  overflow: hidden;
}

.shimmer-effect::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  animation: shimmer 3s infinite;
}
</style>