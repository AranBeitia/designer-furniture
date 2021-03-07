<template>
  <section class="products-wrapper">
    <div class="page-container">
      <h2>Featured Products</h2>
      <div class="grid-2-to-1">
        <FeaturedProduct/>
      </div>
    </div>
  </section>
</template>

<script>
import FeaturedProduct from './FeaturedProduct'

export default {
  components: {
    FeaturedProduct
  }
}
</script>

<style lang="scss" scoped>
.products-wrapper {
  padding: 5rem 0;
}
</style>