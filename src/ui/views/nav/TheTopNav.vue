<template>
  <nav class="menu" :class="{ '--active': isActived }">
    <router-link to="/" class="menu__item">Products</router-link>
    <router-link to="/" class="menu__item">About us</router-link>
    <router-link to="/" class="menu__item">Contact</router-link>
    <router-link to="/" class="menu__item">Stores</router-link>
    <router-link
      v-if="isActived"
      :to="{ name: 'Signin' }"
      class="[ button --small ]"
    >Sign in</router-link>
  </nav>
</template>
<script>


export default {
  props: {
    isActived: {
      type: Boolean
    }
  }
}
</script>
<style lang="scss" scoped>
$size: 3rem;
$full-size: 100%;
.menu {
  padding: 0 $size * 2;
  z-index: 1;

  @include is-tablet {
    display: none;

    &.--active {
      @include flex(flex, center, center);
      flex-direction: column;
      position: fixed;
      top: 0;
      left: 0;
      width: $full-size;
      height: $full-size;
      background-color: var(--color-primary);
    }
  }

  &__item {
    font-weight: bold;
    color: var(--color-primary);
    padding: 0 $size;

    @include is-tablet {
      color: var(--color-white);
      padding: $size;
      font-size: 3.5rem;
    }
  }
}
</style>
