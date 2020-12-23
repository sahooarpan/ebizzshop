import { CREATE_PRODUCT_FAIL,CREATE_PRODUCT_REQUEST,GET_PRODUCT_FAIL,GET_PRODUCT_REQUEST,GET_PRODUCT_SUCCESS
    ,CREATE_PRODUCT_SUCCESS,DELETE_PRODUCT_FAIL,DELETE_PRODUCT_REQUEST,DELETE_PRODUCT_SUCCESS,
    GET_PRODUCTS_FAIL,GET_PRODUCTS_REQUEST,GET_PRODUCTS_SUCCESS,UPDATE_PRODUCTS_FAIL,UPDATE_PRODUCTS_REQUEST,UPDATE_PRODUCTS_SUCCESS } from "./constants";
import Axios from 'axios'
export const getProducts = () => async (dispatch) => {
    try {
      dispatch({ type: GET_PRODUCTS_REQUEST });
      const { data } = await Axios.get(`http://localhost:5000/api/products`);
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_PRODUCTS_FAIL,
        payload: error.message,
      });
    }
  };
  
  export const getProduct = (id) => async (dispatch) => {
    try {
      dispatch({ type: GET_PRODUCT_REQUEST });
      const { data } = await Axios.get(`http://localhost:5000/api/products/${id}`);
      dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_PRODUCT_FAIL,
        payload: error.message,
      });
    }
  };
  



  export const updateProduct = (id,name,price,productImage) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_PRODUCTS_REQUEST });
      const { data } = await Axios.put(`http://localhost:5000/api/products/edit/${id}`,{
        name,price,productImage
      });
      dispatch({
        type: UPDATE_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_PRODUCTS_FAIL,
        payload: error.message,
      });
    }
  };


  export const createProduct = (name,price,productImage) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_PRODUCT_REQUEST });
      const { data } = await Axios.post(`http://localhost:5000/api/products`,{
        name,price,productImage
      });
      dispatch({
        type: CREATE_PRODUCT_SUCCESS,
        payload: data
      });
    } catch (error) {
        console.log(error.message)
      dispatch({
        type: CREATE_PRODUCT_FAIL,
        payload: error.message,
      });
    }
  };


  export const deleteProduct = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_PRODUCT_REQUEST });
      const res = await Axios.delete(`http://localhost:5000/api/products/${id}`);
      dispatch({
        type: DELETE_PRODUCT_SUCCESS,
        payload: id
      });
    } catch (error) {
      dispatch({
        type: DELETE_PRODUCT_FAIL,
        payload: error.message,
      });
    }
  };
