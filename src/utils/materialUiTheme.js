import { createMuiTheme } from '@material-ui/core/styles';
import {fontsMap} from "./variables";

export default createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: fontsMap.Lato.family
    },
    // Here you can set or override all your variables and settings related to styling.
    // https://material-ui.com/customization/themes/
});