import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import fetchMiddleware from "../middleware";

const middleware = [thunk, fetchMiddleware];
const composedEnhancers = composeWithDevTools(applyMiddleware(...middleware));

export default createStore(rootReducer, composedEnhancers);