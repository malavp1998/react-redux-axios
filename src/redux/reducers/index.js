
import { combineReducers } from "redux";
import { productReducer } from "./productsReducer";


const reducers = combineReducers(
    {
        allProducts : productReducer
    }
);

export default reducers;



