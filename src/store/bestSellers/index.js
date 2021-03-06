import { createStore } from 'vuex'
import ProductsRepository from '@/infra/bestSellers/ProductsRepository'

export default createStore({
  namespaced: true,
  state: {
    products: []
  },
  mutations: {
    setProduct(state, products) {
      state.products = products
    }
  },
  actions: {
    async getProduct ({ commit }) {
      const dataProduct = await ProductsRepository.getProducts()
      commit('setProduct', dataProduct)
    }
  },
  modules: {
  }
})
