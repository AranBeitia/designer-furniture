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
.menu {
  padding: 0 3rem;

  @include is-tablet {
    display: none;

    &.--active {
      @include flex(flex, center, center);
      flex-direction: column;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--color-primary);
      animation: scale 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
  }

  &__item {
    font-weight: bold;
    color: var(--color-primary);
    padding: 0 1rem;

    @include is-tablet {
      color: var(--color-white);
      padding: 3rem;
      font-size: 3.5rem;
    }
  }
}
</style>
