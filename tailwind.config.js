/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'content/**/*.md',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
    options: {
      whitelist: [],
    },
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        piratesbay: ['PiratesBay', 'serif'],
      },
      colors: {
        'botc-white': 'rgb(238,238,238)',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
