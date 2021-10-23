import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width: 1700px) {
        font-size: 75%;
    }
}

body {
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
}

button {
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: #fff;
    transition: all 0.3s ease;

    &:hover {
        background-color: #23d997;
        color: #fff;
    }
}

h2 {
    font-weight: lighter;
    font-size: 4em;
}

h3 {
    color: #fff
}

h4 {
    font-weight: bold;
    font-size: 2rem;
}

p {
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem ;
    line-height: 150%;
}

a {
    font-size: 1.1rem;
}

span {
    font-weight: bold;
    color: #23d997;
}

`;
export default GlobalStyle;
