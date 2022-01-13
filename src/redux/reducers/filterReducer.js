import { ActionTypes } from "../constants/action-types"

const initialState = {
    launchStatus : undefined
}

export const filterReducer = (state = initialState , { type, payload }) =>{

    switch(type)
    {
        case ActionTypes.SET_LAUNCH_STATUS_FILTER:
            return {...state, launchStatus : payload};
        default:
            return state;
    }

}
