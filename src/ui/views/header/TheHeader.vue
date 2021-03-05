<template>
  <nav class="navbar page-container">
    <div class="navbar__brand">
      <router-link :to="{ name: 'Home' }">
        <img src="~@/ui/assets/images/logo_black.png" alt="logo" title="logo">
      </router-link>
      <div id="burguer" class="burguer">
        <div class="burguer--open">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16">
            <g fill="#252a32" fill-rule="evenodd">
              <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
            </g>
          </svg>
        </div>
        <div class="burguer--close">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
            <path fill="#252a32" fill-rule="evenodd" d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z" />
          </svg>
        </div>
      </div>
    </div>
    <!-- <TopNav id="menu" class="menu"/> -->
    <router-link :to="{ name: 'Login' }" class="sign-out">Sign out</router-link>
  </nav>
</template>

<script>
// import menu from '@/ui/views/header/menu.js'
// import TopNav from '@/ui/views/nav/TheTopNav.vue'

export default {
  components: {

  },
  // methods: {
  //   menu
  // }
}
</script>
<style lang="scss" scoped>
.navbar {
  @include flex(flex, start, center);

  &__brand {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @include is-tablet {
      justify-content: flex-start;
      width: auto;
    }
  }

  .burguer {
    display: none;
    
    @include is-tablet {
      @include flex(flex, center, center);
      border: none;
      outline: none;
      transition: all 0.35s ease;
    }

    &--close {
      display: none;
    }

    &.active {
      .burguer--open {
        display: none;
      }

      .burguer--close {
        display: flex;
      }
    }
  }
}

.menu {
  margin-right: auto;

  @include is-tablet {
    display: none;
  }
}

.sign-out {
  @include is-tablet {
    display: none;
  }
}

</style>
