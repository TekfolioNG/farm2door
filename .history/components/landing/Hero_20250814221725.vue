<template>
  <section class="relative w-screen h-screen overflow-hidden bg-zinc-900">
    <!-- Grain texture overlay -->
    <div class="absolute inset-0 opacity-20 bg-gradient-to-br from-transparent via-amber-900/5 to-transparent" />
    
    <!-- Warm spotlight effect -->
    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-amber-400/10 via-amber-600/5 to-transparent rounded-full blur-3xl" />
    
    <!-- Floating particles -->
    <div class="absolute inset-0">
      <div
        v-for="i in particleCount"
        :key="i"
        class="absolute w-1 h-1 bg-amber-400/30 rounded-full animate-pulse"
        :style="getParticleStyle(i)"
      />
    </div>

    <!-- Main Content -->
    <div class="relative z-10 w-full h-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 mobile-content-spacing">
      
      <!-- Logo & Tagline -->
      <header 
        class="text-center mb-16 transition-all duration-2000 mt-16 md:mt-0"
        :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <h1 class="text-6xl md:text-8xl font-bold text-emerald-400 mb-4 tracking-tight">
          Farm2Door
        </h1>
        <p class="text-xl md:text-2xl text-amber-100 font-light tracking-wide">
          Nature's Best, Delivered Fresh & Fast
        </p>
        <p class="text-sm md:text-base text-zinc-400 mt-2 max-w-md mx-auto">
          Authentic Nigerian heritage foods from trusted farms to your doorstep
        </p>
      </header>

      <!-- Floating Categories (Desktop) -->
      <div class="relative w-full max-w-7xl h-96 hidden md:block">
        <Transition
          v-for="(category, index) in categories"
          :key="category.id"
          name="category-float"
          appear
          :style="{ transitionDelay: `${index * 200}ms` }"
        >
          <div
            v-if="isLoaded"
            class="absolute transform transition-all duration-300 cursor-pointer group"
            :style="{
              ...category.position,
              transform: hoveredCategory === category.id ? 'scale(1.1)' : 'scale(1)'
            }"
            @mouseenter="hoveredCategory = category.id"
            @mouseleave="hoveredCategory = null"
            @click="selectCategory(category)"
          >
            <div class="relative">
              <div 
                class="bg-zinc-800/70 backdrop-blur-sm rounded-2xl p-6 border border-emerald-400/20 transition-all duration-300 hover:border-emerald-400/50 hover:bg-zinc-800/90 hover:shadow-lg hover:shadow-emerald-400/10"
                :class="{ 'animate-pulse': hoveredCategory === category.id }"
              >
                <div class="text-4xl mb-3 transform transition-transform duration-300 group-hover:scale-110 floating-animation">
                  {{ category.icon }}
                </div>
                <h3 class="text-emerald-300 font-semibold text-sm mb-1">
                  {{ category.label }}
                </h3>
                <p class="text-zinc-400 text-xs leading-relaxed">
                  {{ category.description }}
                </p>
              </div>
              
              <!-- Glow effect -->
              <Transition name="glow">
                <div 
                  v-if="hoveredCategory === category.id"
                  class="absolute inset-0 bg-emerald-400/5 rounded-2xl blur-xl -z-10"
                />
              </Transition>
            </div>
          </div>
        </Transition>
      </div>

      <!-- Mobile Categories Grid -->
      <div class="grid grid-cols-2 gap-4 w-full max-w-md mb-12 md:hidden">
        <div
          v-for="(category, index) in mobileCategories"
          :key="category.id"
          class="bg-zinc-800/70 backdrop-blur-sm rounded-xl p-4 border border-emerald-400/20 transition-all duration-300 hover:border-emerald-400/50 cursor-pointer"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          :style="{ transitionDelay: `${index * 100}ms` }"
          @click="selectCategory(category)"
        >
          <div class="text-2xl mb-2">{{ category.icon }}</div>
          <h3 class="text-emerald-300 font-medium text-xs mb-1">
            {{ category.label }}
          </h3>
          <p class="text-zinc-400 text-xs">
            {{ category.description }}
          </p>
        </div>
      </div>

      <!-- Call to Action Buttons -->
      <div 
        class="flex flex-col items-center space-y-4 transition-all duration-2000"
        :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        style="transition-delay: 800ms"
      >
        
        <!-- Primary Button -->
        <button 
          class="group relative px-12 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-lg rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25 border border-emerald-400/50 hover:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
          @click="enterFarm"
          aria-label="Enter Farm - Sign up or login"
        >
          <span class="relative z-10">Enter Farm</span>
          <div class="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </button>

        <!-- Secondary Button -->
        <button 
          class="text-emerald-300 hover:text-emerald-200 text-sm font-light border-b border-emerald-400/30 hover:border-emerald-300/60 transition-all duration-300 pb-1 focus:outline-none focus:ring-1 focus:ring-emerald-400/50"
          @click="browseAsGuest"
          aria-label="Browse products without signing up"
        >
          Browse as guest
        </button>

        <!-- Trust Indicators -->
        <div class="flex items-center space-x-6 mt-8 text-xs text-zinc-500">
          <span class="flex items-center">
            <span class="w-2 h-2 bg-emerald-400 rounded-full mr-2" />
            Same-day delivery
          </span>
          <span class="flex items-center">
            <span class="w-2 h-2 bg-emerald-400 rounded-full mr-2" />
            Chemical-free
          </span>
          <span class="flex items-center">
            <span class="w-2 h-2 bg-emerald-400 rounded-full mr-2" />
            Farm-traced
          </span>
        </div>
      </div>
    </div>

    <!-- Bottom gradient fade -->
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent" />
  </section>
