import React from "react";
import styled from "styled-components";
import {FormattedMessage} from "react-intl";
import messages from "./messages";
import {Link} from "react-router-dom";

const LogoWrap = styled(Link)`
    margin-right: 15px;
`;

function LogoView() {

    return (
        <LogoWrap to={"/"}>
            <FormattedMessage {...messages.title}/>
        </LogoWrap>
    );
}

export default LogoView;
