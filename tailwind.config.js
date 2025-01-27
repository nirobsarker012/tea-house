/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      container:{
        center: true,
        padding : "30px",
      },
      fontFamily:{
        "man" : ["Manrope", "serif"],
      },
    },
  },
  plugins: [],
}