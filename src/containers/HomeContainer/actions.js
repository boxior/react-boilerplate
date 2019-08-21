import {apiKey, apiUrl} from "../../requests";
import {GET_NASA_ASTEROIDS, GET_NASA_PLANETARY} from "./types";

export const getNasaPlanetary = () => (dispatch) => {
    return dispatch({
        type: GET_NASA_PLANETARY,
        apiOptions: {
            url: `${apiUrl}/planetary/earth/assets?lon=100.75&lat=1.5&begin=2014-02-01&api_key=${apiKey}`,
        },
    })
};

export const getNasaAsteroids = () => dispatch => {
    return dispatch({
        type: GET_NASA_ASTEROIDS,
        apiOptions: {
            url: `${apiUrl}/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${apiKey}`,
        },
    })
};

export const getAllNasa = () => async (dispatch) => {
    return dispatch(getNasaPlanetary())
        .then(res => {
            dispatch(getNasaAsteroids());
            return Promise.resolve(res);
        })
        .catch(err => {
            return Promise.reject(err);
        });
};