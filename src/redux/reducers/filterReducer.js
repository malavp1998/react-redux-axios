import { ActionTypes } from "../constants/action-types"
import {LaunchDateFilterConstants} from "../../containers/LaunchDateFilterConstants";

const initialState = {
    launchStatus : undefined,
    upcomingStatus: undefined,
    launchDateDaysBefore: LaunchDateFilterConstants.SHOW_ALL
}

export const filterReducer = (state = initialState , { type, payload }) =>{

    switch(type)
    {
        case ActionTypes.SET_LAUNCH_STATUS_FILTER:
            return {...state, launchStatus : payload};
        case ActionTypes.SET_UPCOMING_STATUS_FILTER:
            return {...state, upcomingStatus : payload};
        case ActionTypes.SET_LAUNCH_DATE_FILTER:
            return {...state, launchDateDaysBefore : payload};
        default:
            return state;
    }

}
