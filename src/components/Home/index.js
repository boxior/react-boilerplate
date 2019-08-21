import PropTypes from 'prop-types'
import React from "react";
import {FormattedMessage} from "react-intl";
import messages from "./messages";

const Home = props => {
    const {
        home,
        getNasaPlanetary,
        getNasaAsteroids,
        getAllNasa,
        setLocale,
    } = props;

    const onChangeLocale = locale => () => {
        setLocale(locale);
    };

    const handleGetNasaPlanetary = () => {
        getNasaPlanetary();
    };

    const handleGetNasaAsteroids = () => {
        getNasaAsteroids();
    };

    const handleGetAllNasa = () => {
        getAllNasa();
    };

    console.log("home", home);

    return (
        <>
            <button type={`button`}><FormattedMessage {...messages.homeTitle}/></button>
            <button type={`button`} onClick={onChangeLocale(`en`)}>En</button>
            <button type={`button`} onClick={onChangeLocale(`de`)}>De</button>
            <button type={`button`} onClick={handleGetNasaPlanetary}>Get Nasa Planetary</button>
            <button type={`button`} onClick={handleGetNasaAsteroids}>Get Nasa Asteroids</button>
            <button type={`button`} onClick={handleGetAllNasa}>Get Nasa All</button>
        </>
    )
};
export default Home;

Home.propTypes = {
    getAllNasa: PropTypes.func,
    getNasaAsteroids: PropTypes.func,
    getNasaPlanetary: PropTypes.func,
    home: PropTypes.object,
    setLocale: PropTypes.func
}