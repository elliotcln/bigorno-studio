<template>
   <nav role="navigation" aria-label="Navigation principale">
      <button
         @click.prevent="toggleOpenState()"
         :aria-expanded="openState"
         aria-controls="#"
         class="controls-button"
      >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
         >
            <path
               stroke-linecap="round"
               stroke-linejoin="round"
               stroke-width="2"
               d="M4 6h16M4 12h16m-7 6h7"
            />
         </svg>
         <span class="sr-only">Ouvrir le menu</span>
      </button>

      <div :class="['nav-wrapper', { open: openState }]" :aria-hidden="!openState" tabindex="-1">
         <div class="grid gap-8 w-full max-w-xl m-auto">
            <ol class="grid gap-12">
               <li>
                  <nuxt-link to="services">nos services</nuxt-link>
               </li>
               <li>
                  <nuxt-link to="clients">nos clients</nuxt-link>
               </li>
               <li>
                  <nuxt-link to="contact">nous contacter</nuxt-link>
               </li>
            </ol>
            <hr class="w-40 border-b border-primary" />
            <div class="grid justify-start gap-2">
               <a href="#" class="inline-flex items-center space-x-2">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     class="h-6 w-6"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                     />
                  </svg>
                  <span>kenavo@bigorno.studio</span>
               </a>
               <a href="#" class="inline-flex items-center space-x-2">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     class="h-6 w-6"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                     />
                  </svg>
                  <span>+33786816832</span>
               </a>
            </div>
         </div>
      </div>
   </nav>
</template>

<script setup>
import { ref } from 'vue';

const openState = ref(false);
const toggleOpenState = function () {
   openState.value = !openState.value;
   console.log(openState.value)
}
</script>

<style lang="scss" scoped>
.controls-button {
   @apply w-14 h-14 flex items-center justify-center
   bg-gray-light rounded-full z-50 relative;

   &:hover {
      @apply bg-primary text-white;
   }
   &:focus {
      @apply text-primary;
   }
}
.nav-wrapper {
   @apply fixed inset-0 flex items-center px-8 bg-dark text-white transform transition-transform hidden;

   a {
      @apply transition-colors duration-200 hover:text-primary;
   }

   ol {
      counter-reset: counter 0;

      li {
         counter-increment: counter 1;
         @apply font-title text-[6.25vw] laptop:text-[4.75vw] desktop:text-[3.125vw];
         // font-size: 3.125vw;

         &::before {
            content: "0" counter(counter);
            @apply opacity-30 text-lg mr-2;
         }
      }
   }
}

@keyframes toggle-menu {
   from {
      transform: translateX(100%);
   }
   to {
      transform: translateX(0);
   }
}
</style>