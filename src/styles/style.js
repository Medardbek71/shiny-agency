import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
    *{
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    body{
        /* Ici cette syntaxe revient au même que
        background-color: ${({ props }) =>
        props.isDarkMode ? '#2F2E41' : 'white'};
        */
        background-color: ${({ isDarkMode }) => (isDarkMode ? 'black' : 'white')};
        margin: 0; 
    }
`
export default StyledGlobalStyle