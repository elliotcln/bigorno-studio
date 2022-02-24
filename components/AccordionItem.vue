<template>
  <div class="accordion-item">
    <h3>
      <button
        :id="'accordion-button-' + index"
        :aria-controls="'accordion-' + index + '__content'"
        :aria-expanded="isOpen"
        :class="[{ 'is-open': isOpen }]"
        @click.prevent="toggleAccordionItem(index)"
      >
        <span>{{ title }}</span>
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
    </h3>
    <div
      :aria-labelledby="'accordion-button-' + index"
      :id="'accordion-' + index + '__content'"
      role="region"
      :class="['accordion-item__content', { 'is-open': isOpen }]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["toggleItem"]);
const props = defineProps({
  index: Number,
  title: String,
  isOpen: Boolean,
});

const toggleAccordionItem = (index) => {
  emit("toggleItem", index);
};
</script>

<style lang="scss" scoped>
.accordion-item {
  &:focus-within {
    @apply outline-dashed outline-offset-4 outline-primary;
  }
  h3 > button {
    @apply flex w-full items-center justify-between space-x-4 bg-gray-light px-6 py-4 font-title;
    &:hover,
    &:focus {
      @apply text-primary;
    }
    &:focus {
      @apply outline-none;
    }

    &.is-open {
      @apply text-white;
      background: linear-gradient(
        -45deg,
        theme("colors.primary.DEFAULT"),
        theme("colors.primary.dark")
      );

      > span {
        background: linear-gradient(
          -45deg,
          theme("colors.blue-green"),
          theme("colors.green")
        );
        background-clip: text;
        color: transparent;
      }
    }
  }

  &__content {
    @apply hidden bg-primary p-6 text-green;

    &.is-open {
      @apply block;
    }
  }
}
</style>
