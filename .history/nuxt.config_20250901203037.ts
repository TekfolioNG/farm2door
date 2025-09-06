export default defineNuxtConfig({
  ssr: true,
  
  runtimeConfig: {
     // Private keys (only available on server-side)
    web3formsKey: process.env.WEB3FORMS_KEY,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    microsoftClientSecret: process.env.MICROSOFT_CLIENT_SECRET,
    microsoftTenantId: process.env.MICROSOFT_TENANT_ID,
    
    public: {
      // Public keys (exposed to client-side)
      googleClientId: process.env.GOOGLE_CLIENT_ID,
      microsoftClientId: process.env.MICROSOFT_CLIENT_ID,
      // Workers API URL (will be different from your frontend domain)
    apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 
        (process.dev ? 'http://127.0.0.1:8787' : 'https://api.farm2door.workers.dev')
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