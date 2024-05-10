import React from "react";

import { Pagination } from "@/components/navigation/Pagination";

import { PageContainer, MainContent, StyledImage } from "@/pages/HomePage.styled";

import mainPageImage from "@/assets/main_page.jpg";

const HomePage: React.FC = () => {
    return (
        <PageContainer>
            <MainContent>
                <StyledImage src={mainPageImage} alt="Main Page" />
            </MainContent>

            <Pagination />
        </PageContainer>
    );
};

export default HomePage;
