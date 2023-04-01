/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oliver:["oliver","sans-serif"]
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}

