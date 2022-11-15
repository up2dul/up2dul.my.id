/* eslint @typescript-eslint/no-var-requires: "off" */
/** @type {import('tailwindcss').Config} */
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
    fontFamily: { mona: ['Mona Sans', 'sans-serif'] },
    colors: {
      dark: '#161616',
      light: '#F2F2F2',
      primary: '#007FFE',
      secondary: '#3099FE',
      tertiary: '#60B2FE',
      gray: '#1F2937',
      cloud: '#D4D4D4',
      transparent: 'transparent'
    }
  },
  plugins: []
};
