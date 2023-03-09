import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'IBM Plex Sans', sans-serif;
    }

        section:first-child{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
            background-color: orange;
        }

        section:last-child{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            flex-direction: column;
        }
    

`