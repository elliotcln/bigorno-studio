import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({

   meta: {
      htmlAttrs: {
         lang: 'fr'
      },
      title: 'bigorno - conception de sites web accessibles & éco-responsables'
   },
   css: [
      '@/assets/scss/app.scss'
   ],
   build: {
      postcss: {
         postcssOptions: {
            plugins: {
               tailwindcss: {},
               autoprefixer: {},
            },
         },
      },
   },
})
