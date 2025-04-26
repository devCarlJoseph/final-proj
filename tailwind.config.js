/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#fdfbfa',
        text: '#0a0808',
        primary: '#fe843b',
        secondary: '#eea67a',
        tertiary: '#ca7542',
        mainH: '#f8ece4',
        logo: '#52397b',
      }
    },
  },
  plugins: [],
}