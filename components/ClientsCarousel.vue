<template>
  <div class="clients-carousel overflow-x-hidden">
    <div class="clients-carousel__container">
      <ClientCard
        name="Cresh - Paiement fractionné"
        date="2021"
        :thumbnail="coverCresh"
        tags="Refonte graphique, développement Gatbsy, optimisation des animations"
        url="https://cresh.eu"
      />
      <ClientCard
        name="Paka Festival"
        date="2021"
        :thumbnail="coverPAKA"
        tags="Webdesign, développement Wordpress, accessibilité"
        url="https://pakafestival.fr"
      />
      <ClientCard
        name="Kleer - Corporate Intelligence"
        date="2021"
        :thumbnail="coverKLEER"
        tags="Webdesign, développement Wordpress, accessibilité, optimistation SEO"
        url="https://kleer-intelligence.com"
      />
      <ClientCard
        name="MAP - Bureau d'architecture"
        date="2021"
        :thumbnail="coverMAP"
        tags="Développement Wordpress, accessibilité"
        url="https://bureaumap.archi"
      />
      <ClientCard
        name="Mademoiselle Canelle - Artisan fleuriste"
        date="2021"
        :thumbnail="coverMC"
        tags="Webdesign, développement Wordpress, e-commerce, optimisation SEO"
        url="https://mademoisellecanelle.fr"
      />
      <ClientCard
        name="ASD - Plombier & Electricien"
        date="2021"
        :thumbnail="coverASD"
        tags="Webdesign, développement Wordpress, optimisation SEO"
        url="https://asd-electricite-plomberie.fr"
      />
    </div>
  </div>
</template>

<script setup>
import coverMAP from "@/assets/images/cover-MAP.jpg";
import coverASD from "@/assets/images/cover-ASD.jpg";
import coverMC from "@/assets/images/cover-mademoisellecanelle.jpg";
import coverCresh from "@/assets/images/cover-cresh.jpg";
import coverKLEER from "@/assets/images/cover-kleer.jpg";
import coverPAKA from "@/assets/images/cover-paka.jpg";
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
