const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: false,
  mode: 'jit',
  purge: [
    'content/**/*.html',
    'layouts/**/*.html',
  ],
  theme: {
    extend: {
      borderWidth: {
        '10': '10px',
      },
      fontFamily: {
        sans: '"helvetica neue", helvetica, arial, geneva, sans-serif',
        serif: 'cardo, georgia, serif',
      },
      fontSize: {
        'tiny': '0.65rem',
      },
      listStyleType: {
        lalpha: 'lower-alpha',
      },
      screens: {
        'print': {'raw': 'print'},
      }
    }
  }
}
