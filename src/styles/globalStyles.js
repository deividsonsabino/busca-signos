import { createGlobalStyle } from "styled-components";
export default createGlobalStyle `
    *{
        margin:0;
        padding: 0;
        box-sizing:border-box;
        color: var(--white);
    }
    html, border-style, #root {
        max-height:100vh;
        max-width:100vw;
        width:100%;
        height:100%;
        background-image:url('https://image.freepik.com/vetores-gratis/fundo-de-desenho-abstrato-com-gradiente-de-azul-e-roxo_1048-13167.jpg');
        background-repeat:no-repeat;
        background-size:cover;
        font-family: 'Roboto', sans-serif;
    }
    *, button, input {
        border:0;
        background:none;
    }
    `;