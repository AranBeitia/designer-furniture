<template>
  <section class="hero">
    <div class="page-container">
      <aside class="hero__info">
        <h1 class="text-heading-primary">Lorem ipsum</h1>
        <p class="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </aside>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .hero {
    @include flex(flex, start, end);
    height: 33.4vw;
    background-image: url('~@/ui/assets/images/hero.jpg');
    background-size: cover;
    background-position: center;

    @include is-mobile {
      height: 100vw;
    }

    &__info {
      width: 30%;
      margin-bottom: 4rem;
      padding: 4.5rem;
      color: var(--color-white);
      backdrop-filter: blur(1rem);
      border-radius: 1rem;

      @include is-desktop {
        width: 65%;
        padding: 2rem;

        .text {
          padding: 0;
          line-height: 1.3;
          font-size: 1.8rem;
        }
      }
    }
  }
</style>