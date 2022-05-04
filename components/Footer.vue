<template>
  <footer
    role="contentinfo"
    class="footer cursor-white"
    :class="[{ 'is-home': $route.name === 'index' }]"
  >
    <div class="container">
      <div class="grid content-end gap-8 laptop:grid-flow-col">
        <div class="inline-flex items-start laptop:order-3">
          <a
            href="mailto:elliot.cln@gmail.com?subject=Alty.&nbsp;-&nbsp;Prise&nbsp;de&nbsp;contact"
            class="button is-gradient laptop:ml-auto"
            >Prendre contact avec moi</a
          >
        </div>
        <!-- <nav class="laptop:order-2">
          <ul class="columns-2 gap-8">
            <li>
              <nuxt-link :to="{ name: 'offre-landing' }"
                >Offre landing</nuxt-link
              >
            </li>
          </ul>
        </nav> -->
        <div class="laptop:order-1 laptop:max-w-xs">
          <div class="brand">Alty<span class="text-green">.</span></div>
          <p class="text-sm opacity-70">
            Conception de sites web accessibles & éco-responsables
          </p>
          <address class="text-xs not-italic opacity-50">
            Saint-Malo, Dinard, Saint-Briac-sur-Mer, Dinan
          </address>
        </div>
      </div>
      <p class="mt-8 text-xs laptop:mt-14">
        <span class="block">N° Siret: 82348929900011</span>
        &copy; 2022 - Tous droits réservés - Développé avec Nuxt
      </p>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  @apply bg-dark pb-6 pt-20 text-white;

  &.is-home {
    @apply -mt-28 pt-[12rem] laptop:pt-[20rem];
  }

  a,
  button,
  .button {
    &:focus {
      @apply outline-white;
    }
  }
}
</style>
