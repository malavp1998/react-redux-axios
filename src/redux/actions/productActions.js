import { ActionTypes } from "../constants/action-types";
import axios from "axios";

export function setMissions() {
    return function (dispatch) {
        return axios.get(`https://api.spacexdata.com/v3/launches`)
            .then(({data}) => dispatch({
                type: ActionTypes.SET_MISSIONS,
                payload: data
            }))
            .catch((err) => {
                console.log("err ", err)
            });
    }
}

