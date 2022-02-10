<template>
  <div class="clients-carousel overflow-x-hidden">
    <div class="clients-carousel__container">
      <ClientCard
        name="MAP - Bureau d'architecture"
        date="2021"
        :thumbnail="coverMAP"
        tags="Développement Wordpress, accessibilité"
        url="https://bureaumap.archi"
      />
      <ClientCard
        name="ASD - Plombier & Electricien"
        date="2021"
        :thumbnail="coverASD"
        tags="Webdesign, développement Wordpress, optimisation SEO"
        url="https://asd-electricite-plomberie.fr"
      />
      <ClientCard
        name="Mademoiselle Canelle - Artisan fleuriste"
        date="2021"
        :thumbnail="coverMC"
        tags="Webdesign, développement Wordpress, e-commerce, optimisation SEO"
        url="https://mademoisellecanelle.fr"
      />
    </div>
  </div>
</template>

<script setup>
import coverMAP from "@/assets/images/cover-MAP.jpg";
import coverASD from "@/assets/images/cover-ASD.jpg";
import coverMC from "@/assets/images/cover-mademoisellecanelle.jpg";
</script>

<style lang="scss" scoped>
.clients-carousel {
  touch-action: pan-x;
  width: calc(100% + 1.5rem);
  @screen laptop {
    min-width: calc(100% + 8rem);
  }

  &__container {
    @apply flex gap-4 overflow-auto laptop:gap-8;
    scroll-snap-type: x mandatory;
  }
}
</style>
