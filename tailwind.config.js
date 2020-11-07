const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    colors: {
      purple: '#B001FF',
    },
    extend: {
      fontFamily: {
        serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};
