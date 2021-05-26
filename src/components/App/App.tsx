import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../services/Products.service";
import Container from "../../shared/Container";
import { Product } from "../../usecase/product";
import Header from "../Header";
import AppTable from "../Table";
import { TableHeader } from "../Table/Table";
import "./App.css";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      const _products = await getAllProducts();
      setProducts(_products);
    }

    fetchData();
  }, []);
  const headers: TableHeader[] = [
    { key: "_id", value: "Id" },
    { key: "name", value: "Product" },
    { key: "price", value: "Price", right: true },
    { key: "stock", value: "Available Stock", right: true },
    { key: "actions", value: "Actions", right: true },
  ];

  return (
    <div className="App">
      <Header title="Algastock"></Header>
      <Container>
        <AppTable data={products} headers={headers}></AppTable>
      </Container>
    </div>
  );
}

export default App;
