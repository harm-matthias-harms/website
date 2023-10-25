// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['@nuxt/ui', '@nuxtjs/color-mode', "@nuxt/image"],
    ui: {
        icons: ['heroicons', 'simple-icons']
    },
    app: {
        head: {
            title: 'About Harm Matthias Harms',
            meta: [
                {
                    name: 'description',
                    content: 'Explore my work and experience. Learn more about my journey in web development.'
                },
            ],
            htmlAttrs: {
                lang: 'en'
            }
        }
    },
    nitro: {
        firebase: {
            gen: 2
        }
    }
})