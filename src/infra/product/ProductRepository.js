import productMock from '@/infra/product/__mock__/Product.json'

function getProducts() {
  return Promise.resolve(productMock)
}

export default {
  getProducts
}
