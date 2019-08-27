import React from 'react'
import ContactView from "../../components/Contact";
import LayoutView from "../../components/Main/Layout";
import {Helmet} from "react-helmet";
import messages from "./messages";
import {injectIntl} from "react-intl";
import {compose} from "redux";
import PropTypes from "prop-types";

const ContactContainer = (props) => {

    const {
        intl,
    } = props;

    return (
        <>
            <Helmet>
                <title>{intl.formatMessage({...messages.metaTitle})}</title>
                <meta name="description" content="Home page"/>
            </Helmet>
            <LayoutView>
                <ContactView/>
            </LayoutView>
        </>
    );
};

export default compose(
    injectIntl,
)(ContactContainer);

ContactContainer.propTypes = {
    intl: PropTypes.object
};
