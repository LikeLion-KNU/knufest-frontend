import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

  @font-face {
    font-family: "MesloLGS NF Bold";
    src: url("src/assets/MesloLGS-NF-Bold.ttf") format("truetype");
  }

  @font-face {
    font-family: "Blinker SemiBold";
    src: url("src/assets/Blinker-SemiBold.ttf") format("truetype");
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard', sans-serif;
  }
`;
