import React from "react";
import {FormControl, InputLabel, Select, MenuItem} from "@material-ui/core";
import {messagesMap} from "../../../../containers/LanguageContainer";
import {connect} from "react-redux";
import {makeLocaleSelector} from "../../../../containers/LanguageContainer/selectors";
import {compose} from "redux";
import {setLocale} from "../../../../containers/LanguageContainer/actions";

const mapStateToProps = state => ({
    locale: makeLocaleSelector(state),
});

const mapDispatchToProps = dispatch => ({
    setLocale: locale =>
        dispatch(setLocale(locale))
});

function SelectLanguageView(props) {

    const {
        locale,
        setLocale,
    } = props;
    console.log("locale", locale);
    const handleChange = (e) => {
        console.log("e.target.value", e.target.value);
        setLocale(e.target.value);
    };

    return (
        <FormControl>
            <InputLabel>Language</InputLabel>
            <Select
                value={locale}
                onChange={handleChange}
            >
                {Object.keys(messagesMap).map(key => {
                    console.log("key", key);
                    return (
                        <MenuItem key={key} value={key}>
                            {key}
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    );
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    withConnect,
)(SelectLanguageView);
