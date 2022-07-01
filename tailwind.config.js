const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
    '.src/**/*.md',
    '.src/**/*.mdx',
    '.src/**/*.json'
  ],

  corePlugins: {
    container: false, // Disable default .container component & create custom one
  },

  theme: {
    fontFamily: {
      'open-sans': ['"Open Sans"', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
      'montserrat-alternates': ['"Montserrat Alternates"', 'sans-serif']
    },

    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },

    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },

    extend: {

      height: {
        '36': '9rem'
      },

      width: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '108': '27rem',
        '120': '30rem',
        '138': '33rem',
        '150': '36rem'
      },

      inset: {
        '1/2': '50%',
      },

      colors: {
        white: '#FFFFFF',
        black: '#000000',
        raisin: '#222222',
        grey: '#F1F1F1',
        gray: {
          '100': '#DEDEDE',
          '500': '#363D3E',
          '700': '#252A2B'
        },
        red: {
          '500': '#ED5154',
          '700': '#D44649'
        },
        orange: {
          '500': '#f04e14',
          '700': '#ce3c08'
        },
        blue: {
          '500': '#457186',
          '700': '#043959'
        }
      },

      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',

        '28': '7rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '100': '25rem',
        '104': '26rem',
        '108': '27rem',
        '120': '30rem',
        '138': '33rem',
        '150': '36rem',
        '162': '39rem',
        '174': '42rem'
      },
    }
  },
  variants: {
    borderWidth: ['responsive', 'first', 'last', 'hover', 'focus'],
    padding: ['responsive', 'first', 'last'],
    divideWidth: ['responsive', 'first', 'last'],
  },

  plugins: [
    plugin(function({ addComponents }) {

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