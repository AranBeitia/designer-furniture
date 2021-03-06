import { createStore } from 'vuex'
import signin from '@/store/signinStore'
import bestSellers from '@/store/bestSellersStore'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    signin,
    bestSellers
  }
})
