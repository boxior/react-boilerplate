import {ERROR, START, SUCCESS} from "./types";
import axios from "axios";

const fetchMiddleware = store => next => action => {
    const {dispatch} = store;
    const {apiOptions, type} = action;

    const defaultOptions = {};

    if (apiOptions) {
        dispatch({type: type + START});
        return axios({
            ...defaultOptions,
            ...apiOptions,
        })
            .then(res => {
                dispatch({
                    type: type + SUCCESS,
                    payload: res
                });
                return Promise.resolve(res);
            })
            .catch(res => {
                dispatch({
                    type: type + ERROR,
                    error: res
                });
                return Promise.reject(res);
            });
    }

    return next(action);
};

export default fetchMiddleware;