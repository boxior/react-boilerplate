import React from "react";
import styled from "styled-components";
import {Button} from "@material-ui/core";
import {history} from "../../index";

const ContactWrap = styled.div`
    
`;

const LinkToHome = styled(Button)`
    && {
      background: green;
    }
`;

const ContactView = () => {
    const handleLinkToHome = () => {
        history.push(`/`);
    };

    return (
        <ContactWrap>
            <h1>Contact page</h1>
            <LinkToHome onClick={handleLinkToHome}>Link to home</LinkToHome>
        </ContactWrap>
    );
};

export default ContactView;
