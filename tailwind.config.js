/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#faf9f7',
        text: '#0a0808',
        text2: '#8c8262',
        primary: '#e44125',
        secondary: '#f9f3ee',
        tertiary: '#212121',
        mainH: '#e4dcbe',
        logo: '#52397b',
      },
      screens: {
        'tablet': { 'max': '768px' }, 
        'cp' : {'max': '431px'},
        'cpM' : {'max' : '376px'},
        'myPhone' : {'max' : '361px'},
        'sCP' : {'max' : '320px'},
      } 
    },
  },
  plugins: [],
}