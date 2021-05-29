import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { BsCursorFill, BsForwardFill } from "react-icons/bs";
import { getAllProducts } from "../../services/Products.service";
import Button from "../../shared/Button";
import Container from "../../shared/Container";
import Form from "../../shared/Form/Form";
import Input from "../../shared/Input";
import AppTable, { TableHeader } from "../../shared/Table";
import { Product } from "../../usecase/product";
import Header from "../Header";
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
        <Form title="Product form" onSubmit={console.log}>
          <Input label="Name" placeholder="E.g.: Cookie" />
          <Input
            label="Price"
            type="number"
            step="0.01"
            min="0"
            placeholder="E.g.: 1.25"
          />
          <Input label="Stock" type="number" min="0" placeholder="E.g.: 15" />
          <Button
            content="Submit"
            style="info"
            outline={true}
            appendIcon={<BsCursorFill></BsCursorFill>}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
