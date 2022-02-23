import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    htmlAttrs: {
      lang: "fr",
    },
    title: "Bigorno Studio - Création de sites web accessibles & éco-responsables, 35800",
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Bigorno Studio vous propose la création de sites web sur la Côte d\'Emeraude (Saint-Malo, Dinard, Saint-Briac sur Mer), 35800'
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "/accessconfig/css/accessconfig.min.css",
      },
    ],
    script: [
      {
        src: "/accessconfig/js/src/accessconfig.js",
        body: true,
      },
    ],
  },
  css: ["@/assets/scss/app.scss"],
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
});
