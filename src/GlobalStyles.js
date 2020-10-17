import { createGlobalStyle } from "styled-components";

export const blueCharcoal = "#282C34";
export const rhino = '#3B414E';
export const shuttleGray = "#5C6370";
export const heather = "#ABB2BF";
export const lavendar = "#EAF1FD"
export const olivine = "#98C379";
export const froly = "#E06C75";
export const cornflowerBlue = "#61AFEF";
export const mediumOrchid = "#C678DD";
export const corvette = "#E5C074";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    body {
        margin: 0 0 0 0px;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: ${blueCharcoal};

    }

    .App {
        display: flex;
        flex-direction: row;
        widht: 100vw;
    }

    .mainBody {
        width: 100vw;
        padding 60px;
        text-align: left;
        font-size: calc(10px + 2vmin);
        color: ${lavendar};
    }

    .App-header {
    }

    &::-webkit-scrollbar {
        width: 10px; 
        height 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${lavendar};
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
`;

export default GlobalStyle;
