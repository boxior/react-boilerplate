import React, {Component} from "react";
import {Helmet} from "react-helmet";
import Home from "../../components/Home";
import {compose} from "redux";
import {connect} from "react-redux";
import {makeHomeSelector} from "./selectors";
import {getAllNasa, getNasaAsteroids, getNasaPlanetary} from "./actions";
import PropTypes from "prop-types";
import {setLocale} from "../LanguageContainer/actions";
import LayoutView from "../../components/Main/Layout";
import {injectIntl} from "react-intl";
import messages from "./messages";

const mapStateToProps = state => ({
    home: makeHomeSelector(state)
});

const mapDispatchToProps = dispatch => ({
    getNasaPlanetary: () =>
        dispatch(getNasaPlanetary()),
    setLocale: locale =>
        dispatch(setLocale(locale)),
    getAllNasa: () =>
        dispatch(getAllNasa()),
    getNasaAsteroids: () =>
        dispatch(getNasaAsteroids())
});

class HomeContainer extends Component {

    render() {
        const {
            getNasaPlanetary,
            getNasaAsteroids,
            setLocale,
            getAllNasa,
            home,
            intl,
        } = this.props;

        return (
            <>
                <Helmet>
                    <title>{intl.formatMessage(messages.metaTitle)}</title>
                    <meta name="description" content="Home page"/>
                </Helmet>
                <LayoutView>
                    <Home
                        getNasaPlanetary={getNasaPlanetary}
                        getNasaAsteroids={getNasaAsteroids}
                        getAllNasa={getAllNasa}
                        setLocale={setLocale}
                        home={home}
                    />
                </LayoutView>
            </>
        );
    }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    withConnect,
    injectIntl,
)(HomeContainer);

HomeContainer.propTypes = {
    getAllNasa: PropTypes.func,
    getNasaAsteroids: PropTypes.func,
    getNasaPlanetary: PropTypes.func,
    home: PropTypes.object,
    setLocale: PropTypes.func
};
