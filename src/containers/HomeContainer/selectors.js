import {createSelector} from "reselect";

const homeSelector = state => state.home;

const makeHomeSelector = createSelector(homeSelector, home => home);

export {homeSelector, makeHomeSelector};
