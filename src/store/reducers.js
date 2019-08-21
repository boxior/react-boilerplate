import {combineReducers} from "redux";
import home from "../containers/HomeContainer/reducer";
import language from "../containers/LanguageContainer/reducer";

export default combineReducers({
    home,
    language
});