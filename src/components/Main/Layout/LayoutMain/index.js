import React, {useEffect, useState} from 'react'
import PropTypes from "prop-types";
import styled from "styled-components";
import {anchorsMap} from "../../../../utils/variables";

const LayoutMainWrap = styled.div`
    flex-grow: 1; 
    padding-top: ${({headerHeight}) => headerHeight}px;
`;

function LayoutMainView(props) {

    const {
        children,
    } = props;

    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        setHeaderHeight(getHeaderHeight());
    }, []);

    return (
        <LayoutMainWrap headerHeight={headerHeight}>
            {children}
        </LayoutMainWrap>
    );
}

export default LayoutMainView;

const getHeaderHeight = () => {
    const header = document.getElementById(anchorsMap.header);

    return header.clientHeight;
};

LayoutMainView.propTypes = {
    children: PropTypes.any
};
