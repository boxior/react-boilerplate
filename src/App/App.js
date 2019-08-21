import PropTypes from 'prop-types'
import React from 'react';
import HomeContainer from "../containers/HomeContainer";
import {IntlProvider} from "react-intl";
import {connect} from "react-redux";
import {compose} from "redux";
import {makeLocaleSelector} from "../containers/LanguageContainer/selectors";

const mapStateToProps = state => ({
    locale: makeLocaleSelector(state),
});

function App(props) {
    const {
        locale,
    } = props;

    return (
        <IntlProvider locale={locale}>
            <HomeContainer/>
        </IntlProvider>
    );
}

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(App);

App.propTypes = {
    locale: PropTypes.string
};