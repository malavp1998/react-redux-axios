import { ActionTypes } from "../constants/action-types"

const intialState = {
    products : [
    ]
}

export const productReducer = (state = intialState , { type, payload }) =>{
    switch(type)
    {
        case ActionTypes.SET_MISSIONS:
            return {...state, products : payload};
        default:
            return state;
    }

}



