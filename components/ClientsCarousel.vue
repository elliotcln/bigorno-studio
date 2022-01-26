<template>
  <div class="clients-carousel overflow-x-hidden">
    <div class="clients-carousel__container">
      <ClientCard
        name="ASD - Plombier & Electricien"
        date="2021"
        thumbnail="https://picsum.photos/300/200"
      />
      <ClientCard
        name="Mademoiselle Canelle - Artisan fleuriste"
        date="2021"
        thumbnail="https://picsum.photos/300/200"
      />
      <ClientCard
        name="ASD - Plombier & Electricien"
        date="2021"
        thumbnail="https://picsum.photos/300/200"
      />
      <ClientCard
        name="ASD - Plombier & Electricien"
        date="2021"
        thumbnail="https://picsum.photos/300/200"
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.clients-carousel {
  touch-action: pan-x;
  min-width: calc(100% + 2rem);
  @screen laptop {
    min-width: calc(100% + 8rem);
  }

  &__container {
    @apply flex gap-8 overflow-auto;
    scroll-snap-type: x mandatory;
  }
}
</style>
