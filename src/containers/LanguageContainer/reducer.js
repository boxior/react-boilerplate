import {SET_LOCALE} from "./types";

export const initialState = {
    locale: "en"
};

export default function (state = initialState, action) {
    switch (action.type) {

        case SET_LOCALE:
            return {
                ...state,
                locale: action.locale,
            };

        default:
            return state;
    }
}