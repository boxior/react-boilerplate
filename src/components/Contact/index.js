import React from "react";
import styled from "styled-components";
import {FormattedMessage} from "react-intl";
import messages from "./messages";

const ContactWrap = styled.div`
    
`;

const ContactView = () => {

    return (
        <ContactWrap>
            <h1><FormattedMessage {...messages.title}/></h1>
        </ContactWrap>
    );
};

export default ContactView;
