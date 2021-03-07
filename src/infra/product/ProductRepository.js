import productMock from '@/infra/bestSellers/__mock__/Products.json'

function getProducts() {
  return Promise.resolve(productMock)
}

export default {
  getProducts
}
