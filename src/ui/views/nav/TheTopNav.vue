<template>
  <nav class="menu">
    <router-link to="/" class="menu__item">Products</router-link>
    <router-link to="/" class="menu__item">About us</router-link>
    <router-link to="/" class="menu__item">Contact</router-link>
    <router-link to="/" class="menu__item">Stores</router-link>
  </nav>
</template>

<style lang="scss" scoped>
.menu {
  padding: 0 3rem;

  &__item {
    font-weight: bold;
    color: var(--color-primary);
    padding: 0 1rem;

    @include is-tablet {
      color: var(--color-white);
      padding: 3rem;
      font-size: 3rem;
    }

    &.router-link-exact-active {
      color: var(--color-secondary);
    }
  }
}
</style>