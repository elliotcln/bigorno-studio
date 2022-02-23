<template>
  <nav
    role="navigation"
    aria-label="Navigation principale"
    @keydown.esc="escapeNav"
    @keydown.tab="trapFocus"
  >
    <button
      :tabindex="openState ? 0 : '-1'"
      id="trapFocusStart"
      class="sr-only"
      aria-hidden="true"
    ></button>
    <button
      @click.prevent="toggleOpenState()"
      :aria-expanded="openState"
      aria-controls="main-nav"
      class="controls-button"
    >
      <template v-if="openState">
        <svg
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <span class="sr-only">Fermer le menu</span>
      </template>
      <template v-else>
        <svg
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
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
        <span class="sr-only">Ouvrir le menu</span>
      </template>
    </button>

    <div
      id="main-nav"
      :class="['nav-wrapper']"
      :aria-hidden="!openState"
      tabindex="-1"
      ref="nav"
    >
      <div class="m-auto grid w-full max-w-2xl gap-8">
        <ol class="grid gap-12">
          <li>
            <nuxt-link :tabindex="openState ? 0 : '-1'" to="/services"
              >Nos services</nuxt-link
            >
          </li>
          <li>
            <nuxt-link :tabindex="openState ? 0 : '-1'" to="/"
              >Nos clients</nuxt-link
            >
          </li>
          <li>
            <nuxt-link :tabindex="openState ? 0 : '-1'" to="/"
              >Nous contacter</nuxt-link
            >
          </li>
        </ol>
        <hr class="w-40 border-b border-primary" />
        <div class="grid justify-start gap-2">
          <a
            :tabindex="openState ? 0 : '-1'"
            href="#"
            class="inline-flex items-center space-x-2"
          >
            <svg
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>kenavo@bigorno.studio</span>
          </a>
          <a
            :tabindex="openState ? 0 : '-1'"
            href="#"
            class="inline-flex items-center space-x-2"
          >
            <svg
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
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <span>+33786816832</span>
          </a>
        </div>
      </div>
    </div>
    <button
      :tabindex="openState ? 0 : '-1'"
      id="trapFocusEnd"
      class="sr-only"
      aria-hidden="true"
    ></button>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const openState = ref(false);
const nav = ref();
const toggleOpenState = function () {
  openState.value = !openState.value;
  console.log(openState.value);
  document.body.classList.toggle("nav-open");
  if (this.nav.classList.contains("is-opening")) {
    this.nav.classList.remove("is-opening");
    this.nav.classList.add("is-closing");
  } else {
    this.nav.classList.remove("is-closing");
    this.nav.classList.add("is-opening");
  }
};

const escapeNav = function () {
  toggleOpenState();
  document.querySelector(".controls-button").focus();
};

const trapFocus = function (e) {
  const trapFocusStart = document.getElementById("trapFocusStart");
  const trapFocusEnd = document.getElementById("trapFocusEnd");

  console.log(trapFocusStart);

  if (trapFocusStart === document.activeElement) {
    trapFocusEnd.focus();
  } else if (trapFocusEnd === document.activeElement) {
    trapFocusStart.focus();
  }
};
</script>

<style lang="scss" scoped>
.controls-button {
  @apply relative z-50 flex h-14 w-14
   items-center justify-center rounded-full bg-gray-light;

  &:hover {
    @apply bg-primary text-white;
  }
  &:focus {
    @apply text-primary;
  }
}
.nav-wrapper {
  @apply fixed inset-0 z-40 flex translate-x-full transform items-center bg-dark px-8 text-white;

  &.is-opening {
    animation: open-menu 0.35s ease-in forwards;
  }

  &.is-closing {
    animation: close-menu 0.35s ease-in forwards;
  }

  a {
    @apply transition-colors duration-200 hover:text-primary;
  }

  ol {
    counter-reset: counter 0;

    li {
      @apply font-title text-[6.25vw] laptop:text-[4.75vw] desktop:text-[3.125vw];
      counter-increment: counter 1;

      &::before {
        content: "0" counter(counter);
        @apply mr-2 text-lg opacity-30;
      }
    }
  }
}

@keyframes open-menu {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes close-menu {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
</style>
