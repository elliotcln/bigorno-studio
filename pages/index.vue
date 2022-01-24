<template>
   <div class="hero">
      <div class="container">
         <h1 class="intro">
            Développement web,
            <br />accessibilité numérique,
            <br />éco-conception
         </h1>
      </div>
   </div>

   <div class="mt-14">
      <div class="container">
         <div class="hp-services grid laptop:grid-cols-3 gap-14 desktop:gap-20">
            <div v-for="service in services" :key="service">
               <div class="text-2xl font-title">{{ service.title }}</div>
               <p class="mt-4">{{ service.description }}</p>
            </div>
            <div class="absolute left-10 laptop:left-20 top-full">
               <nuxt-link
                  class="button is-dark transform -translate-y-1/2"
                  to="contact"
               >Demander un devis</nuxt-link>
            </div>
         </div>
      </div>
   </div>

   <section class="mb-14 mt-32 laptop:mt-44">
      <div class="container">
         <div class="grid gap-14 desktop:gap-24 laptop:grid-cols-12 laptop:px-20">
            <div class="laptop:col-span-7">
               <h2 class="text-4xl">Les services proposés</h2>
               <p class="mt-10">
                  Développeur front-end depuis quelques années, je mets mon <strong>expertise en conception web</strong> au service de votre projet.
                  En veille perpetuelle, j’utilise la technologie la plus adaptée à vos besoins, le tout dans une démarche éco-responsable et accessible.
               </p>
               <p
                  class="mt-4"
               >Certifié <strong>“Concepteur de sites web accessibles”</strong> par l’organisme <a href="https://access42.net" target="_blank">Access42</a>, je conçois votre site web de façon à le rendre accessible à tous.</p>
            </div>
            <div role="list" class="laptop:col-span-5 grid content-start gap-4">
               <template v-for="(s, index) in services" :key="index">
                  <ExpandBar
                     role="listitem"
                     :index="'0' + index"
                     :title="s.title"
                     :desc="s.description"
                  />
               </template>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
const services = [
   {
      title: 'Développement web',
      description: 'HTML5, CSS3 (Sass), Javascript, Wordpress, VueJS, Tailwindcss ... J’utilise les technologies adaptées à votre projet et donne vie à vos maquettes.'
   },
   {
      title: 'Accessibilité web',
      description: 'En me basant sur le RGAA & la norme WCAG, je fais en sorte que votre site web soit accessible à tout type de public.'
   },
   {
      title: 'Éco-conception',
      description: 'Dans une démarche éco-responsable, je m’assure que votre site web soit le moins énergivore possible en utilisant les bonnes pratiques de conception.'
   }
]
</script>

<style lang="scss" scoped>
.hero {
   @apply mt-16;
   .intro {
      @apply text-4xl laptop:text-7xl desktop:text-8xl;
   }
}

.hp-services {
   @apply relative bg-primary text-white px-10 py-16 laptop:px-20 laptop:py-24;

   &::before {
      content: "";
      width: calc(50vw);
      @apply bg-primary h-full absolute left-1/2 top-0 -z-10;
   }
}
</style>