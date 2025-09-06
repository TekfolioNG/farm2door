export default defineNuxtConfig({
  ssr: true,
  
  runtimeConfig: {
    web3formsKey: process.env.WEB3FORMS_KEY,
    
    public: {
      // Workers API URL (will be different from your frontend domain)
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'https://api.farm2door.workers.dev'
    }
  },
  
  css: ["~/assets/css/main.css"],
  
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  
  modules: [
    "@nuxt/icon",
    "@nuxt/ui",
    "@nuxt/image"
  ],
  
  ui: {
    fonts: true
  },
  
  image: {
    format: ['webp', 'jpg', 'svg', 'png'],
    quality: 80
  },
  
  // Vite configuration for development server issues
  vite: {
    server: {
      hmr: {
        timeout: 30000,
      },
      watch: {
        usePolling: true,
        interval: 1000
      }
    },
    build: {
      chunkSizeWarningLimit: 1000
    }
  },
  
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
    }
  },
  
  experimental: {
    payloadExtraction: false,
  },
  
  app: {
    baseURL: "/",
  },
  
  compatibilityDate: "2025-01-25",
});