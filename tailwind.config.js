/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          400: 'hsl(26, 100%, 55%)'
        }
    }},
    
  },
  plugins: [],
}

