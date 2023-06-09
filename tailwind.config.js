/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'barlow': 'Barlow, sans-serif',
        'poppins': 'Poppins, sans-serif'
      },
      screens: {
        xs: '100px',
      }
    }
  },
  plugins: [],
}