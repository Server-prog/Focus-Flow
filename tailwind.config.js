/** @type {import('tailwindcss').Config} */
export default {
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