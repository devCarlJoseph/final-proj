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
        primary: '#b08151',
        secondary: '#ddbd9d',
        tertiary: '#d9a36d',
        mainH: '#f8ece4',
        logo: '#52397b',
      }
    },
  },
  plugins: [],
}