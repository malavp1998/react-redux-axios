import { ActionTypes } from "../constants/action-types";

export const updateLaunchStatusFilter = (launchStatus) => {
    return {
        type: ActionTypes.SET_LAUNCH_STATUS_FILTER,
        payload: launchStatus
    };
};