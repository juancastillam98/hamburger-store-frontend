/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");


module.exports =withMT({
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        barlow: ['Barlow Condensed', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'menu-background-mobile': "url('/images/WHY_NOT_A_MENU_mobile.webp')",
        'menu-background-desktop': "url('/images/why-not-a-menu-desktop.webp')"
      },
      fontSize: {
        base: 'clamp(1.25rem, 1.8vw, 1.5rem)',
        h1: 'clamp(3rem, 5vw, 8.25rem)',
        h2: 'clamp(3rem, 4vw, 5rem)',
        h3: 'clamp(1.5rem, 3vw, 3.5rem)',
        h4: 'clamp(1.3rem, 2.5vw, 2.5rem)',
      },
      aspectRatio: {
        '9/16': '9 / 16',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        'autoFit': 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
      },
      colors: {
        primary: '#0c0c0c',
        secondary: '#3a3a3a',
        terciary: '#6E04CC',
        text: '#f8f8ff',
        accent: '#f7a600',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
})
