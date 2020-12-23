import {combineReducers }  from 'redux'
import user from './userReducer'
import product from './productReducer'
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const rootReducer=combineReducers({
    user,
    product
})

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"]
  };

export default persistReducer(persistConfig, rootReducer);