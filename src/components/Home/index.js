import PropTypes from 'prop-types'
import React from "react";
import {FormattedMessage} from "react-intl";
import messages from "./messages";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import {Container} from "../Main/StyledComponents";
import PlanetaryView from "./Planetary";
import _get from "lodash.get";
import AsteroidsView from "./Asteroids";

const HomeWrap = styled.div`
    
`;

const HomeContainer = styled(Container)`
    
`;

const ButtonS = styled(Button)`
    && {
        margin: 10px;
        padding: 5px;
    }
`;

const Home = props => {
    const {
        getNasaPlanetary,
        getNasaAsteroids,
        getAllNasa,
        home,
    } = props;

    const handleGetNasaPlanetary = () => {
        getNasaPlanetary();
    };

    const handleGetNasaAsteroids = () => {
        getNasaAsteroids();
    };

    const handleGetAllNasa = () => {
        getAllNasa();
    };

    const planetaries = _get(home, "planetary.data.results", []);
    const asteroids = _get(home, "asteroids.data.near_earth_objects.2015-09-07", []);

    return (
        <HomeWrap>
            <HomeContainer>
                <h1><FormattedMessage {...messages.homeTitle}/></h1>
                <ButtonS
                    variant={'outlined'}
                    color={'primary'}
                    onClick={handleGetNasaPlanetary}
                    style={{marginLeft: 0}}
                >
                    Get Nasa Planetary
                </ButtonS>
                <ButtonS
                    variant={'outlined'}
                    color={'primary'}
                    onClick={handleGetNasaAsteroids}
                >
                    Get Nasa Asteroids
                </ButtonS>
                <ButtonS
                    variant={'contained'}
                    color={'secondary'}
                    onClick={handleGetAllNasa}
                >
                    Get Nasa All
                </ButtonS>
                <br/>
                <PlanetaryView
                    rows={planetaries}
                />
                <AsteroidsView
                    rows={asteroids}
                />
            </HomeContainer>
        </HomeWrap>
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
