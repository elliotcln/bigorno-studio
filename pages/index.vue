<template>
  <div class="hero">
    <div class="container">
      <h1 class="intro">
        Développement web,
        <br />accessibilité numérique, <br />éco-conception
      </h1>
    </div>
  </div>

  <div class="mt-14">
    <div class="container">
      <div class="hp-services grid gap-14 laptop:grid-cols-3 desktop:gap-20">
        <div v-for="service in services" :key="service">
          <img class="h-14" :src="servicesIcons + '#' + service.icon" alt="" />
          <div class="mt-3 font-title text-2xl">{{ service.title }}</div>
          <p class="mt-4">{{ service.description }}</p>
        </div>
        <div class="absolute left-10 top-full laptop:left-20">
          <nuxt-link
            class="button is-dark -translate-y-1/2 transform"
            to="contact"
            >Demander un devis</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>

  <section class="mt-20 laptop:mt-36">
    <div class="container">
      <div class="grid gap-14 laptop:grid-cols-12 laptop:px-20 desktop:gap-24">
        <div class="laptop:col-span-7">
          <h2 class="text-4xl">Les services proposés</h2>
          <p class="mt-10">
            Développeur front-end depuis quelques années, je mets mon
            <strong>expertise en conception web</strong> au service de votre
            projet. En veille perpetuelle, j’utilise la technologie la plus
            adaptée à vos besoins, le tout dans une démarche éco-responsable et
            accessible.
          </p>
          <p class="mt-4">
            Certifié
            <strong>“Concepteur de sites web accessibles”</strong> par
            l’organisme
            <a href="https://access42.net" target="_blank">Access42</a>, je
            conçois votre site web de façon à le rendre accessible à tous.
          </p>
        </div>
        <div class="laptop:col-span-5">
          <Accordion :index="1" :services="services" />
        </div>
      </div>
    </div>
  </section>

  <section class="mt-20 laptop:mt-36">
    <div class="container">
      <div
        class="gap-14 laptop:grid laptop:grid-cols-12 laptop:items-start laptop:px-20 desktop:gap-24"
      >
        <div class="laptop:col-span-4">
          <h2 class="text-4xl">Nos clients</h2>
          <p class="mt-10">
            Comme eux, faites nous confiance et rendez le
            <strong>web plus éthique</strong>.
          </p>
        </div>
        <div role="list" class="mt-8 w-full laptop:col-span-8 laptop:mt-0">
          <ClientsCarousel />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import servicesIcons from "@/assets/icons/services-icons.svg";
const services = [
  {
    icon: "code",
    title: "Développement web",
    description:
      "HTML5, CSS3 (Sass), Javascript, Wordpress, VueJS, Tailwindcss ... J’utilise les technologies adaptées à votre projet et donne vie à vos maquettes.",
  },
  {
    icon: "accessibility",
    title: "Accessibilité web",
    description:
      "En me basant sur le RGAA & la norme WCAG, je fais en sorte que votre site web soit accessible à tout type de public.",
  },
  {
    icon: "ecoconception",
    title: "Éco-conception",
    description:
      "Dans une démarche éco-responsable, je m’assure que votre site web soit le moins énergivore possible en utilisant les bonnes pratiques de conception.",
  },
];
</script>

<style lang="scss" scoped>
.hero {
  @apply mt-16;
  .intro {
    @apply text-4xl laptop:text-7xl desktop:text-8xl;
  }
}

.hp-services {
  @apply relative bg-primary px-10 py-16 text-white laptop:px-20 laptop:py-24;

  &::before {
    content: "";
    width: calc(50vw);
    @apply absolute left-1/2 top-0 -z-10 h-full bg-primary;
  }
}
</style>
