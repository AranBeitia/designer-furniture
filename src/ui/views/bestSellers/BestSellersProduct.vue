<template>
  <article class="best-sellers__card">
    <img src="~@/ui/assets/images/table.png" title="Table" alt="Table" class="best-sellers__image">
    <div>
      <h3>Product 1</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laboriosam a voluptas minus temporibus error.</p>
      <small class="best-sellers__tag text-tag">Colores disponibles</small>
      <ColorDot/>
    </div>
  </article>
</template>

<script>
import bestSellers from '@/store/index.js'
import { mapActions } from 'vuex'
import ColorDot from '@/ui/components/ColorDot'

export default {
  components: {
    ColorDot
  },
  created () {
    this.getProduct()
  },
  methods: {
    getProductTitle () {
      bestSellers.commit('setProduct', { titleProduct: 'product 5' })
    },
    ...mapActions(['getProduct'])
  }
}
</script>