import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    font-size: 62.5%;
    --White: #F9F9F9;
    --White-200: #EBE9EA;
    --Gray: #474747;
    --Black-Light: #181818;
}

body {
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    min-height: 100vh;
    min-width: 100vw;
}
`