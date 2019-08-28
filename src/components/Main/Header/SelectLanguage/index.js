import React from 'react';
import PropTypes from "prop-types";
import {FormControl, InputLabel, Select, MenuItem} from "@material-ui/core";
import {messagesMap} from "../../../../containers/LanguageContainer";
import {connect} from "react-redux";
import {makeLocaleSelector} from "../../../../containers/LanguageContainer/selectors";
import {compose} from "redux";
import {setLocale} from "../../../../containers/LanguageContainer/actions";
import styled from "styled-components";

const FormControlS = styled(FormControl)`
    && {
      min-width: 100px;
    }
`;

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

    const handleChange = (e) => {
        setLocale(e.target.value);
    };

    return (
        <FormControlS component={`div`}>
            <InputLabel>Language</InputLabel>
            <Select
                value={locale}
                onChange={handleChange}
            >
                {Object.keys(messagesMap).map(key => {
                    return (
                        <MenuItem component={`div`} button={false} key={key} value={key}>
                            {key}
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControlS>
    );
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    withConnect,
)(SelectLanguageView);

SelectLanguageView.propTypes = {
    locale: PropTypes.string,
    setLocale: PropTypes.func
};
