import { ActionTypes } from "../constants/action-types"

const initialState = {
    launchStatus : undefined,
    upcomingStatus: undefined
}

export const filterReducer = (state = initialState , { type, payload }) =>{

    switch(type)
    {
        case ActionTypes.SET_LAUNCH_STATUS_FILTER:
            return {...state, launchStatus : payload};
        case ActionTypes.SET_UPCOMING_STATUS_FILTER:
            return {...state, upcomingStatus : payload};
        default:
            return state;
    }

}
