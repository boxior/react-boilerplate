import React from "react";
import HomePage from "../../containers/HomeContainer/Loadable";
import ContactPage from "../../containers/ContactContainer/Loadable";
import {Router, Route, Switch} from "react-router-dom";
import {history} from "../../index";

const CoreLayout = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path={'/'} component={HomePage}/>
                <Route path={'/contact'} component={ContactPage}/>
            </Switch>
        </Router>
    );
};

export default CoreLayout;