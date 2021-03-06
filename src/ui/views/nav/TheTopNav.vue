<template>
  <nav class="menu" :class="{ '--active': isActived }">
    <router-link to="/" class="menu__item">Products</router-link>
    <router-link to="/" class="menu__item">About us</router-link>
    <router-link to="/" class="menu__item">Contact</router-link>
    <router-link to="/" class="menu__item">Stores</router-link>
    <button
      v-if="isActived"
      @click="signin"
      class="[ button --small ]"
    >Sign in</button>
  </nav>
</template>
<script>
import signinStore from '@/store/index.js'

export default {
  props: {
    isActived: {
      type: Boolean
    }
  },
  methods: {
    signin () {
      signinStore.commit('setSignedUser', { userName: 'aran' })
    }
  }
}
</script>
<style lang="scss" scoped>
$size: 3rem;
$full-size: 100%;
.menu {
  padding: 0 $size * 2;

  @include is-tablet {
    display: none;

    &.--active {
      @include flex(flex, center, center);
      flex-direction: column;
      position: absolute;
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
