<template>
  <header class="header page-container">
    <div class="header__nav">
      <router-link :to="{ name: 'Home' }">
        <img
          src="~@/ui/assets/images/logo_black.png"
          alt="logo"
          title="logo"
          class="header__logo"
          :class="{ '--hidden': isActived }"
        />
        <img
          src="~@/ui/assets/images/logo_white.png"
          alt="logo"
          title="logo"
          class="header__logo --hidden"
          :class="{ '--active': isActived }"
        />
      </router-link>
      <TopNav
        v-if="menuVisible"
        :isActived="isActived"/>
    </div>
    <span>{{ userName }}</span>
    <div class="header__cta">
      <button
        @click="toggleMenu"
        class="toggle"
        :class="{ '--active': isActived }"
      >
        <i class="icon woo-icon-bars" :class="{ 'woo-icon-cross': isActived }"></i>
      </button>
      <router-link
        v-if="menuVisible"
        :to="{ name: 'Signin' }"
        class="sign-in"
      >Sign in</router-link>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import TopNav from '@/ui/views/nav/TheTopNav.vue'

export default {
  components: {
    TopNav
  },
  props: {
    menuVisible: {
      type: Boolean
    }
  },
  data () {
    return { 
      isActived: false
    }
  },
  computed: {
    ...mapGetters(['userName'])
  },
  methods: {
    toggleMenu () {
      this.isActived = !this.isActived
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  padding: 2rem 0;
  @include flex(flex, between, center);

  &__nav {
    @include flex(flex, start, center);
  }

  &__cta {
    z-index: 1;
  }

  &__logo {
    width: 10rem;

    &.--hidden {
      display: none;
    }

    &.--active {
      display: block;
      position: absolute;
      top: 1;
      left: 1;
      z-index: 1;
    }
  }

  .toggle {
    display: none;
    outline: none;

      @include is-tablet {
      display: block;
    }

    .icon {
      font-size: 4rem;
    }
  }

  .sign-in {
    color: blue;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: underline;

    @include is-tablet {
      display: none;
    }
  }
}

</style>
