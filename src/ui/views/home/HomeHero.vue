<template>
  <section class="hero">
    <div class="page-container">
      <aside class="hero__info">
        <h1>Lorem ipsum</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </aside>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .hero {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    height: 33.4vw;
    background-image: url('~@/ui/assets/images/hero.jpg');
    background-size: cover;

    &__info {
      outline: 1px solid red;
      width: 30%;
      margin-bottom: 4rem;
      padding: 4.5rem;
      color: var(--color-white);
      backdrop-filter: blur(1rem);
      border-radius: 2rem;
    }
  }
</style>