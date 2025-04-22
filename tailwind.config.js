/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fc5f0a',
        secondary: '#faf4e6',
        tertiary: '#242424',
      }
    },
  },
  plugins: [],
}