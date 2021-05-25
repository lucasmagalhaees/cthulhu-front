import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getAllProducts } from "../../services/Products.service";
import { Product } from "../../usecase/product";
import { BsFillTrashFill, BsPencil, BsSearch } from "react-icons/bs";
import "./Table.scss";

export interface TableProps {}

const headers = [
  { key: "name", value: "Product" },
  { key: "price", value: "Price", right: true },
  { key: "stock", value: "Available Stock", right: true },
  { key: "actions", value: "Actions", right: true },
];

function AppTable() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      const _products = await getAllProducts();
      setProducts(_products);
    }

    fetchData();
  }, []);

  return (
    <div className="AppTable text-center">
      <Table responsive>
        <thead>
          <tr>
            {Array.from(headers).map((header, index) => (
              <th key={index}>{header.value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.name}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <button
                    onClick={() => {
                      console.log(product._id);
                    }}
                    className="mr-3 btn btn-outline-info"
                    type="button"
                  >
                    <BsSearch></BsSearch>
                  </button>
                  <button
                    onClick={() => {
                      console.log(product._id);
                    }}
                    className="mr-3 btn btn-outline-warning"
                    type="button"
                  >
                    <BsPencil></BsPencil>
                  </button>
                  <button
                    onClick={() => {
                      console.log(product._id);
                    }}
                    className="btn btn-outline-danger round"
                    type="button"
                  >
                    <BsFillTrashFill></BsFillTrashFill>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default AppTable;
