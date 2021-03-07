<template>
  <header class="header page-container">
    <div class="header__nav">
      <router-link :to="{ name: 'Home' }" class="z-index-2">
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
    <div class="z-index-1">
      <button
        @click="toggleMenu"
        class="button-toggle"
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
$size: 2rem;
.header {
  padding: $size 0;
  @include flex(flex, between, center);

  &__nav {
    @include flex(flex, start, center);
  }

  &__logo {
    width: 10rem;

    &.--hidden {
      display: none;
    }

    &.--active {
      display: block;
      position: fixed;
      top: $size;
      left: $size;
    }
  }

  .button-toggle {
    display: none;
    outline: none;

      @include is-tablet {
      display: block;
      background-color: transparent;
    }

    &.--active {
      .icon {
        $size: 2.5rem;
        position: fixed;
        top: $size;
        right: $size;
        color: var(--color-white);
      }
    }

    .icon {
      font-size: $size;
    }
  }

  .sign-in {
    color: var( --color-tertiary);
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: underline;

    @include is-tablet {
      display: none;
    }
  }
}

</style>
