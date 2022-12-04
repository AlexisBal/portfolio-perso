export default defineNuxtConfig({
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            title: 'Alexis Balayre',
            htmlAttrs: {
              lang: 'en'
            },
            meta: [
              { charset: 'utf-8' },
              { name: 'viewport', content: 'width=device-width, initial-scale=1 viewport-fit=cover' },
              { hid: 'description', name: 'description', content: 'Full Stack Web3 Developer' },
              { name: 'format-detection', content: 'telephone=no' }
            ],
            link: [
              { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
        },
    },

    css: ['~/assets/css/main.css'],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },


})