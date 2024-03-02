/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: 'hsl(25, 97%, 53%)',
        },
        neutral: {
          'light-grey': 'hsl(217, 12%, 63%)',
          'medium-grey': 'hsl(216, 12%, 54%)',
          'dark-blue': 'hsl(213, 19%, 18%)',
          'medium-blue': 'hsl(213, 19%, 22%)',
          'very-dark-blue': 'hsl(216, 12%, 8%)',
        },
      },
      fontFamily: {
        'overpass': '"Overpass", sans-serif;'
      }
    },
  },
  plugins: [],
}

