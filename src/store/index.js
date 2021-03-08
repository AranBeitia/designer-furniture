import { createStore } from 'vuex'
import signin from '@/store/signinStore'
import product from '@/store/productStore.js'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    signin,
    product
  }
})
