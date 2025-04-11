/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 🔥 ativa o modo escuro via classe
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mochiy: ['"Mochiy Pop One"', 'cursive'],
      },
    },
  },
  plugins: [],
}
