<template>
   <footer role="contentinfo" class="footer">
      <div class="container">
         <div class="grid gap-8 laptop:grid-flow-col content-end">
            <div class="laptop:order-3 inline-flex items-start">
               <nuxt-link to="contact" class="button is-primary laptop:ml-auto">Demander un devis</nuxt-link>
            </div>
            <nav class="laptop:order-2">
               <ul class="columns-2 gap-8">
                  <li>
                     <nuxt-link to="services">Les services</nuxt-link>
                  </li>
                  <li>
                     <nuxt-link to="clients">Les clients & projets</nuxt-link>
                  </li>
                  <li>
                     <nuxt-link to="serives">Nous contacter</nuxt-link>
                  </li>
                  <li>
                     <nuxt-link to="serives">Accessibilité</nuxt-link>
                  </li>
                  <li>
                     <nuxt-link to="serives">Plan du site</nuxt-link>
                  </li>
                  <li>
                     <nuxt-link to="serives">Mentions légales</nuxt-link>
                  </li>
               </ul>
            </nav>
            <div class="laptop:max-w-xs laptop:order-1">
               <div class="brand">bigorno</div>
               <p class="opacity-70 text-sm">Conception de sites web accessibles & éco-responsables</p>
            </div>
         </div>
         <p
            class="text-xs mt-8 laptop:mt-14"
         >&copy; 2022 - Tous droits réservés - Développé avec Nuxt</p>
      </div>
   </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer {
   @apply pt-20 pb-6 bg-dark text-white;

   a, button, .button {
      &:focus {
         @apply outline-white;
      }
   }
}
</style>
