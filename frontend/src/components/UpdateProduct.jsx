import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateProduct,
  getProduct,
  getProducts,
} from "../actions/productActions";
const UpdateProduct = ({ match, history }) => {
  const productState = useSelector((state) => state.product);
  const { product, loading } = productState;
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(match.params.id));
  }, []);

  useEffect(() => {
    setName(product.name);
    setPrice(product.price);
    setProductImage(product.productImage);
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(match.params.id, name, price, productImage));
    dispatch(getProducts());
    history.push("/shop");
  };

  return (
    <div className="d-flex justify-content-center ">
      <form className="form-container bg-light" onSubmit={handleSubmit}>
        <h3 className="display-4 text-primary">Update Product</h3>

        <div class="form-group">
          <label for="name">Product Name</label>
          <input
            type="text"
            class="form-control"
            id="email"
            name="name"
            placeholder="Enter name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="price">Product Price</label>
          <input
            type="number"
            class="form-control"
            id="price"
            name="price"
            placeholder="Price"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="image">Product Image</label>
          <input
            type="text"
            class="form-control"
            id="image"
            name="password"
            placeholder="Paste Image URL Here"
            required
            value={productImage}
            onChange={(e) => setProductImage(e.target.value)}
          />
        </div>
        <button
          disabled={name === "" || productImage === "" || price === ""}
          type="submit"
          class="btn btn-primary px-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
