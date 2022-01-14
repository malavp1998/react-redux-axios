import { ActionTypes } from "../constants/action-types"

const intialState = {
    missions : [
    ]
}

export const missionReducer = (state = intialState , { type, payload }) =>{
    switch(type)
    {
        case ActionTypes.SET_MISSIONS:
            return {...state, missions : payload};
        default:
            return state;
    }

}



