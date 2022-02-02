module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './helpers/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        myFont: ['Inter'],
      },
      colors: {
        vert: '#00FF00',
        white: '#ffffff',
        bleu: '#32A3FF',
        noir: '#111827',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
