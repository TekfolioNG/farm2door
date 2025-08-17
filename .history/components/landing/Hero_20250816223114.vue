<template>
  <section
    class="relative w-full min-h-screen overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-500">
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
            Authentic Nigerian heritage foods from trusted farms<br class="hidden sm:inline" />
            delivered fresh to your doorstep
          </h2>
        </div>

        <!-- Product Gallery -->
        <div class="relative w-full h-56 sm:h-64 md:h-72 mt-8 mb-12 transition-all duration-1000 transform delay-300"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
          <!-- Main Featured Image -->
          <div class="absolute inset-0 overflow-hidden z-20 animate-gentle-float">
            <img :src="featuredProduct.image" :alt="featuredProduct.alt"
              class="w-full h-full object-contain transition-all duration-300 hover:scale-[1.03]" />
            <div class="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent" />
          </div>

          <!-- Decorative Elements -->
          <div class="absolute top-4 right-4 w-3 h-3 bg-[#9dcd5a] rounded-full opacity-80 animate-pulse"></div>
          <div class="absolute bottom-4 left-4 w-2 h-2 bg-[#7ba54a] rounded-full opacity-60 animate-pulse-slow"></div>
        </div>

        <!-- CTA Button -->
        <div class="transition-all duration-1000 transform delay-500"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
          <button @click="enterFarmMarket"
            class="relative px-8 py-3 sm:px-10 sm:py-4 bg-[#7ba54a] hover:bg-[#5d8238] text-white font-['Barlow_Condensed'] font-semibold text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-[#7ba54a]/30 focus:outline-none focus:ring-2 focus:ring-[#7ba54a] focus:ring-offset-2 dark:focus:ring-offset-gray-900 animate-button-bob">
            Enter Farm Market
          </button>
        </div>

        <!-- Trust Badges -->
        <div
          class="flex flex-wrap justify-center gap-4 mt-8 text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-all duration-1000 transform delay-700"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
          <div class="flex items-center">
            <div class="w-2 h-2 bg-[#9dcd5a] rounded-full mr-2"></div>
            <span class="font-['Barlow_Condensed'] font-medium">Authentic village flavor</span>
          </div>
          <div class="flex items-center">
            <div class="w-2 h-2 bg-[#9dcd5a] rounded-full mr-2"></div>
            <span class="font-['Barlow_Condensed'] font-medium">Chemicals-free</span>
          </div>
          <div class="flex items-center">
            <div class="w-2 h-2 bg-[#9dcd5a] rounded-full mr-2"></div>
            <span class="font-['Barlow_Condensed'] font-medium">Same-day delivery</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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

import blackfish from "@/assets/img/farm2door-blackfish.png"
import crayfish from "@/assets/img/farm2door-crayfish.png"
import driedfish from "@/assets/img/farm2door-driedfish.png"
import palmOil from "@/assets/img/farm2door-palmoil.png"
import plantain from "@/assets/img/farm2door-plantain.png"
import ponmo from "@/assets/img/farm2door-ponmo.png"
import poultry from "@/assets/img/farm2door-poultry.png"
import smokedFish from "@/assets/img/farm2door-smokedfish.png"
import smokedkote from "@/assets/img/farm2door-smokedkote.png"
import stockfish from "@/assets/img/farm2door-stockfish.png"

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

// Auto-rotate featured product with smooth transition
const startProductRotation = () => {
  setInterval(() => {
    // Add transition class before changing
    const imageContainer = document.querySelector('.animate-gentle-float');
    if (imageContainer) {
      imageContainer.classList.add('opacity-0', 'scale-95');

      setTimeout(() => {
        currentFeaturedIndex.value = (currentFeaturedIndex.value + 1) % products.value.length;

        // Remove transition class after change
        setTimeout(() => {
          imageContainer.classList.remove('opacity-0', 'scale-95');
        }, 50);
      }, 500);
    }
  }, 5000) // Change every 5 seconds
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

/* Gentle floating animation */
@keyframes gentle-float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
}

/* Button bob animation */
@keyframes button-bob {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }
}

.animate-gentle-float {
  animation: gentle-float 6s ease-in-out infinite;
}

.animate-button-bob {
  animation: button-bob 4s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse 6s ease-in-out infinite;
}

/* Ensure images fit nicely in their containers */
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all 0.3s ease;
}

/* Smooth transition for product changes */
.opacity-0 {
  opacity: 0;
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.scale-95 {
  transform: scale(0.95);
}

/* Mobile responsiveness adjustments */


h2 {
  padding: 0 1rem;
}

.relative.w-full.h-56 {
  height: 48vw;
  max-height: 280px;
}

button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
}

.flex.flex-wrap.justify-center.gap-4 {
  gap: 0.75rem;
  padding: 0 1rem;
}
</style>