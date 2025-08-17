export default defineNuxtConfig({
  ssr: true,
  
  runtimeConfig: {
    web3formsKey: process.env.WEB3FORMS_KEY,
  },
  
  // ✅ CSS configuration - let @nuxtjs/tailwindcss handle PostCSS
  css: ["~/assets/css/main.css"],
  
  modules: [
    // "nuxt-icon", // ❌ Removed - incompatible with Nuxt 4
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxtjs/tailwindcss" // ✅ Use Nuxt's TailwindCSS module
  ],
  
  ui: {
    fonts: true
  },
  
  image: {
    format: ['webp', 'jpg', 'svg', 'png'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    }
  },
  
  // ✅ Vite optimizations for timeout issues
  vite: {
    server: {
      hmr: {
        timeout: 60000, // Increase timeout to 60 seconds
        port: 24678 // Use different HMR port
      },
      watch: {
        usePolling: true, // Better for Windows
        interval: 1000
      }
    },
    optimizeDeps: {
      include: [
        'lucide-vue-next'
        // Removed @vueuse/core as it's causing resolution issues
      ],
      exclude: ['@nuxt/ui-pro', 'lightningcss'] // Exclude problematic packages
    },
    build: {
      rollupOptions: {
        external: ['sharp', 'lightningcss'] // Exclude from client bundle
      }
    },
    // ✅ Fix for native modules
    define: {
      global: 'globalThis'
    }
  },
  
  // ✅ Build optimizations
  build: {
    transpile: [
      'lucide-vue-next',
      '@headlessui/vue'
    ]
  },
  
  // ✅ Nitro optimizations
  nitro: {
    preset: "cloudflare-pages",
    output: {
      publicDir: ".output/public",
      serverDir: '.output/server'
    },
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: ['/']
    },
    // Increase timeout for build
    timing: true,
    experimental: {
      wasm: true
    }
  },
  
  // ✅ Development optimizations
  experimental: {
    payloadExtraction: false,
    typedPages: true, // Better type safety
    viewTransition: true // Smooth page transitions
  },
  
  // ✅ App configuration
  app: {
    baseURL: "/",
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap'
        }
      ]
    }
  },
  
  // ✅ TypeScript optimizations
  typescript: {
    typeCheck: 'build', // Only type check during build, not dev
    strict: true
  },
  
  // ✅ Development server optimization
  devServer: {
    port: 3000,
    host: '127.0.0.1' // Use IPv4 instead of localhost
  },
  
  // ✅ Router optimizations
  router: {
    options: {
      strict: false // Less strict routing for better performance
    }
  },
  
  compatibilityDate: "2025-01-25",
});