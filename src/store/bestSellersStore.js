import ProductsRepository from '@/infra/bestSellers/ProductsRepository'
export default {
  state: {
    products: [],
    namespaced: true
  },
  mutations: {
    setProduct(state, product) {
      state.products = product
    }
  },
  actions: {
    async getProduct({ commit }) {
      const dataProduct = await ProductsRepository.getProducts()
      commit('setProduct', dataProduct)
    }
  },
  getters: {
  }
}