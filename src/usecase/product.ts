export interface Product {
  _id: string;
  name: string;
  price: number;
  stock: number;
}

export interface ProductDTO {
  _id: string;
  name: string;
  price: number;
  stock: number;
  createdAt: string;
  updatedAt: string;
}

const Products: Product[] = [];

export default Products;
