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
        primary: '#3b82f6'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
