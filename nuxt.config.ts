// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['@nuxt/ui', '@nuxtjs/color-mode', "@nuxt/image"],
    ui: {
        icons: ['heroicons', 'simple-icons']
    },
    nitro: {
        firebase: {
            gen: 2
        }
    }
})