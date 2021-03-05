<template>
  <section class="best-sellers">
    <div class="page-container">
      <h2>Best Sellers</h2>
      <div class="grid-3-to-1">
        <article class="best-sellers__card">
          <img src="~@/ui/assets/images/table.png" title="Table" alt="Table" class="best-sellers__image">
          <div>
            <h3>Product 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laboriosam a voluptas minus temporibus error.</p>
            <small class="best-sellers__tag text-tag">Colores disponibles</small>
            <ColorDot/>
          </div>
        </article>
        <article class="best-sellers__card">
          <img src="~@/ui/assets/images/chair_grey.png" title="Chair grey" alt="Chair grey" class="best-sellers__image">
          <div>
            <h3>Product 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laboriosam a voluptas minus temporibus error.</p>
            <small class="best-sellers__tag text-tag">Colores disponibles</small>
            <ColorDot/>
          </div>
        </article>
        <article class="best-sellers__card">
          <img src="~@/ui/assets/images/chair_yellow.png" title="Chair yellow" alt="Chair yellow" class="best-sellers__image">
          <div>
            <h3>Product 3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laboriosam a voluptas minus temporibus error.</p>
            <small class="best-sellers__tag text-tag">Colores disponibles</small>
            <ColorDot/>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
<script>
import ColorDot from '@/ui/components/ColorDot'

export default {
  components: {
    ColorDot
  }
}
</script>
<style lang="scss" scoped>
  .best-sellers {
    padding: 5rem 0;
    background-color: var(--color-grey-light);

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
</style>