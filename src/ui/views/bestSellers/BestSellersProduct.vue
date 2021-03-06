<template>
  <article class="best-sellers__card">
    <img src="~@/ui/assets/images/table.png" title="Table" alt="Table" class="best-sellers__image">
    <div>
      <h3>Product 1</h3>
      <span>{{ product }}</span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laboriosam a voluptas minus temporibus error.</p>
      <small class="best-sellers__tag text-tag">Colores disponibles</small>
      <ColorDot/>
    </div>
  </article>
</template>

<script>
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
    ...mapActions('product', ['getProduct'])
  }
}
</script>