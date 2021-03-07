<template>
  <section class="best-sellers">
    <div class="page-container">
      <h2 class="best-sellers__title">Best Sellers</h2>
      <div class="grid-3-to-1">
        <BestSellersProduct/>
      </div>
    </div>
  </section>
</template>

<script>
import BestSellersProduct from './BestSellersProduct'

export default {
  components: {
    BestSellersProduct
  }
}
</script>
<style lang="scss" scoped>
.best-sellers {
  padding: 5rem 0;
  background-color: var(--color-grey-light);

  &__title {
    padding-bottom: 2rem;
  }
}
</style>