</template>

<script setup lang="ts">
interface Category {
  id: number
  icon: string
  label: string
  description: string
  position: Record<string, string>
  slug?: string
}

// Props (if needed from parent)
interface Props {
  autoStart?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  autoStart: true
})

// Emits
const emit = defineEmits<{
  categorySelected: [category: Category]
  enterFarm: []
  browseGuest: []
}>()

// Reactive state
const isLoaded = ref(false)
const hoveredCategory = ref<number | null>(null)

// Computed
const particleCount = computed(() => {
  // Reduce particles on mobile for performance
  return process.client && window.innerWidth < 768 ? 8 : 15
})

const mobileCategories = computed(() => {
  return categories.value.slice(0, 4)
})

// Categories data
const categories = ref<Category[]>([
  { 
    id: 1, 
    icon: '🍖', 
    label: 'Heritage Proteins', 
    description: 'Wild-sourced & traditionally smoked',
    position: { top: '15%', left: '20%' },
    slug: 'heritage-proteins'
  },
  { 
    id: 2, 
    icon: '🧺', 
    label: 'Farm Baskets', 
    description: 'Curated seasonal selections',
    position: { top: '25%', right: '15%' },
    slug: 'farm-baskets'
  },
  { 
    id: 3, 
    icon: '🌾', 
    label: 'Traditional Staples', 
    description: 'Chemical-free palm oil & garri',
    position: { top: '45%', left: '10%' },
    slug: 'traditional-staples'
  },
  { 
    id: 4, 
    icon: '🌿', 
    label: 'Village Ingredients', 
    description: 'Heirloom seeds & fermented classics',
    position: { top: '35%', right: '25%' },
    slug: 'village-ingredients'
  },
  { 
    id: 5, 
    icon: '🐟', 
    label: 'Fresh Catch', 
    description: 'Stockfish, crayfish & prawns',
    position: { bottom: '25%', left: '25%' },
    slug: 'fresh-catch'
  },
  { 
    id: 6, 
    icon: '🌽', 
    label: 'Native Seasonals', 
    description: 'Tree-ripened fruits & fresh maize',
    position: { bottom: '20%', right: '20%' },
    slug: 'native-seasonals'
  }
])

// Methods
const getParticleStyle = (index: number) => {
  return {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 3}s`,
    animationDuration: `${3 + Math.random() * 2}s`
  }
}

const selectCategory = (category: Category) => {
  emit('categorySelected', category)
  // Navigate to category page
  navigateTo(`/categories/${category.slug}`)
}

const enterFarm = () => {
  emit('enterFarm')
  navigateTo('/auth')
}

const browseAsGuest = () => {
  emit('browseGuest')
  navigateTo('/products')
}

// Lifecycle
onMounted(() => {
  if (props.autoStart) {
    setTimeout(() => {
      isLoaded.value = true
    }, 100)
  }
})

// Expose component methods (for parent component access)
defineExpose({
  startAnimation: () => { isLoaded.value = true },
  categories
})
</script>

<style scoped>
.w-screen {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

.bg-gradient-radial {
  background: radial-gradient(circle, var(--tw-gradient-stops));
}

/* Floating animation for category icons */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.floating-animation {
  animation: float 3s ease-in-out infinite;
}

/* Vue transitions */
.category-float-enter-active {
  transition: all 1s ease-out;
}

.category-float-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.glow-enter-active, .glow-leave-active {
  transition: opacity 0.3s ease;
}

.glow-enter-from, .glow-leave-to {
  opacity: 0;
}

/* Mobile responsive adjustments */
@media (max-width: 768px) {
  .mobile-content-spacing {
    padding-top: 5rem; /* Add space for navbar */
    padding-bottom: 2rem;
  }
  
  section {
    padding-left: 0;
    padding-right: 0;
  }
}

@media (max-width: 640px) {
  .mobile-content-spacing {
    padding-top: 4rem;
  }
}
</style>