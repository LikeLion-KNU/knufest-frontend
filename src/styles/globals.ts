import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "MesloLGS NF Bold";
    src: url("./assets/MesloLGS-NF-Bold.ttf") format("truetype");
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }
`;
