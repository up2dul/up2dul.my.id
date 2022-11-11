/* eslint @typescript-eslint/no-var-requires: "off" */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontSize: {
        'h1': '40px',
        'h2': '24px',
        'h3': '18px'
      }
    },
    fontFamily: { inter: ['Inter', 'sans-serif'] },
    colors: {
      black: '#161616',
      white: '#F2F2F2',
      blue: '#6358EE',
      purple: '#965DE9',
      transparent: colors.transparent
    }
  },
  plugins: []
};
