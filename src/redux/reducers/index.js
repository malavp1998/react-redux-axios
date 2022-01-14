
import { combineReducers } from "redux";
import { missionReducer } from "./missionReducer";
import {filterReducer} from "./filterReducer";
import { searchReducer } from "./seachReducer";


const reducers = combineReducers(
    {
        allMissions : missionReducer,
        filters: filterReducer,
        search : searchReducer
    }
);

export default reducers;



