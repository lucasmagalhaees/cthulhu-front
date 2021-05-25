import http from '../utils/http'

const devUrl = 'http://localhost:3024'

const productsUrl = '/products'

export const getAllProducts = () =>
  http
    .get(devUrl + productsUrl)
    .then(res => res.data)