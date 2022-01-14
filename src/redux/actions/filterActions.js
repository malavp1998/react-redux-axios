import { ActionTypes } from "../constants/action-types";

export const updateLaunchStatusFilter = (launchStatus) => {
    return {
        type: ActionTypes.SET_LAUNCH_STATUS_FILTER,
        payload: launchStatus
    };
};

export const updateUpcomingStatusFilter = (upcomingStatus) => {
    return {
        type: ActionTypes.SET_UPCOMING_STATUS_FILTER,
        payload: upcomingStatus
    };
};

export const updateLaunchDateFilter = (upcomingStatus) => {
    return {
        type: ActionTypes.SET_LAUNCH_DATE_FILTER,
        payload: upcomingStatus
    };
};