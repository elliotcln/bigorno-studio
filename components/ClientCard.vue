<template>
  <a
    :href="url"
    target="_blank"
    class="client-card group"
    :aria-label="name + ' - nouvelle fenêtre'"
  >
    <div class="client-card__content">
      <h3 class="order-2 w-full truncate">{{ name }}</h3>
      <p class="order-1 text-xs font-bold text-gray-600">
        {{ date }}
      </p>
      <p class="order-3 mt-2 text-xs text-gray-500">{{ tags }}</p>
    </div>
    <div class="client-card__thumbnail">
      <img :src="thumbnail" :alt="name" />
    </div>
  </a>
</template>

<script setup>
const props = defineProps({
  name: String,
  date: String,
  thumbnail: String,
  tags: String,
  url: String,
});
</script>

<style lang="scss" scoped>
.client-card {
  @apply relative flex w-[80vw] shrink-0 flex-col no-underline hover:no-underline tablet:w-[355px] #{!important};
  scroll-snap-align: start;

  &__thumbnail {
    @apply overflow-hidden;

    img {
      @apply w-full origin-center object-cover duration-1000 group-hover:scale-110;
    }
  }

  &__content {
    @apply order-2 flex h-28 flex-col justify-start bg-white p-4 text-dark;
  }
}
</style>
