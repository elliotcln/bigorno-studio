<template>
  <nuxt-link to="/" class="client-card group" :aria-label="name">
    <div class="client-card__content">
      <h3 class="w-full truncate">{{ name }}</h3>
      <p class="text-sm text-primary">{{ date }}</p>
    </div>
    <div class="client-card__thumbnail">
      <img :src="thumbnail" alt="" />
    </div>
  </nuxt-link>
</template>

<script setup>
const props = defineProps({
  name: String,
  date: String,
  thumbnail: String,
});
</script>

<style lang="scss" scoped>
.client-card {
  @apply flex w-[355px] shrink-0 flex-col no-underline hover:no-underline #{!important};
  scroll-snap-align: start;

  &__thumbnail {
    @apply overflow-hidden;

    img {
      @apply w-full origin-center object-cover duration-1000 group-hover:scale-110;
    }
  }

  &__content {
    @apply order-2 flex h-24 flex-col justify-center bg-white p-4 text-dark;
  }
}
</style>
