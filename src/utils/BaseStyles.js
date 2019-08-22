import styledNormalize from 'styled-normalize'
import {createGlobalStyle} from 'styled-components'
import {colorMap, fontsMap} from "./variables";

const getFont = (family, format) => require(`../fonts/${family}/${family}.${format}`);

export default createGlobalStyle`
    ${styledNormalize};
      
    * {
      box-sizing: border-box;
    }
    
     @font-face {
        font-family: 'Lato';
        font-display: auto;
        src: url(${getFont(fontsMap.Lato.name, "woff2")}) format('woff2'),
             url(${getFont(fontsMap.Lato.name, "woff")}) format('woff'),
             url(${getFont(fontsMap.Lato.name, "ttf")}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    
    body {
        margin: 0;
        padding: 0;
        font-family: ${fontsMap.Lato.family};
        font-size: 18px;
        color: ${colorMap.primary.grey};
        
        #root {
            display: flex;
            min-width: 320px;
            overflow: hidden;
            background-color: ${colorMap.primary.white};
        }
    }
        
    a, button {
      &:hover {
        cursor:pointer;
      }
    }
    
    button, input {
      outline: none;
      border: 0;
    }`