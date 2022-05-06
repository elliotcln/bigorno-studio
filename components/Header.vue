<template>
  <header role="banner">
    <div class="container">
      <div class="flex items-center justify-between">
        <div>
          <nuxt-link class="brand" to="/"
            >Alty<span class="text-green">.</span></nuxt-link
          >
        </div>
        <ul class="font-title">
          <li>
            <nuxt-link
              :to="{ name: 'offre-landing' }"
              >Offre landing</nuxt-link
            >
          </li>
        </ul>
        <!-- <MainNavigation /> -->
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
