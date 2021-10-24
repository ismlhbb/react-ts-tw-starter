/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ['Nunito', ...fontFamily.sans],
      },
      colors: {
        primary: '#ee424d',
        'on-primary': '#FFFFFF', // color on top of element with primary color
        secondary: '#FACA00',
        'on-secondary': '#000000', // color on top of element with secondary color
        dark: '#222222',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
