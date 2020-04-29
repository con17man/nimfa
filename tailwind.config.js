const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    corePlugins: {
      container: false,
    },

    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        raisin: '#222222',
        grey: '#F1F1F1',
        red: '#DC5C5A',
        blue: '#040F3C',
      }
    }
  },
  variants: {},

  plugins: [
    plugin(function ({ addComponents }) {
      const container = {
        '.container': {
          maxWidth: '100%',
          '@screen lg': {
            maxWidth: '980px',
          }
        }
      };
      addComponents(container);
    })
  ]
}