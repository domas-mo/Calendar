import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
     @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');
     body {
        background: #e9eaee;
        font-family: 'Roboto', sans-serif;
        color: #676b76;
        font-size: 15px;
     }
   
     p {
        text-align: center;
        margin-top: 10px;
     }

`

export default GlobalStyle;