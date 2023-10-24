/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'light_blue': '#83EEFF',
        'nord_black': '#2E3440',
      },
    },
  },
  plugins: [],
}

