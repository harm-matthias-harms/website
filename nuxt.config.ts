// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ['@nuxt/ui', '@nuxtjs/color-mode', "@nuxt/image"],
  css: ['~/assets/css/main.css'],
  nitro: {
    prerender: {
      routes: [
        '/_ipx/_/matthiasharms-dark.jpg',
        '/_ipx/_/matthiasharms.jpg',
      ]
    }
  },
  compatibilityDate: '2024-08-25'
})
