import {
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_REQUEST,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  UPDATE_PRODUCTS_FAIL,
  UPDATE_PRODUCTS_REQUEST,
  UPDATE_PRODUCTS_SUCCESS,
} from "../actions/constants";
const initialState = {
  products: [],
  product: "",
  loading: true,
  error: null,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, payload],
        loading: false,
      };
    case UPDATE_PRODUCTS_SUCCESS:
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };
    case GET_PRODUCTS_FAIL:
    case GET_PRODUCT_FAIL:
    case CREATE_PRODUCT_FAIL:
    case UPDATE_PRODUCTS_FAIL:
    case DELETE_PRODUCT_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case DELETE_PRODUCT_SUCCESS: {
      return {
        ...state,
        products: state.products.filter((product) => product._id !== payload),
        loading: false,
      };
    }
    case CREATE_PRODUCT_REQUEST:
    case GET_PRODUCTS_REQUEST:
    case UPDATE_PRODUCTS_REQUEST:
    case DELETE_PRODUCT_REQUEST:
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
