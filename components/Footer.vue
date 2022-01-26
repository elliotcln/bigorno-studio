<template>
  <footer role="contentinfo" class="footer cursor-white">
    <div class="container">
      <div class="grid content-end gap-8 laptop:grid-flow-col">
        <div class="inline-flex items-start laptop:order-3">
          <nuxt-link to="contact" class="button is-primary laptop:ml-auto"
            >Demander un devis</nuxt-link
          >
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
        <div class="laptop:order-1 laptop:max-w-xs">
          <div class="brand">bigorno</div>
          <p class="text-sm opacity-70">
            Conception de sites web accessibles & éco-responsables
          </p>
        </div>
      </div>
      <p class="mt-8 text-xs laptop:mt-14">
        &copy; 2022 - Tous droits réservés - Développé avec Nuxt
      </p>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  @apply -mt-24 bg-dark pt-[12rem] pb-6 text-white laptop:pt-[20rem];

  a,
  button,
  .button {
    &:focus {
      @apply outline-white;
    }
  }
}
</style>
