
import { combineReducers } from "redux";
import { productReducer } from "./productsReducer";
import {filterReducer} from "./filterReducer";
import { searchReducer } from "./seachReducer";


const reducers = combineReducers(
    {
        allProducts : productReducer,
        filters: filterReducer,
        search : searchReducer
    }
);

export default reducers;



