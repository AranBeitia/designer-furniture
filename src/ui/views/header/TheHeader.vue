<template>
  <header class="header page-container">
    <router-link :to="{ name: 'Home' }">
      <img src="~@/ui/assets/images/logo_black.png" alt="logo" title="logo">
    </router-link>
    <TopNav id="menu" class="header__nav"/> <!-- --active -->
    <button class="toggle"><img src="~@/ui/assets/images/icon-bars.svg" class="icon"></button>
    <router-link :to="{ name: 'Signin' }" class="sign-out">Sign in</router-link>
  </header>
</template>

<script>
// import menu from '@/ui/views/header/menu.js'
import TopNav from '@/ui/views/nav/TheTopNav.vue'

export default {
  components: {
    TopNav
  },
  // methods: {
  //   menu
  // }
}
</script>
<style lang="scss" scoped>
.header {
  @include flex(flex, start, center);
  padding: 2rem 0;

  @include is-tablet {
    justify-content: space-between;
  }
  
  &__logo {
    width: 10rem;
  }

.toggle {
  display: none;
  outline: none;

    @include is-tablet {
    display: block;
  }
}

  &__nav {
    margin-right: auto;

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
      }
    }
  }

  .sign-out {
    @include is-tablet {
      display: none;
    }
  }
}

.icon {
  width: 4rem;
}
</style>
