import React, {Component} from "react";
import {Helmet} from "react-helmet";
import Home from "../../components/Home";
import {compose} from "redux";
import {connect} from "react-redux";
import {makeHomeSelector} from "./selectors";
import {getAllNasa, getNasaAsteroids, getNasaPlanetary} from "./actions";
import PropTypes from "prop-types";
import {setLocale} from "../LanguageContainer/actions";

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
        } = this.props;

        return (
            <>
                <Helmet>
                    <title>Home Page</title>
                    <meta name="description" content="Home page"/>
                </Helmet>
                <Home
                    getNasaPlanetary={getNasaPlanetary}
                    getNasaAsteroids={getNasaAsteroids}
                    getAllNasa={getAllNasa}
                    setLocale={setLocale}
                    home={home}
                />
            </>
        );
    }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(HomeContainer);

HomeContainer.propTypes = {
  getAllNasa: PropTypes.func,
  getNasaAsteroids: PropTypes.func,
  getNasaPlanetary: PropTypes.func,
  home: PropTypes.object,
  setLocale: PropTypes.func
}