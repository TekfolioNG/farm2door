export default defineNuxtConfig({
  ssr: true,
  
  runtimeConfig: {
    web3formsKey: process.env.WEB3FORMS_KEY,
    // Add JWT secrets for authentication
    jwtSecret: process.env.JWT_SECRET || 'your-jwt-secret-change-in-production',
    jwtRefreshSecret: process.env.JWT_REFRESH_SECRET || 'your-jwt-refresh-secret-change-in-production',
    
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api'
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
    },
    // Add experimental WASM support for D1
    experimental: {
      wasm: true
    },
  },
  
  experimental: {
    payloadExtraction: false,
  },
  
  app: {
    baseURL: "/",
  },
  
  compatibilityDate: "2025-01-25",
});