import { ActionTypes } from "../constants/action-types"

const intialState = {
    myProducts : [
        {
            id : 1,
            title : "Dipesh",
            category : "programmer"
        },
        {
            id: 2,
            title: "dfgh",
            category: "sdfgh"
        }
    ]
}

export const productReducer = (state = intialState , { type, payload }) =>{

    switch(type)
    {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }

}



