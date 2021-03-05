<template>
  <main>
    <HomeHero/>
    <HomeProducts/>
    <HomeBestSellers/>
  </main>
</template>

<script>
import HomeHero from '@/ui/views/home/HomeHero.vue'
import HomeProducts from '@/ui/views/home/HomeProducts.vue'
import HomeBestSellers from '@/ui/views/home/HomeBestSellers.vue'

export default {
  name: 'Home',
  components: {
    HomeHero,
    HomeProducts,
    HomeBestSellers
  }
}
</script>
