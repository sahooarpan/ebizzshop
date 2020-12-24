import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../actions/productActions";

const Product = ({ name, price, productImage, createdBy, id }) => {
  const auth = useSelector((state) => state.user);
  const { userInfo } = auth;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(id));
  };
  const userId = userInfo?._id?userInfo?._id:userInfo?.id;
  console.log("uid",userId)
  console.log("creby",createdBy)
  
  return (
    <div className="card product-card align-self-xs-center mt-4 post-dashboard">
      <img className="card-img-top card-image" src={productImage} alt={name} />
      <div className="card-body">
        <h4 className="text-primary search-name card-text">{name}</h4>
        <p className="text-secondary mt-2 search-name card-text">
          Price: {price}
        </p>

        {userId === createdBy ? (
          <div className="d-flex justify-content-between">
            <Link className="btn btn-primary" to={`/update-product/${id}`}>
              Edit
            </Link>
            <button className="btn btn-danger" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Product;
