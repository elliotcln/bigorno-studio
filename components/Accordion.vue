<template>
  <div
    id="accordion-services"
    class="grid content-start gap-4"
    @keydown.up="decrementIndex"
    @keydown.down="incrementIndex"
  >
    <template v-for="(s, index) in services" :key="index">
      <AccordionItem
        @toggle-item="toggleAccordionItem(index)"
        :index="index"
        :title="s.title"
        :isOpen="index === expandedItemIndex ? true : false"
      >
        <ul class="list ml-8 list-disc">
          <li v-for="(l, index) in s.list" :key="index">{{ l }}</li>
        </ul>
      </AccordionItem>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    services: Object,
  },
  data() {
    return {
      accordionItems: null,
      focusOnIndex: 0,
      expandedItemIndex: 0,
    };
  },
  mounted() {
    this.accordionItems = document.querySelectorAll(".accordion-item");
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

    incrementIndex() {
      if (this.focusOnIndex === this.services.length - 1) {
        this.focusOnIndex = 0;
      } else {
        this.focusOnIndex++;
      }
      document.getElementById("accordion-button-" + this.focusOnIndex).focus();
    },
    decrementIndex() {
      if (this.focusOnIndex === 0) {
        this.focusOnIndex = this.services.length - 1;
      } else {
        this.focusOnIndex--;
      }
      document.getElementById("accordion-button-" + this.focusOnIndex).focus();
    },
  },
};
</script>

<style lang="scss" scoped></style>
