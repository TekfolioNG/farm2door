<template>
  <section
    class="relative w-screen min-h-screen overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-500">
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <!-- Gradient overlays -->
      <div
        class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#9dcd5a]/10 to-transparent dark:from-[#9dcd5a]/5 transition-all duration-500" />
      <div
        class="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#b8d975]/10 to-transparent dark:from-[#b8d975]/5 transition-all duration-500" />

      <!-- Subtle pattern overlay -->
      <div class="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style="background-image: url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'60\' height=\'60\' viewBox=\'0 0 60 60\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" />
    </div>

    <!-- Main Content Container -->
    <div class="relative z-10 w-full min-h-screen flex flex-col pt-20 px-4 sm:px-6 lg:px-8">

      <!-- Hero Content -->
      <div class="flex-1 max-w-7xl mx-auto w-full">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">

          <!-- Left Column - Text Content -->
          <div class="space-y-8 order-2 lg:order-1">
            <!-- Main Headline -->
            <div class="space-y-4 transition-all duration-1000 transform"
              :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
              <h1
                class="font-['Barlow_Condensed'] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight">
                <span class="text-gray-900 dark:text-white block">Farm2Door</span>
                <span class="text-[#9dcd5a] block">Heritage</span>
              </h1>

              <p
                class="font-['Barlow_Condensed'] text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-light leading-relaxed max-w-2xl">
                Authentic Nigerian heritage foods from trusted farms delivered fresh to your doorstep
              </p>
            </div>

            <!-- Trust Badges -->
            <div class="flex flex-wrap gap-6 transition-all duration-1000 transform delay-300"
              :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
              <div class="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <div class="w-2 h-2 bg-[#9dcd5a] rounded-full"></div>
                <span class="font-['Barlow_Condensed'] font-medium">Same-day delivery</span>
              </div>
              <div class="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <div class="w-2 h-2 bg-[#9dcd5a] rounded-full"></div>
                <span class="font-['Barlow_Condensed'] font-medium">Chemical-free processing</span>
              </div>
              <div class="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <div class="w-2 h-2 bg-[#9dcd5a] rounded-full"></div>
                <span class="font-['Barlow_Condensed'] font-medium">Farm-traced sourcing</span>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 transition-all duration-1000 transform delay-500"
              :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
              <button @click="enterFarmMarket"
                class="group relative px-8 py-4 bg-[#9dcd5a] hover:bg-[#7ba54a] text-white font-['Barlow_Condensed'] font-semibold text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#9dcd5a]/25 focus:outline-none focus:ring-2 focus:ring-[#9dcd5a] focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                <span class="relative z-10">Enter Farm Market</span>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-[#b8d975] to-[#9dcd5a] rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </button>

              <button @click="browseAsGuest"
                class="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-[#9dcd5a] hover:text-[#9dcd5a] font-['Barlow_Condensed'] font-medium text-lg rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#9dcd5a] focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                Browse as Guest
              </button>
            </div>
          </div>

          <!-- Right Column - Product Gallery -->
          <div class="order-1 lg:order-2">
            <div class="relative">
              <!-- Main Featured Image with Tilt and Scale Animation -->
              <div
                class="absolute top-0 left-0 w-full h-2/5 rounded-2xl overflow-hidden shadow-2xl z-20 animate-tilt-scale transition-all duration-1000 transform"
                :class="isLoaded ? 'opacity-100' : 'opacity-0'">
                <img :src="featuredProduct.image" :alt="featuredProduct.alt"
                  class="w-full h-full object-cover transition-all duration-1000 hover:scale-105" />
                <div class="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
              </div>

              <!-- Floating Product Image 1 - Parallax Animation -->
              <div v-if="floatingProducts[0]"
                class="absolute top-1/3 right-0 w-3/4 h-1/3 rounded-xl overflow-hidden shadow-xl z-30 animate-parallax transition-all duration-1000 transform cursor-pointer"
                :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
                style="transition-delay: 800ms" @click="setFeaturedProduct(floatingProducts[0])">
                <img :src="floatingProducts[0].image" :alt="floatingProducts[0].alt"
                  class="w-full h-full object-cover transition-all duration-1000 hover:scale-105" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <!-- Floating Product Image 2 - Float Animation -->
              <div v-if="floatingProducts[1]"
                class="absolute bottom-0 left-0 w-4/5 h-1/3 rounded-xl overflow-hidden shadow-xl z-25 animate-float transition-all duration-1000 transform cursor-pointer"
                :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
                style="transition-delay: 1000ms" @click="setFeaturedProduct(floatingProducts[1])">
                <img :src="floatingProducts[1].image" :alt="floatingProducts[1].alt"
                  class="w-full h-full object-cover transition-all duration-1000 hover:scale-105" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <!-- Floating Product Image 3 - Subtle Scale Animation -->
              <div v-if="floatingProducts[2]"
                class="absolute top-16 right-16 w-24 h-24 lg:w-32 lg:h-32 rounded-xl overflow-hidden shadow-lg z-35 animate-subtle-scale transition-all duration-1000 transform cursor-pointer"
                :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
                style="transition-delay: 1200ms" @click="setFeaturedProduct(floatingProducts[2])">
                <img :src="floatingProducts[2].image" :alt="floatingProducts[2].alt"
                  class="w-full h-full object-cover transition-all duration-1000 hover:scale-105" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <!-- Decorative Elements -->
              <div class="absolute top-8 right-8 w-3 h-3 bg-[#9dcd5a] rounded-full opacity-80 animate-pulse"></div>
              <div class="absolute bottom-16 right-8 w-2 h-2 bg-[#7ba54a] rounded-full opacity-60 animate-pulse-slow">
              </div>
              <div class="absolute top-1/2 left-4 w-2 h-2 bg-[#b8d975] rounded-full opacity-70 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Product Categories Section -->
      <div class="max-w-7xl mx-auto w-full py-16 lg:py-24">
        <div class="text-center mb-12 transition-all duration-1000 transform"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'" style="transition-delay: 1200ms">
          <h2 class="font-['Barlow_Condensed'] text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Heritage Collections
          </h2>
          <p class="font-['Barlow_Condensed'] text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover authentic Nigerian ingredients, carefully sourced and traditionally processed
          </p>
        </div>

        <!-- Categories Grid -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(category, index) in categories" :key="category.id"
            class="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 dark:border-gray-700 hover:border-[#9dcd5a]/50 dark:hover:border-[#9dcd5a]/50 transform hover:-translate-y-1"
            :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
            :style="{ transitionDelay: `${1400 + index * 100}ms` }" @click="selectCategory(category)">
            <div class="text-center">
              <h3 class="font-['Barlow_Condensed'] font-bold text-lg text-gray-900 dark:text-white mb-2">
                {{ category.name }}
              </h3>
              <p class="font-['Barlow_Condensed'] text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ category.description }}
              </p>
            </div>

            <!-- Hover effect -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-[#9dcd5a]/10 to-[#b8d975]/10 dark:from-[#9dcd5a]/20 dark:to-[#b8d975]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
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
  position?: string
}

interface Category {
  id: number
  name: string
  description: string
  slug: string
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
  categorySelected: [category: Category]
  enterFarmMarket: []
  browseGuest: []
}>()

// Reactive state
const isLoaded = ref(false)
const hoveredProduct = ref<number | null>(null)
const currentFeaturedIndex = ref(0)

// Product data
const products = ref<Product[]>([
  {
    id: 1,
    name: "Premium Stockfish",
    category: "Pure Heritage Proteins",
    image: "/assets/img/farm2door-stockfish.png",
    alt: "Premium Nigerian stockfish"
  },
  {
    id: 2,
    name: "Traditional Smoked Fish",
    category: "Pure Heritage Proteins",
    image: "/assets/img/farm2door-smokedfish.png",
    alt: "Traditional smoked fish"
  },
  {
    id: 3,
    name: "Single-Origin Palm Oil",
    category: "Traditional Staples",
    image: "/assets/img/farm2door-palmoil.png",
    alt: "Pure red palm oil"
  },
  {
    id: 4,
    name: "Fresh Crayfish",
    category: "Pure Heritage Proteins",
    image: "/assets/img/farm2door-crayfish.png",
    alt: "Fresh Nigerian crayfish"
  },
  {
    id: 5,
    name: "Smoked Kote Fish",
    category: "Pure Heritage Proteins",
    image: "/assets/img/farm2door-smokedkote.png",
    alt: "Traditional smoked kote"
  },
  {
    id: 6,
    name: "Premium Ponmo",
    category: "Pure Heritage Proteins",
    image: "/assets/img/farm2door-ponmo.png",
    alt: "Quality ponmo (cow skin)"
  },
  {
    id: 7,
    name: "Fresh Poultry",
    category: "Pure Heritage Proteins",
    image: "/assets/img/farm2door-poultry.png",
    alt: "Farm-fresh poultry"
  },
  {
    id: 8,
    name: "Tree-Ripened Plantain",
    category: "Native Seasonals",
    image: "/assets/img/farm2door-plantain.png",
    alt: "Fresh plantain"
  }
])

// Floating products (smaller images around main) - Reduced to 3 for the animations
const floatingProducts = computed(() => {
  const validProducts = products.value.filter(p => p != null)
  if (validProducts.length < 4) return []

  return [
    { ...validProducts[1], position: 'top-1/3 right-0' },
    { ...validProducts[2], position: 'bottom-0 left-0' },
    { ...validProducts[3], position: 'top-16 right-16' }
  ]
})

// Featured product (main large image)
const featuredProduct = computed(() => {
  const product = products.value[currentFeaturedIndex.value]
  return product || products.value[0] || {
    id: 0,
    name: "Premium Products",
    category: "Heritage Collection",
    image: "/assets/img/farm2door-stockfish.png",
    alt: "Farm2Door Heritage Products"
  }
})

// Categories
const categories = ref<Category[]>([
  {
    id: 1,
    name: "Pure Heritage Proteins",
    description: "Wild-sourced and traditionally processed proteins rich in indigenous flavor",
    slug: "heritage-proteins"
  },
  {
    id: 2,
    name: "Traditional Staples",
    description: "Chemical-free staples from trusted local processors",
    slug: "traditional-staples"
  },
  {
    id: 3,
    name: "Village Story Ingredients",
    description: "Heirloom ingredients naturally dried or fermented",
    slug: "village-ingredients"
  },
  {
    id: 4,
    name: "Native Seasonals",
    description: "Fresh seasonal specialties and tree-ripened fruits",
    slug: "native-seasonals"
  }
])

// Methods
const setFeaturedProduct = (product: Product) => {
  const index = products.value.findIndex(p => p.id === product.id)
  if (index !== -1) {
    currentFeaturedIndex.value = index
  }
}

const selectCategory = (category: Category) => {
  emit('categorySelected', category)
  navigateTo(`/categories/${category.slug}`)
}

const enterFarmMarket = () => {
  emit('enterFarmMarket')
  navigateTo('/market')
}

const browseAsGuest = () => {
  emit('browseGuest')
  navigateTo('/products')
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

// Expose methods
defineExpose({
  startAnimation: () => { isLoaded.value = true },
  categories,
  products
})
</script>

<style scoped>
.w-screen {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

/* Import Barlow Condensed font */
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500;600;700;800&display=swap');

/* Smooth transitions for theme switching */
* {
  transition-property: background-color, border-color, color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Tilt and Scale Animation from the sample */
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

/* Parallax-like Animation */
@keyframes parallax {

  0%,
  100% {
    transform: translateX(0) translateY(0) scale(1);
    filter: brightness(1);
  }

  33% {
    transform: translateX(-2px) translateY(-3px) scale(1.005);
    filter: brightness(1.05);
  }

  66% {
    transform: translateX(2px) translateY(2px) scale(0.995);
    filter: brightness(0.98);
  }
}

/* Floating Animation */
@keyframes float {

  0%,
  100% {
    transform: translateY(0) scale(1);
    filter: brightness(1);
  }

  50% {
    transform: translateY(-5px) scale(1.01);
    filter: brightness(1.02);
  }
}

/* Subtle Scale Animation */
@keyframes subtle-scale {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.02);
  }
}

/* Animation Classes */
.animate-tilt-scale {
  animation: tilt-scale 12s ease-in-out infinite;
}

.animate-parallax {
  animation: parallax 8s ease-in-out infinite 2s;
}

.animate-float {
  animation: float 10s ease-in-out infinite 4s;
}

.animate-subtle-scale {
  animation: subtle-scale 6s ease-in-out infinite 1s;
}

.animate-pulse-slow {
  animation: pulse 6s ease-in-out infinite;
}
</style>