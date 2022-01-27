<template>
  <div
    id="accordion-services"
    class="grid content-start gap-4"
    @keydown="updateIndex"
  >
    <template v-for="(s, index) in services" :key="index">
      <AccordionItem
        @toggle-item="toggleAccordionItem(index)"
        :index="index"
        :title="s.title"
        :isOpen="index === expandedItemIndex ? true : false"
      >
        {{ s.description }}
      </AccordionItem>
    </template>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    services: Object,
  },
  data() {
    return {
      accordionItem: null,
      focusOnIndex: 0,
    };
  },
  setup() {
    const expandedItemIndex = ref(0);
    return {
      expandedItemIndex,
    };
  },
  mounted() {
    this.accordionItems = document.querySelectorAll(".accordion-item");
    console.log("accordionItems", this.accordionItems);
  },
  methods: {
    toggleAccordionItem(item) {
      if (this.expandedItemIndex === item) {
        this.expandedItemIndex = null;
      } else {
        this.expandedItemIndex = item;
      }
      this.focusOnIndex = item;
    },

    updateIndex(e) {
      if (e.key === "ArrowDown" || e.keyCode === 40) {
        if (this.focusOnIndex === this.services.length - 1) {
          this.focusOnIndex = 0;
        } else {
          this.focusOnIndex++;
        }
      } else if (e.key === "ArrowUp" || e.keyCode === 38) {
        if (this.focusOnIndex === 0) {
          this.focusOnIndex = this.services.length - 1;
        } else {
          this.focusOnIndex--;
        }
      }
      document.getElementById("accordion-button-" + this.focusOnIndex).focus();
    },
  },
};
</script>

<style lang="scss" scoped></style>
