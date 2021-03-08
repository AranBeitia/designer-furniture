import ProductsRepository from '@/infra/product/ProductRepository'
export default {
  state: {
    products: ['hello'],
    namespaced: true
  },
  mutations: {
    setProducts(state, products) {
      console.log(products)
      state.product = products
    }
  },
  actions: {
    async getProduct({ commit }) {
      const dataProduct = await ProductsRepository.getProducts()
      commit('setProducts', dataProduct)
    }
  },
  getters: {
    products(state) {
      console.log(state.products)
      return state.products
    }
  }
}