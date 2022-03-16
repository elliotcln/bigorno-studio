import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    htmlAttrs: {
      lang: "fr",
    },
    title:
      "Alty. - Votre alternative pour un site web accessible & éco-responsable",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Alty. vous propose la création de sites web accessibles et éco-responsables sur la Côte d'Emeraude (Saint-Malo, Dinard, Saint-Briac sur Mer), 35800",
      },
    ],
    link: [{ rel: "icon", type: "image/png", href: "/images/icon.png" }],
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
