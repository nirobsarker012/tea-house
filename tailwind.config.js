/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      container:{
        center: true,
        padding : "20px",
      },
      fontFamily:{
        "man" : ["Manrope", "serif"],
      },
    },
  },
  plugins: [],
}