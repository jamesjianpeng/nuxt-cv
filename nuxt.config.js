const pkg = require('./package')

module.exports = {
  mode: 'universal',
  server: {
      port: 3000,
      host: 'localhost'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    "~/assets/style/functions.scss",
    "~/assets/style/cursor.css",
    "~/assets/style/normalize.scss"
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~/plugins/axios.js"
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
