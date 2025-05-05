/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#faf8f7',
        text: '#0a0808',
        text2: '#8c8262',
        primary: '#fc350b',
        secondary: '#fef1e1',
        tertiary: '#242424',
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