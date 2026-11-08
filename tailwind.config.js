/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#191816',
        paper: '#f3f0e9',
        sand: '#d9d0c3',
        bronze: '#a58a68',
        stone: '#81796f',
      },
      fontFamily: {
        sans: ['DM Sans', 'Arial', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      letterSpacing: {
        editorial: '.22em',
      },
    },
  },
  plugins: [],
}
