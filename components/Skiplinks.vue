<template>
   <nav class="container" role="navigation" aria-label="Liens d'évitements">
      <ul class="skiplinks">
         <li>
            <nuxt-link to="#main">Contenu</nuxt-link>
         </li>
         <li>
            <span>•</span>
         </li>
         <li>
            <nuxt-link to="#main">Plan du site</nuxt-link>
         </li>
         <li>
            <span>•</span>
         </li>
         <li>
            <button>Accessibilité</button>
         </li>
      </ul>
   </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.skiplinks {
   @apply flex space-x-2 items-center py-4
   text-[0.75rem] font-title;

   a,
   button,
   span {
      @apply opacity-50 transition duration-200;
   }

   a:hover,
   a:focus,
   button:hover,
   button:focus {
      @apply text-primary opacity-100 no-underline;
   }

   span {
      font-size: 1.125rem;
   }
}
</style>