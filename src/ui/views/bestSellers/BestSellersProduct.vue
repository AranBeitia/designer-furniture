<template>
  <div
    v-for="(product,index) in products"
    :key="index"
  >
    <article class="product__card">
      <img
        :src="product.image"
        :title="product.alt"
        :alt="product.alt"
        class="product__image"
      >
      <div>
        <h3>{{ product.title }}</h3>
        <p>{{ product.description }}</p>
        <small class="product__tag text-tag">Colores disponibles</small>
          <ul class="dot-wrapper">
            <li 
              class="[ dot dot-color ] --active"
              :style="{ '--bg-color': product.colors.option1 }"
            ></li>
            <li
              class="[ dot dot-color ]"
              :style="{ '--bg-color': product.colors.option2 }"
            ></li>
          </ul>
      </div>
    </article>
  </div>
</template>

<script>
import productMock from '@/infra/product/__mock__/Product.json'

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
  &__card {
    display: flex;
    flex-direction: column;
    padding: 4rem 6rem;
    border-radius: 1rem;
    border: 1px solid var(--color-grey);

    @include is-tablet {
      @include flex(flex, center, center);
      flex-direction: row;
      padding: 2rem;
    }
  }

  &__image {
    width: 100%;

    @include is-tablet {
      width: 50%;
      margin-right: 1rem;
    }
  }

  &__tag {
    color: var(--color-grey);
  }
}

.dot-wrapper {
  display: flex;
  padding: 1rem 0;
}

.dot {
  $size: 2rem;
  display: block;
  width: $size;
  height: $size;
  border-radius: 50%;

  &#{&}-color {
    background-color: var(--bg-color);
  }

  &#{&}.--active {
    border: 2px solid var(--color-black);
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }
}
</style>
