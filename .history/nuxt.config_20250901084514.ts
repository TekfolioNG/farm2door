export default defineNuxtConfig({
  ssr: true,
  
  runtimeConfig: {
    web3formsKey: process.env.WEB3FORMS_KEY,
    
    public: {
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
  
  // Enhanced Vite configuration with increased timeouts
  vite: {
    server: {
      hmr: {
        timeout: 60000, // Increased from 30s to 60s
        port: 24678, // Specific HMR port to avoid conflicts
      },
      watch: {
        usePolling: true,
        interval: 2000, // Increased polling interval to reduce CPU usage
        ignored: ['node_modules', '.nuxt', '.output'] // Ignore unnecessary directories
      }
    },
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        onwarn: (warning, warn) => {
          // Suppress certain warnings that might slow down builds
          if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return
          warn(warning)
        }
      }
    },
    // Add optimization for faster builds
    optimizeDeps: {
      include: ['vue', '@nuxt/ui']
    }
  },
  
  // Enhanced development server configuration
  devServer: {
    port: 3000,
    host: '0.0.0.0'
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
  
  // Add build optimization
  build: {
    transpile: process.env.NODE_ENV === 'production' ? [] : ['@nuxt/ui']
  },
  
  compatibilityDate: "2025-01-25",
});