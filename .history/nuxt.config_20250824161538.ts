export default defineNuxtConfig({
  ssr: true,
  
  runtimeConfig: {
    web3formsKey: process.env.WEB3FORMS_KEY,
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
        timeout: 30000, // Increase timeout from default 10000ms to 30000ms
        // Uncomment the line below to disable HMR if timeout issues persist
        // port: false, // This disables HMR
      },
      // Additional Windows-specific optimizations
      watch: {
        usePolling: true, // Helps with file watching on Windows
        interval: 1000
      }
    },
    // Optimize chunk size for better HMR performance
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
  },
  
  experimental: {
    payloadExtraction: false,
  },
  
  app: {
    baseURL: "/",
  },
  
  compatibilityDate: "2025-01-25",
});