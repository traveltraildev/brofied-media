/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: 'var(--brand-red)',
          'red-light': 'var(--brand-red-light)',
          black: 'var(--brand-black)',
          gray: {
            900: 'var(--brand-gray-900)',
            800: 'var(--brand-gray-800)',
            700: 'var(--brand-gray-700)',
            500: 'var(--brand-gray-500)',
            300: 'var(--brand-gray-300)',
            100: 'var(--brand-gray-100)',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Bebas Neue', 'cursive'],
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out forwards',
        'slide-up': 'slide-up .6s ease-out forwards',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'slide-up': {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}