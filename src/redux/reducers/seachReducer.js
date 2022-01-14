import { ActionTypes } from "../constants/action-types"

const initialState = {
    rocketName : ""
}

export const searchReducer = (state = initialState , { type, payload }) =>{

    switch(type)
    {
        case ActionTypes.SET_ROCKET_NAME:
            return {...state, rocketName : payload};
        default:
            return state;
    }

}
