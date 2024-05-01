import React from "react";
import HomePage from "./components/HomePage";
import { GlobalStyle } from "./app.styled";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <HomePage />
    </>
  );
};

export default App;
