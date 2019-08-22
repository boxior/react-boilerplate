import PropTypes from 'prop-types'
import React from "react";
import {FormattedMessage} from "react-intl";
import messages from "./messages";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

const ButtonS = styled(Button)`
    background: transparent;
    margin: 10px;
    padding: 5px;
`;

const LintToContact = styled(Link)`
    
`;

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
            <ButtonS type={`button`} onClick={handleGetAllNasa}>Get Nasa All</ButtonS>
            <LintToContact to={"/contact"}>LintToContact</LintToContact>
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
};