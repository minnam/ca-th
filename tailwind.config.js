/** @type {import('tailwindcss').Config} */
const { COLORS } = require("./src/common/colors")

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...COLORS
      }
    },
    fontFamily: {
      "sans": ["Inter", "sans-serif"],
      "display": ["Space Grotesk", "sans-serif"]
    }
  },
  plugins: [],
}