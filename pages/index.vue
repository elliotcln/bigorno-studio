<template>
  <div>
    <div class="hero">
      <div class="container">
        <h1 class="intro">
          Votre alternative pour un site web accessible & éco-responsable
        </h1>
      </div>
    </div>

    <div class="mt-14">
      <div class="container">
        <div class="hp-services grid gap-14 laptop:grid-cols-3 desktop:gap-20">
          <div v-for="(service, index) in services" :key="index">
            <img
              class="h-14"
              :src="servicesIcons + '#' + service.icon"
              alt=""
            />
            <div class="hp-services__title mt-3 font-title text-2xl">
              {{ service.title }}
            </div>
            <p class="mt-4">{{ service.description }}</p>
          </div>
          <div class="absolute left-10 top-full laptop:left-20">
            <a
              href="mailto:elliot.cln@gmail.com?subject=Alty.&nbsp;-&nbsp;Prise&nbsp;de&nbsp;contact"
              class="button is-gradient -translate-y-1/2 transform"
              >Prendre contact avec moi</a
            >
          </div>
        </div>
      </div>
    </div>

    <section class="mt-20 laptop:mt-36">
      <div class="container">
        <div
          class="grid gap-14 laptop:grid-cols-12 laptop:px-20 desktop:gap-24"
        >
          <div class="laptop:col-span-6">
            <h2 class="text-4xl">Les services que je vous propose</h2>
            <p class="mt-10">
              Développeur front-end depuis quelques années, je mets mon
              <strong>expertise en conception web</strong> au service de votre
              projet. En veille perpetuelle, j’utilise la technologie la plus
              adaptée à vos besoins, le tout dans une démarche éco-responsable
              et accessible.
            </p>
            <p class="mt-4">
              Certifié
              <strong>“Concepteur de sites web accessibles”</strong> par
              l’organisme
              <a href="https://access42.net" target="_blank">Access42</a>, je
              conçois votre site web de façon à le rendre accessible à tous.
            </p>
          </div>
          <div class="laptop:col-span-6">
            <Accordion :index="1" :services="services" />
          </div>
        </div>
      </div>
    </section>

    <section class="mt-20 laptop:mt-36">
      <div class="container">
        <div class="laptop:px-20">
          <h2 class="text-4xl tablet:text-center">
            Les technologies que j'utilise
          </h2>
          <ul
            class="mx-auto mt-10 grid grid-cols-3 gap-4 tablet:max-w-4xl tablet:grid-cols-6"
          >
            <li class="flex flex-col items-center justify-end">
              <img class="h-8" :src="nuxt" alt="Nuxt" />
              <span class="mt-4 text-xs font-semibold text-primary-light"
                >Nuxt</span
              >
            </li>
            <li class="flex flex-col items-center justify-end">
              <img class="h-8" :src="js" alt="Javascript" />
              <span class="mt-4 text-xs font-semibold text-primary-light"
                >Javascript</span
              >
            </li>
            <li class="flex flex-col items-center justify-end">
              <img class="h-8" :src="wordpress" alt="Wordpress" />
              <span class="mt-4 text-xs font-semibold text-primary-light"
                >Wordpress</span
              >
            </li>
            <li class="flex flex-col items-center justify-end">
              <img class="h-8" :src="tailwind" alt="Tailwindcss" />
              <span class="mt-4 text-xs font-semibold text-primary-light"
                >Tailwindcss</span
              >
            </li>
            <li class="flex flex-col items-center justify-end">
              <img class="h-8" :src="figma" alt="Figma" />
              <span class="mt-4 text-xs font-semibold text-primary-light"
                >Figma</span
              >
            </li>
            <li class="flex flex-col items-center justify-end">
              <img class="h-8" :src="sketch" alt="Sketch" />
              <span class="mt-4 text-xs font-semibold text-primary-light"
                >Sketch</span
              >
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="mt-20 laptop:mt-36 laptop:pt-16">
      <div class="container">
        <div
          class="gap-14 laptop:grid laptop:grid-cols-12 laptop:items-start laptop:px-20 desktop:gap-24"
        >
          <div class="laptop:col-span-4">
            <h2 class="text-4xl">Nos clients & réalisations</h2>
            <p class="mt-10">
              Comme eux, faites nous confiance et rendez le
              <strong>web plus éthique</strong>.
            </p>
          </div>
          <div class="mt-8 w-full laptop:col-span-8 laptop:mt-0">
            <ClientsCarousel />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import servicesIcons from "@/assets/icons/services-icons.svg";
// techs icons
import nuxt from "@/assets/images/techs/nuxt-gradient.svg";
import js from "@/assets/images/techs/js-gradient.svg";
import wordpress from "@/assets/images/techs/wordpress-gradient.svg";
import tailwind from "@/assets/images/techs/tailwind-gradient.svg";
import figma from "@/assets/images/techs/figma-gradient.svg";
import sketch from "@/assets/images/techs/sketch-gradient.svg";

const services = [
  {
    icon: "code",
    title: "Développement web",
    description:
      "HTML5, CSS3 (Sass), Javascript, Wordpress, VueJS, Tailwindcss ... J’utilise les technologies adaptées à votre projet et donne vie à vos maquettes.",
    list: ["Site vitrine & dynamique", "Site e-commerce", "Landing page"],
  },
  {
    icon: "accessibility",
    title: "Accessibilité web",
    description:
      "En me basant sur le RGAA & la norme WCAG, je fais en sorte que votre site web soit accessible à tout type de public.",
    list: ["Audit (Flash & Complet)", "Mise en conformité RGAA", "Conseil"],
  },
  {
    icon: "ecoconception",
    title: "Éco-conception",
    description:
      "Dans une démarche éco-responsable, je m’assure que votre site web soit le moins énergivore possible en utilisant les bonnes pratiques de conception.",
    list: [
      "Optimisation de votre site",
      "Accompganement choix des technologies",
    ],
  },
];
</script>

<style lang="scss" scoped>
.hero {
  @apply mt-16;
  .intro {
    @apply text-4xl laptop:text-7xl desktop:max-w-[85vw] desktop:text-8xl;
    background: linear-gradient(-45deg, #919bff, #133a94);
    background-clip: text;
    color: transparent;
  }
}

.hp-services {
  @apply relative bg-primary px-10 py-16 text-white laptop:px-20 laptop:py-24;

  &::before {
    content: "";
    width: calc(50vw);
    @apply absolute left-1/2 top-0 -z-10 h-full bg-primary;
  }

  &__title {
    background: linear-gradient(
      -45deg,
      theme("colors.blue-green"),
      theme("colors.green")
    );
    background-clip: text;
    color: transparent;
  }
}
</style>
