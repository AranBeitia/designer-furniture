<template>
  <div class="flex">
    <router-link to="/">Logo que va a home</router-link>
    <nav class="nav">
      <router-link to="/">Products</router-link>
      <router-link to="/about">About us</router-link>
      <router-link to="/">Contact</router-link>
      <router-link to="/">Stores</router-link>
    </nav>
    <router-link to="/login">Sign out</router-link>
  </div>
</template>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

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