import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    htmlAttrs: {
      lang: "fr",
    },
    title: "bigorno - sites web accessibles & éco-responsables, 35800",
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
