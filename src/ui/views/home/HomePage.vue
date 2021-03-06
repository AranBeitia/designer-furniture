<template>
  <main>
    <HomeHero/>
    <HomeProducts/>
    <BestSellers/>
  </main>
</template>

<script>
import HomeHero from '@/ui/views/home/HomeHero.vue'
import HomeProducts from '@/ui/views/home/HomeProducts.vue'
import BestSellers from '@/ui/views/bestSellers/BestSellers.vue'

export default {
  name: 'Home',
  components: {
    HomeHero,
    HomeProducts,
    BestSellers
  }
}
</script>
