import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import mainPageImage from "@/assets/main_page.jpg";
import {
  PageContainer,
  MainContent,
  StyledImage,
} from "@/styles/homepage.styled";

const HomePage: React.FC = () => {
  return (
    <PageContainer>
      <Navigation />
      <MainContent>
        <StyledImage src={mainPageImage} alt="Main Page" />
        <StyledImage src={mainPageImage} alt="Main Page" />
        <StyledImage src={mainPageImage} alt="Main Page" />
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default HomePage;
