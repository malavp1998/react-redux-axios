
import { combineReducers } from "redux";
import { productReducer } from "./productsReducer";
import {filterReducer} from "./filterReducer";


const reducers = combineReducers(
    {
        allProducts : productReducer,
        filters: filterReducer
    }
);

export default reducers;



