import store from "./store/createStore";
import {Provider} from "react-redux";
import React from "react";
import App from "./App/App";

export default function Root() {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}