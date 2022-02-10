<template>
  <nav class="container" role="navigation" aria-label="Liens d'évitements">
    <ul class="skiplinks" role="list">
      <li>
        <a href="#main">Contenu</a>
      </li>
      <li>
        <span>•</span>
      </li>
      <!-- <li>
        <nuxt-link to="#main">Plan du site</nuxt-link>
      </li>
      <li>
        <span>•</span>
      </li> -->
      <li>
        <!-- <button>Accessibilité</button> -->
        <div
          id="accessconfig"
          data-accessconfig-buttonname="Accessibilité"
          data-accessconfig-params='{ "Prefix" : "a42-ac", "Justification": false, "ImageReplacement": false}'
        ></div>
      </li>
    </ul>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
#accessconfig {
  @apply opacity-50;
  &:hover,
  &:focus-within {
    @apply text-primary opacity-100;
  }
}

.skiplinks {
  @apply flex items-center justify-start space-x-2 py-4
   font-title text-[0.75rem];

  a,
  button,
  span {
    @apply opacity-50 transition duration-200;
  }

  a:hover,
  a:focus,
  button:hover,
  button:focus {
    @apply text-primary no-underline opacity-100;
  }

  span {
    font-size: 1.125rem;
  }
}
</style>
