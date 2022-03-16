<template>
  <div>
    <div class="mt-16">
      <div class="container">
        <h1 class="intro">Offre landing</h1>
        <p class="font-title text-xl font-bold text-primary laptop:text-4xl">
          Une offre à bas prix pour une présence sur le web efficace
        </p>
      </div>
    </div>
    <section class="my-14">
      <div class="container">
        <div class="price">
          <strong>675<sup>&euro;</sup></strong>
        </div>
        <p class="max-w-3xl">
          Vous souhaitez mettre en avant votre commerce sur le web d'une manière
          efficace, présenter vos produits et avoir une visibilité sur le web ?
          <strong class="bg-green text-primary"
            >Cette offre est faites pour vous !</strong
          >
        </p>
        <h2 class="mt-8 text-xl">Cette offre se compose de :</h2>
        <div
          role="list"
          class="mt-16 grid gap-8 tablet:grid-cols-2 desktop:grid-cols-3"
        >
          <template v-for="(step, index) in steps" :key="index">
            <div
              role="listitem"
              class="relative bg-primary p-8 text-white tablet:p-12"
            >
              <h3 class="step-title">{{ step.title }}</h3>
              <p
                class="mt-8"
                v-html="step.content"
                :aria-describedby="step.described ? step.described : null"
              ></p>
              <span
                class="absolute left-0 top-0 flex h-16 w-16 -translate-x-4 -translate-y-4 transform items-center justify-center rounded-full bg-green text-2xl font-bold text-primary"
                >{{ index + 1 }}</span
              >
            </div>
          </template>
        </div>
        <p id="maj-conditions" class="mt-4 block text-xs text-gray-500">
          1. Au delà de ce délai, un <strong>forfait de 56&euro;</strong> sera
          facturé lors de chaque demande de mise à jour.
        </p>
        <p class="mt-8 text-center">
          <a href="https://foodie-wireframe.vercel.app/" target="_blank"
            >Découvrir un exemple - Restaurant</a
          >
          <br />
          <a href="#" class="button is-gradient mt-4"
            >Je profite de cette offre</a
          >
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  setup() {
    const steps = [
      {
        title: "Landing page",
        content:
          "Mise en place d'une landing page avec différents blocs (CTA, présentation, galerie photos, avis, informations supplémentaires).",
      },
      {
        title: "Mises à jour",
        content:
          "Profitez des mises à jour de contenu gratuites pendant un an <sup>(1)</sup>. Gardez vos informations à jour.",
        described: "maj-conditions",
      },
      {
        title: "Hébergement & nom de domaine",
        content:
          "Je vous accompagne dans le choix & la séléction de votre hébergement et votre nom de domaine.",
      },
    ];

    return {
      steps,
    };
  },
};
</script>

<style lang="scss" scoped>
.price {
  @apply mb-8 transform laptop:absolute laptop:right-6 laptop:rotate-12 laptop:text-right desktop:right-12;
  strong {
    @apply rounded bg-green px-4 py-2 text-7xl text-primary;
    sup {
      font-size: 65%;
    }
  }
}
.step-title {
  @apply text-2xl;
  background: linear-gradient(
    -45deg,
    theme("colors.blue-green"),
    theme("colors.green")
  );
  background-clip: text;
  color: transparent;
}
</style>
