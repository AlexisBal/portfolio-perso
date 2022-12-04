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
              { hid: 'description', name: 'description', content: 'Alexis Balayre - Full Stack Web 3 Developer' },
              { name: 'format-detection', content: 'telephone=no' }
            ],
            link: [
              { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
              { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
              { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
              { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
              { rel: 'manifest', href: '/site.webmanifest' }
            ]
        },
    },

    modules: [
      '@nuxtjs/sitemap'
    ],

    css: ['~/assets/css/main.css'],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },


})