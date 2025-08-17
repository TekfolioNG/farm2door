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
      class="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <!-- Hero Content -->
      <div class="w-full max-w-4xl mx-auto text-center space-y-8">
        <!-- Main Headline -->
        <div class="space-y-4 transition-all duration-1000 transform"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
          <h1 class="font-['Barlow_Condensed'] text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            <span class="text-gray-900 dark:text-white">Farm2Door Heritage</span>
          </h1>

          <p
            class="font-['Barlow_Condensed'] text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto">
            Authentic Nigerian heritage foods from trusted farms delivered fresh to your doorstep
          </p>
        </div>

        <!-- Product Gallery -->
        <div class="relative w-full h-64 sm:h-80 md:h-96 mt-8 mb-12 transition-all duration-1000 transform delay-300"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
          <!-- Main Featured Image -->
          <div class="absolute inset-0 rounded-2xl overflow-hidden shadow-xl z-20 animate-tilt-scale">
            <img :src="featuredProduct.image" :alt="featuredProduct.alt"
              class="w-full h-full object-cover transition-all duration-1000 hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
          </div>

          <!-- Decorative Elements -->
          <div class="absolute top-4 right-4 w-3 h-3 bg-[#9dcd5a] rounded-full opacity-80 animate-pulse"></div>
          <div class="absolute bottom-4 left-4 w-2 h-2 bg-[#7ba54a] rounded-full opacity-60 animate-pulse-slow"></div>
        </div>

        <!-- CTA Button -->
        <div class="transition-all duration-1000 transform delay-500"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
          <button @click="enterFarmMarket"
            class="relative px-8 py-3 sm:px-10 sm:py-4 bg-[#9dcd5a] hover:bg-[#7ba54a] text-white font-['Barlow_Condensed'] font-semibold text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-[#9dcd5a]/20 focus:outline-none focus:ring-2 focus:ring-[#9dcd5a] focus:ring-offset-2 dark:focus:ring-offset-gray-900">
            Enter Farm Market
          </button>
        </div>

        <!-- Trust Badges -->
        <div
          class="flex flex-wrap justify-center gap-4 mt-8 text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-all duration-1000 transform delay-700"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
          <div class="flex items-center">
            <div class="w-2 h-2 bg-[#9dcd5a] rounded-full mr-2"></div>
            <span class="font-['Barlow_Condensed'] font-medium">Same-day delivery</span>
          </div>
          <div class="flex items-center">
            <div class="w-2 h-2 bg-[#9dcd5a] rounded-full mr-2"></div>
            <span class="font-['Barlow_Condensed'] font-medium">Chemical-free</span>
          </div>
          <div class="flex items-center">
            <div class="w-2 h-2 bg-[#9dcd5a] rounded-full mr-2"></div>
            <span class="font-['Barlow_Condensed'] font-medium">Farm-traced</span>
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

// IMPORTANT: Make sure these paths match your actual image locations
const products = ref<Product[]>([
  {
    id: 1,
    name: "Premium Stockfish",
    category: "Heritage Proteins",
    image: "/images/farm2door-stockfish.png", // Updated path
    alt: "Premium Nigerian stockfish"
  },
  {
    id: 2,
    name: "Traditional Smoked Fish",
    category: "Heritage Proteins",
    image: "/images/farm2door-smokedfish.png", // Updated path
    alt: "Traditional smoked fish"
  },
  {
    id: 3,
    name: "Single-Origin Palm Oil",
    category: "Traditional Staples",
    image: "/images/farm2door-palmoil.png", // Updated path
    alt: "Pure red palm oil"
  },
  {
    id: 4,
    name: "Fresh Crayfish",
    category: "Heritage Proteins",
    image: "/images/farm2door-crayfish.png", // Updated path
    alt: "Fresh Nigerian crayfish"
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

// Auto-rotate featured product
const startProductRotation = () => {
  setInterval(() => {
    currentFeaturedIndex.value = (currentFeaturedIndex.value + 1) % products.value.length
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

/* Tilt and Scale Animation */
@keyframes tilt-scale {

  0%,
  100% {
    transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1);
  }

  25% {
    transform: perspective(1000px) rotateX(1deg) rotateY(-1deg) scale(1.01);
  }

  50% {
    transform: perspective(1000px) rotateX(0deg) rotateY(1deg) scale(1.02);
  }

  75% {
    transform: perspective(1000px) rotateX(-1deg) rotateY(0deg) scale(1.01);
  }
}

.animate-tilt-scale {
  animation: tilt-scale 12s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse 6s ease-in-out infinite;
}

/* Ensure images fill their containers */
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>