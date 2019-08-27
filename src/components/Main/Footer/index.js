import React from "react";
import styled from "styled-components";
import {FormattedMessage} from "react-intl";
import messages from "./messages";
import {Container} from "../StyledComponents";

const FooterWrap = styled.div`
    min-height: 100px;
    background-color: antiquewhite;
    width: 100%;
`;

const FooterContainer = styled(Container)`
    
`;

function FooterView() {

    return (
        <FooterWrap>
            <FooterContainer>
                <FormattedMessage {...messages.title}/>
            </FooterContainer>
        </FooterWrap>
    );
}

export default FooterView;
