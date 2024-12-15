import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        'brand-red': '#ea384c',
        'brand-black': '#000000',
        'brand-white': '#FFFFFF',
      },
      animation: {
        'fade-in': 'fade-in 1.5s ease-out',
        'fade-in-delay': 'fade-in-delay 2s ease-out',
        'gradient': 'gradient 4s ease infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-delay': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gradient': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;