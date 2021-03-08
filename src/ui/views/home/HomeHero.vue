<template>
  <section class="hero">
    <picture>
      <source media="(min-width: 48rem)" srcset="~@/ui/assets/images/hero.jpg">
      <source media="(min-width: 30rem)" srcset="~@/ui/assets/images/hero-small.jpg">
      <img src="~@/ui/assets/images/hero-small.jpg" alt="Yellow chair" title="Yellow chair" class="hero__image"/>
    </picture>
    <aside class="info">
      <h1 class="text-heading-primary">Lorem ipsum</h1>
      <p class="info__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </aside>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;

  &__image {
    width: 100%;
  }
}

.info {
  position: absolute;
  bottom: 4rem;
  left: 7rem;
  width: 25%;
  padding: 4.5rem;
  padding: 4.5rem;
  color: var(--color-white);
  backdrop-filter: blur(1rem);
  border-radius: 1rem;

  @include is-desktop {
    width: 35%;
    padding: 2.5rem;
  }

  @include is-tablet {
    left: 2rem;
    width: 55%;
    padding: 2rem;
  }

  &__text {
    padding: 0;
    line-height: 1.3;
  }
}
</style>