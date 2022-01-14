import { ActionTypes } from "../constants/action-types";

export const setRocketName = (rocketName) => {
    return {
        type: ActionTypes.SET_ROCKET_NAME,
        payload: rocketName
    };
};