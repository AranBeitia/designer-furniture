import featuredProductMock from '@/infra/featuredProduct/__mock__/FeaturedProduct.json'

function getFeaturedProducts() {
  return Promise.resolve(featuredProductMock)
}

export default {
  getFeaturedProducts
}
