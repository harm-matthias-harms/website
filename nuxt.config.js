const pkg = require("./package");

module.exports = {
  target: "static",

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: "en"
    },
    title: "Harm Matthias Harms",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  buildModules: ["@nuxtjs/vuetify"],
  vuetify: {
    defaultAssets: {
      icons: "fa",
      font: {
        family: "Lato"
      }
    },
    loader: {
      progressiveImages: true
    }
  }
};
