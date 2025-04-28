/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#fcfaf9',
        text: '#0a0808',
        text2: '#8c8262',
        primary: '#9a8f6d',
        secondary: '#cac3a9',
        tertiary: '#beb286',
        mainH: '#e4dcbe',
        logo: '#52397b',
      },
      screens: {
        '2xl' : '1540px',
      }
    },
  },
  plugins: [],
}