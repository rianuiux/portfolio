/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center:true,
      padding: '16px',

    },
    extend: {
      colors:{
        primary:'#4338ca',
        dark:'#0f172a',
        blackfull:'#000000',
      },
      screens:{
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

