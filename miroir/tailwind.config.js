/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'light_blue': '#83EEFF',
        'nord_black': '#2E3440',
      },
      fontFamily: {
        'archivo': ['Archivo Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

