<template>
   <div class="expandbar">
      <button
         :class="['expandbar-controls', { open: isOpen }]"
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
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
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
      <div :class="['expandbar-content', { open: isOpen }]">
         <p>{{ desc }}</p>
      </div>
   </div>
</template>

<script setup>
import { ref, toRefs } from 'vue';

const props = defineProps(
   {
      index: String,
      icon: String,
      title: String,
      desc: String || Object,
      isOpen: Boolean
   }
)
const { index, icon, name, desc } = toRefs(props)
const isOpen = ref(false)
</script>

<style lang="scss" scoped>
.expandbar {
   &:focus-within {
      @apply outline-2 outline-dashed outline-offset-4 outline-primary;
   }
}
.expandbar-controls {
   @apply w-full flex items-center justify-between space-x-4 px-6 py-4
   bg-gray-light text-dark font-title;

   &:hover,
   &:focus {
      @apply text-primary outline-none;
   }

   &.open {
      @apply bg-primary text-white;
   }
}
.expandbar-content {
   @apply bg-primary border-t border-primary-dark text-white p-7 hidden;

   &.open {
      @apply block;
   }
}
</style>