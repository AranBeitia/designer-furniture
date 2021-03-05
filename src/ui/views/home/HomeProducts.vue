<template>
  <section class="products-wrapper">
    <div class="page-container">
      <h2>Featured Products</h2>
      <div class="grid-2-to-1">
        <article class="product">
          <img src="~@/ui/assets/images/sofa_blue.jpg" title="Sofa blue" alt="Sofa blue" class="product__image">
          <div class="product__description">
            <h3>Product 1</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione corporis placeat quas sit eius voluptatum ullam officia fugit.</p>
            <span class="text-body-secondary-bold">3.000€</span>
          </div>
        </article>
        <article class="product">
          <img src="~@/ui/assets/images/sofa_grey.jpg" title="Sofa grey" alt="Sofa grey" class="product__image">
          <div class="product__description">
            <h3>Product 1</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione corporis placeat quas sit eius voluptatum ullam officia fugit.</p>
            <span class="text-body-secondary-bold">3.000€</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.products-wrapper {
  padding: 5rem 0;
}

.product {
  &__image {
    width: 100%;
  }

  &__description {
    text-align: center;
    padding: 2rem 8rem;

    @include is-tablet{
      text-align: left;
      padding: 0;
    }
  }
}
</style>