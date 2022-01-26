<template>
  <div class="expandbar">
    <button
      :class="['expandbar-controls', { open: isOpen }]"
      :id="'expandbar-' + index"
      :aria-controls="'expandbar-' + index"
      :aria-expanded="isOpen"
      @click.prevent="isOpen = !isOpen"
    >
      <h3>{{ title }}</h3>
      <template v-if="isOpen">
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M18 12H6"
          />
        </svg>
      </template>
      <template v-else>
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </template>
    </button>
    <div
      :class="['expandbar-content', { open: isOpen }]"
      :aria-labelledby="'expandbar-' + index"
      :aria-hidden="!isOpen"
    >
      <p>{{ desc }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, toRefs } from "vue";

const props = defineProps({
  index: String,
  icon: String,
  title: String,
  desc: String || Object,
  isOpen: Boolean,
});
const { index, icon, name, desc } = toRefs(props);
const isOpen = ref(false);
</script>

<style lang="scss" scoped>
.expandbar {
  &:focus-within {
    @apply outline-dashed outline-2 outline-offset-4 outline-primary;
  }
}
.expandbar-controls {
  @apply flex w-full items-center justify-between space-x-4 bg-gray-light px-6
   py-4 font-title text-dark;

  &:hover,
  &:focus {
    @apply text-primary outline-none;
  }

  &.open {
    @apply bg-primary text-white;
  }
}
.expandbar-content {
  @apply hidden border-t border-primary-dark bg-primary p-7 text-white;

  &.open {
    @apply block;
  }
}
</style>
