/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'didact': ['didact ', 'sans-serif'], 
        'Oswald' : ['oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

