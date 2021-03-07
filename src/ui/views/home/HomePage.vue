<template>
  <main>
    <HomeHero/>
    <FeaturedProducts/>
    <BestSellers/>
  </main>
</template>

<script>
import HomeHero from '@/ui/views/home/HomeHero'
import FeaturedProducts from '@/ui/views/featuredProducts/FeaturedFeed'
import BestSellers from '@/ui/views/bestSellers/BestSellersFeed'

export default {
  name: 'Home',
  components: {
    HomeHero,
    FeaturedProducts,
    BestSellers
  }
}
</script>
