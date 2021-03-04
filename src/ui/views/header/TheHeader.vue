<template>
  <div class="flex page-container">
    <router-link :to="{ name: 'Home' }">
      <img src="~@/ui/assets/images/logo_black.png" alt="logo" title="logo">
    </router-link>
    <TopNav class="margin-auto-r"/>
    <router-link :to="{ name: 'Login' }">Sign out</router-link>
  </div>
</template>

<script>
import TopNav from '@/ui/views/nav/TheTopNav.vue'

export default {
  components: {
    TopNav
  }
}
</script>
<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
