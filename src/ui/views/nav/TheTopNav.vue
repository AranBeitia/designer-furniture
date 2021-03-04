<template>
  <nav class="nav">
    <router-link to="/">Products</router-link>
    <router-link :to="{ name: 'About' }">About us</router-link>
    <router-link to="/">Contact</router-link>
    <router-link to="/">Stores</router-link>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: var(--color-primary);
    padding: 0 1rem;

    &.router-link-exact-active {
      color: var(--color-secondary);
    }
  }
}
</style>