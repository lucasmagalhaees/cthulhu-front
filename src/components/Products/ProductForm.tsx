import React, { useEffect, useState } from "react";
import { BsCursorFill, BsFillXCircleFill } from "react-icons/bs";
import Button from "../../shared/Button";
import Form from "../../shared/Form";
import Input from "../../shared/Input";
import { Product } from "../../usecase/product";
import "./ProductForm.css";

declare interface InitialFormState {
  _id?: string;
  name: string;
  price: string;
  stock: string;
}

export interface ProductCreator {
  name: string;
  price: number;
  stock: number;
}

declare interface ProductFormProps {
  form?: Product;
  onSubmit?: (product: ProductCreator) => void;
  onUpdate?: (product: Product) => void;
}

const ProductForm: React.FC<ProductFormProps> = (props) => {
  const initialFormState: InitialFormState = props.form
    ? {
        _id: props.form._id,
        name: props.form.name,
        price: String(props.form.price),
        stock: String(props.form.stock),
      }
    : {
        name: "",
        price: "",
        stock: "",
      };

  const [form, setForm] = useState(initialFormState);

  useEffect(() => {
    setForm(initialFormState);
  }, [props.form]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const updateProduct = (product: InitialFormState) => {
    const productDto = {
      _id: String(product._id),
      name: String(product.name),
      price: parseFloat(product.price),
      stock: Number(product.stock),
    };

    props.onUpdate && props.onUpdate(productDto);
  };

  const createProduct = (product: InitialFormState) => {
    const productDto = {
      name: String(product.name),
      price: parseFloat(product.price),
      stock: Number(product.stock),
    };

    props.onSubmit && props.onSubmit(productDto);
  };

  const handleFormSubmit = () => {
    form._id ? updateProduct(form) : createProduct(form);

    setForm(initialFormState);
  };

  return (
    <Form title="Product form" onSubmit={handleFormSubmit}>
      <Input
        onChange={handleInputChange}
        value={form.name}
        autoComplete="off"
        required
        name="name"
        label="Name"
        placeholder="E.g.: Cookie"
      />
      <Input
        name="price"
        autoComplete="off"
        onChange={handleInputChange}
        required
        value={form.price}
        label="Price"
        type="number"
        step="0.5"
        min="0"
        placeholder="E.g.: 1.25"
      />
      <Input
        onChange={handleInputChange}
        required
        autoComplete="off"
        name="stock"
        value={form.stock}
        label="Stock"
        type="number"
        min="0"
        placeholder="E.g.: 15"
      />
      <div className="buttonForm">
        <Button
          content={form._id ? "Update" : "Submit"}
          submit={true}
          style="info"
          outline={true}
          appendIcon={<BsCursorFill></BsCursorFill>}
        ></Button>
        {form._id && (
          <Button
            onClick={() => setForm(initialFormState)}
            content={"Cancel"}
            submit={true}
            style="danger"
            outline={true}
            appendIcon={<BsFillXCircleFill></BsFillXCircleFill>}
          ></Button>
        )}
      </div>
    </Form>
  );
};

export default ProductForm;
