<template>
  <main class="signin">
    <article class="signin__card">
      <button @click="backBehaviour" class="back-button">
        <i class="back-button__icon woo-icon-arrow"></i>
        <span class="back-button__text">Go back</span>
      </button>
      <h1>Sign in</h1>
      <form v-on:submit.prevent="onSubmit">
        <div class="signin__input-group">
          <label
            for="name"
            class="signin__label text-tag"
          >Username</label>
          <input
            type="text"
            name="name"
            id="name"
            v-model="name"
            class="signin__input"
          />
        </div>
        <div class="signin__input-group">
          <label
            for="password"
            class="signin__label text-tag"
          >Password</label>
          <input
            type="password"
            name="password"
            id="password"
            v-model="password"
            class="signin__input"
          />
        </div>
        <button @click="signin"  class="button signin__button">Sign in</button>
      </form>
    </article>
  </main>
</template>

<script>
import signinStore from '@/store/index.js'
import userMock from '@/infra/users/__mock__/Users.json'
export default {
  data () {
    return {
      users: userMock,
      name: '',
      password: ''
    }
  },
  methods: {
    backBehaviour () {
      this.$router.go(-1)
    },
    signin () {
      signinStore.commit('setSignedUser', { userName: this.name })
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style lang="scss" scoped>
.back-button {
  @include flex(flex, center, center);
  padding: 2rem 0;
  background-color: transparent;
  outline: none;
  cursor: pointer;

  &__icon {
    font-size: 2rem;
    padding-right: 1.5rem;
  }

  &__text {
    font-size: 1.5rem;
  }
}

.signin {
  padding: 7rem;
  background-color: var(--color-grey-light);

  @include is-mobile {
    padding: 1rem;
  }

  &__card {
    max-width: 60rem;
    width: 100%;
    margin: auto;
    padding: 5rem 10rem;
    background-color: var(--color-white);
    border-radius: 1rem;

    @include is-mobile {
      padding: 3rem;
    }
  }

  &__input-group {
    @include flex(flex, center,start);
    flex-direction: column;
    padding: 3rem 0;
  }

  &__label {
    padding: .8rem 0;
  }
  &__input {
    width: 100%;
    padding: 1.3rem;
    border: 1px solid var(--color-grey);
  }

  &__button {
    margin-bottom: 5rem;
  }
}
</style>