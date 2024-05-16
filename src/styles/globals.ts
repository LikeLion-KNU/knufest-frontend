import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

  @font-face {
    font-family: "MesloLGS NF Bold";
    src: url("./assets/MesloLGS-NF-Bold.ttf") format("truetype");
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard', sans-serif;
  }

  #map{
    /* width: 100%; */
    width: auto;
    aspect-ratio: 4/3;
  }

  #map-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    height: auto;
    
    border: 1px solid black;

    svg{

    }
  }
`;
