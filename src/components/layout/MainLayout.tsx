import { Outlet, useLocation } from "react-router-dom";

import styled from "styled-components";

import { useScrollToTop } from "@/hooks/useScrollToTop";

import Navigation from "../navigation/Navigation";
import Footer from "./Footer";
import { MainContent } from "./MainContent";

export const Main = styled.main<{ isHomePage: boolean }>`
    width: min(100%, 700px);
    margin: 0px auto;
    padding-top: ${({ isHomePage }) => (isHomePage ? "0px" : "81px")};
`;

export const MainLayout = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/"; // 메인 페이지(HomePage) padding 0px로 설정

    useScrollToTop();

    return (
        <>
            <Navigation />
            <Main isHomePage={isHomePage}>
                <MainContent isHomePage={isHomePage}>
                    <Outlet />
                </MainContent>
            </Main>
            <Footer />
        </>
    );
};
