import {createSelector} from "reselect";

const languageSelector = state => state.language;

const makeLanguageSelector = createSelector(languageSelector, language => language);
const makeLocaleSelector = createSelector(languageSelector, language => language.locale);

export {languageSelector, makeLanguageSelector, makeLocaleSelector};