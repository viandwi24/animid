module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: '#F9FAFB',
        black: '#1F2937',
        primary: '#037bef',
        blue: {
          '50': '#f2f8fe',
          '100': '#e6f2fd',
          '200': '#c0defb',
          '300': '#9acaf9',
          '400': '#4fa3f4',
          '500': '#037bef',
          '600': '#036fd7',
          '700': '#025cb3',
          '800': '#024a8f',
          '900': '#013c75'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
