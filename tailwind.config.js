const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      f4f7f9: '#f4f7f9',
      secondary: '#ffed4a',
      danger: '#e3342f'
    }),
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif']
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px'
    },
    extend: {
      colors: {
        cyan: '#9cdbff'
      },
      spacing: {
        '96': '24rem',
        '128': '32rem'
      }
    }
  },
  variants: {
    appearance: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    fill: [],
    extend: {}
  },
  plugins: [
    require('tailwindcss-transforms'),
    require('tailwindcss-transitions'),
    require('tailwindcss-border-gradients'),
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      // Add your custom styles here
    })
  ]
}
