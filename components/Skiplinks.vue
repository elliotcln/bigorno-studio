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

<script setup></script>

<style lang="scss" scoped>
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
