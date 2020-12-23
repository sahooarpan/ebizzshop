import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../actions/productActions";
import user from "../reducers/userReducer";
import Product from "./Product";

const Shop = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { products, loading } = product;
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="container mt-5 form-container">
      <h1 className="mb-3">Shop</h1>
      {loading && <h5 className="text-center text-danger">Loading...</h5>}
      <div className="mb-4  row">
        {!loading && products && products.length === 0 && (
          <h1>No products found</h1>
        )}

        {!loading &&
          products &&
          products.length > 0 &&
          products.map((product) => {
            console.log(product);
            return (
              <Product
                key={product?._id}
                name={product?.name}
                price={product?.price}
                productImage={product?.productImage}
                createdBy={product?.user}
                id={product?._id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Shop;
