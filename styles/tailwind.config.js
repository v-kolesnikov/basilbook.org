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
      fontFamily: {
        sans: '"helvetica neue", helvetica, arial, geneva, sans-serif',
        serif: 'cardo, georgia, serif',
      },
      fontSize: {
        'tiny': '0.65rem',
      }
    }
  }
}
