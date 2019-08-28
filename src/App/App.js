import React from 'react';
import LanguageProvider from "../containers/LanguageContainer";
import BaseStyles from "../utils/BaseStyles";
import {ThemeProvider} from "@material-ui/styles";
import materialUiTheme from "../utils/materialUiTheme";
import CoreLayout from "./CoreLayout";

function App() {
    return (
        <ThemeProvider theme={materialUiTheme}>
            <BaseStyles/>
            <LanguageProvider>
                <CoreLayout/>
            </LanguageProvider>
        </ThemeProvider>
    );
}

export default App;