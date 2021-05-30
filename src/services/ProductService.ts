import http from '../utils/http'
import { ProductCreator } from '../components/Products/ProductForm'
import { Product } from '../usecase/product'

const baseUrl = 'http://localhost:3024/products';

export const getAllProducts = () =>
  http
    .get<Product[]>(baseUrl)
    .then(res => res.data)

export const createSingleProduct = (product: ProductCreator) =>
  http
    .post(baseUrl, product)

export const updateSingleProduct = ({ _id, name, price, stock }: Product) =>
  http
    .patch(`${baseUrl}/${_id}`, {
      ...(name && { name }),
      ...(price && { price }),
      ...(stock && { stock }),
    })

export const deleteSingleProduct = (id: string) =>
  http
    .delete(`${baseUrl}/${id}`)