import {GET_NASA_ASTEROIDS, GET_NASA_PLANETARY} from "./types";
import {ERROR, SUCCESS} from "../../middleware/types";

const initialState = {
    planetary: {},
    asteroids: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_NASA_PLANETARY + SUCCESS:
            return {
                ...state,
                planetary: {
                    ...state.planetary,
                    data: action.payload.data
                },
            };

        case GET_NASA_PLANETARY + ERROR:
            return {
                ...state,
                planetary: {
                    ...state.planetary,
                    error: action.error
                },
            };

        case GET_NASA_ASTEROIDS + SUCCESS:
            return {
                ...state,
                asteroids: {
                    ...state.asteroids,
                    data: action.payload.data
                },
            };

        case GET_NASA_ASTEROIDS + ERROR:
            return {
                ...state,
                asteroids: {
                    ...state.asteroids,
                    error: action.error
                },
            };

        default:
            return state;
    }
};

export default reducer;