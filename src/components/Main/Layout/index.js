import React from "react";
import styled from "styled-components";
import FooterView from "../Footer";
import HeaderView from "../Header";
import PropTypes from "prop-types";
import LayoutMainView from "./LayoutMain";

const LayoutWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    width: 100%;
`;

function LayoutView(props) {

    const {
        children,
    } = props;

    return (
        <LayoutWrap>
            <HeaderView/>
            <LayoutMainView>
                {children}
            </LayoutMainView>
            <FooterView/>
        </LayoutWrap>
    );
}

export default LayoutView;

LayoutView.propTypes = {
    children: PropTypes.any
};
