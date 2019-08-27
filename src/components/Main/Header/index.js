import React from "react";
import styled from "styled-components";
import LogoView from "./Logo";
import MenuView from "./Menu";
import {anchorsMap} from "../../../utils/variables";
import SelectLanguageView from "./SelectLanguage";
import {Container} from "../StyledComponents";


const HeaderContainer = styled(Container)`
    width: 100%;
    position: fixed;
    height: 60px;
    background-color: aqua;

    display: flex;  
    align-items: center;
    justify-content: space-between;
`;

function HeaderView() {

    return (
        <HeaderContainer id={anchorsMap.header}>
            <LogoView/>
            <MenuView/>
            <SelectLanguageView/>
        </HeaderContainer>
    );
}

export default HeaderView;
