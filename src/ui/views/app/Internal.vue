<template>
  <TopNav />
  <router-view />
</template>

<script>
import TopNav from '@/ui/views/nav/TheTopNav.vue'

export default {
  components: {
    TopNav
  }
}
</script>