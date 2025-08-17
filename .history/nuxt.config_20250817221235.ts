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
  
  // Configure Nuxt UI with TailwindCSS prefix
  ui: {
    fonts: true
  },
  
  // Configure TailwindCSS through Nuxt UI
  tailwindcss: {
    config: {
      corePlugins: {
        preflight: false, // Disable TailwindCSS reset
      },
      content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue"
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
  },
  
  image: {
    format: ['webp', 'jpg', 'svg', 'png'],
    quality: 80
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