<template>
  <div
    v-for="(product, index)
    in products"
    :key="index"
  >
    <article class="product">
      <img
        :src="product.image"
        :title="product.title"
        :alt="product.title"
        class="product__image"
      >
      <div class="product__description">
        <h3>{{ product.title }}</h3>
        <p>{{ product.description }}</p>
        <span class="text-body-secondary-bold">{{ product.price }}</span>
      </div>
    </article>
  </div>
</template>

<script>
import productMock from '@/infra/featuredProduct/__mock__/FeaturedProduct.json'

export default {
  data () {
    return {
      products: productMock
    }
  }
}
</script>

<style lang="scss" scoped>
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