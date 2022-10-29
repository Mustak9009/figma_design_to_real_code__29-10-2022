/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', "sans-serif"],
        Inter:['Inter', "sans-serif"],
        Oswald:['Oswald', "sans-serif"]
       }
    },
  },
  plugins: [],
}