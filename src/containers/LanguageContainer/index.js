/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {IntlProvider} from 'react-intl';
import {makeLocaleSelector} from "./selectors";
import messages_de from "../../translations/de.json";
import messages_en from "../../translations/en.json";

export const messagesMap = {
    'de': messages_de,
    'en': messages_en
};

const mapStateToProps = state => ({
    locale: makeLocaleSelector(state)
});

export class LanguageProvider extends React.PureComponent {

    static propTypes = {
        children: PropTypes.element.isRequired,
        locale: PropTypes.string
    };

    render() {
        const {locale, children} = this.props;

        return (
            <IntlProvider
                locale={locale}
                key={locale}
                messages={messagesMap[locale]}
            >
                {React.Children.only(children)}
            </IntlProvider>
        );
    }
}

export default connect(mapStateToProps)(LanguageProvider);
