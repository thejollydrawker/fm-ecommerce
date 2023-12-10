/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          400: 'hsl(26, 100%, 55%)',
          100: 'hsl(25, 100%, 94%)'
        },
        black: {
          900: 'hsl(0, 0%, 0%)'
        },
        slate: {
          200: 'hsl(223, 64%, 98%)'
        }
      },
      fontWeight: {
        normal: 400,
        bold: 700
      },
      fontSize: {
        sm: '16px'
      },
      fontFamily: {
        display: ['"Kumbh Sans"', 'sans-serif']
      }
    },
    
  },
  plugins: [],
}

