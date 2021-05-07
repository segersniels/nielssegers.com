module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gradient: {
          from: 'rgb(236, 63, 251)',
          to: 'rgba(252, 229, 70, 1)',
        },
        blackLight: '#1a1a1a',
        dirtyWhite: 'rgba(255,255,255,0.5)',
        white: '#fff',
        black: '#000',
        lightGrey: '#efefef',
        darkGrey: '#333333',
        darkerGrey: '#3a3a3a',
        dividerColor: 'rgba(255,255,255,0.15)',
        red: '#f0162f',
        green: '#00b061',
        yellow: '#f5ee9e',
        orange: '#f49e4c',
        blue: '#2d728f',
        pink: '#ff6464',
        darkGreen: '#4a7c59',
        lightBrown: '#d5896f',
        codeGrey: '#f0f0f0',
        background: '#e3d26d',
        yellowishWhite: '#F1E9BA',
        purple: '#9242e9',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
