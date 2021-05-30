import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { PersistenceOperationEnum } from "../../enums/PersistenceOperationEnum";
import {
  createSingleProduct,
  deleteSingleProduct,
  getAllProducts,
  updateSingleProduct,
} from "../../services/ProductService";
import Container from "../../shared/Container";
import AppTable, { TableHeader } from "../../shared/Table";
import { Product } from "../../usecase/product";
import Header from "../Header";
import ProductForm, { ProductCreator } from "../Products/ProductForm";
import "./App.css";

const headers: TableHeader[] = [
  { key: "_id", value: "Id" },
  { key: "name", value: "Product" },
  { key: "price", value: "Price", right: true },
  { key: "stock", value: "Available Stock", right: true },
];

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [updatingProduct, setUpdatingProduct] =
    useState<Product | undefined>(undefined);

  async function fetchData() {
    const _products = await getAllProducts();
    setProducts(_products);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const createProduct = async (product: ProductCreator) => {
    try {
      await createSingleProduct(product);
      fetchData();
      launchSuccessFulSwal(PersistenceOperationEnum.CREATE);
    } catch (err) {
      Swal.fire("Oops!", err.message, "error");
    }
  };

  const updateProduct = async (newProduct: Product) => {
    try {
      await updateSingleProduct(newProduct);
      setUpdatingProduct(undefined);
      fetchData();
      launchSuccessFulSwal(PersistenceOperationEnum.UPDATE);
    } catch (err) {
      Swal.fire("Oops!", err.message, "error");
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      await deleteSingleProduct(id);
      fetchData();
      launchSuccessFulSwal(PersistenceOperationEnum.DELETE);
    } catch (err) {
      Swal.fire("Something went wrong", err.message, "error");
    }
  };

  const openRemoveModal = (product: Product) => {
    lauchDeleteSwal(product).then((result) => {
      if (result.value) {
        deleteProduct(product._id);
      }
    });
  };

  const openDetailModal = (product: Product) => {
    launchDetailSwal(product);
  };

  const fillForm = (product: Product) => {
    setUpdatingProduct(product);
  };

  const launchSuccessFulSwal = (operation: PersistenceOperationEnum) => {
    Swal.fire({
      title: `Completed`,
      text: `Product successfully ${operation}`,
      icon: "success",
      confirmButtonColor: "#17A2B8",
      confirmButtonText: `Done`,
    });
  };

  const lauchDeleteSwal = (product: Product) => {
    return Swal.fire({
      title: `Sure to delete ${product.name}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#17A2B8",
      cancelButtonColor: "#ff9100",
      confirmButtonText: `Yes, delete ${product.name}!`,
    });
  };

  const launchDetailSwal = (product: Product) => {
    Swal.fire(
      "Product details",
      `Name: ${product.name} </br>
       Price: $ ${product.price} </br>

       Stock: ${product.stock} units`,
      "info"
    );
  };

  return (
    <div className="App">
      <Header title="Algastock"></Header>
      <Container>
        <AppTable
          headers={headers}
          data={products}
          enableActions
          onDelete={openRemoveModal}
          onDetail={openDetailModal}
          onEdit={fillForm}
        ></AppTable>
        <ProductForm
          form={updatingProduct}
          onSubmit={createProduct}
          onUpdate={updateProduct}
        />
      </Container>
    </div>
  );
}

export default App;
