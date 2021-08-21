module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
    '0': '0',
    '1/4': '25%',
    '1/2': '50%',
    '3/4': '75%',
    'full': '100%',
   },
   flex: {
    '1': '1 1 0%',
    auto: '1 1 auto',

   initial: '0 1 auto',

   inherit: 'inherit',
    none: 'none',

   '2': '0 0 50%',},

   fontFamily: {

    'st': ['Oxygen', 'sans-serif'],
    'rt' : ['Roboto', 'sans-serif']

  }, rotate: {
     '0': '0',
     '45': '45deg',
     '90': '90deg',

    '135': '135deg',
     '180': '180deg',

    '270': '270deg',
   },
   margin: {
    'nf': '50%',
   }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
