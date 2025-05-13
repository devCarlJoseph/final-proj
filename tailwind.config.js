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
        primary: '#808a2b',
        secondary: '#edeceb',
        card: '#e5a243',
        tertiary: '#5a3e36',
        mainH: '#e4dcbe',
        logo: '#52397b',
      },
      screens: {
        'tablet': { 'max': '768px' }, 
        'cp' : {'max': '426px'},
      }
    },
  },
  plugins: [],
}