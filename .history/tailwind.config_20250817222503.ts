import preset from "@nuxt/ui";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./nuxt.config.{js,ts}",
    "./node_modules/@nuxt/ui/dist/**/*.{mjs,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow", ...defaultTheme.fontFamily.sans],
        heading: ["Inter", ...defaultTheme.fontFamily.sans],
        hero: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#E6EDF5',
          100: '#CCDAEB',
          200: '#99B5D6',
          300: '#6690C2',
          400: '#336BAD',
          500: '#003366', 
          600: '#002D5C',
          700: '#002244', 
          800: '#001A33',
          900: '#001122',
          950: '#000911',
        },
        blue: {
          500: '#1A4173', 
          600: '#15355D',
        },
        red: {
          500: '#D92121', 
          600: '#B51C1C',
        },
        yellow: {
          500: '#FFB81C', 
          600: '#E6A619',
        }
      },
      letterSpacing: {
        'wider-custom': '0.05em',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}