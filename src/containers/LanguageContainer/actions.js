import {SET_LOCALE} from "./types";

export const setLocale = locale => (dispatch) => {
    return dispatch({
        type: SET_LOCALE,
        locale
    })
};