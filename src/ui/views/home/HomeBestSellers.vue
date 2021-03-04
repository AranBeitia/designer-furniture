<template>
  <section class="best-sellers">
    <div class="page-container">
      <h2>Best Sellers</h2>
      <div class="best-sellers__card">
        <img>
        <h3>Product 1</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laboriosam a voluptas minus temporibus error, amet, mollitia recusandae hic suscipit .</p>
        <small>Colores disponibles</small>
        <span>color 1</span>
        <span>color 2</span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .best-sellers {
    padding: 5rem 0;
    background-color: var(--color-grey-light);

    &__card {
      max-width: 384px;
      width: 100%;
      padding: 40px 60px;
      border-radius: 1rem;
      border: 1px solid var(--color-grey);
    }
  }
</style>