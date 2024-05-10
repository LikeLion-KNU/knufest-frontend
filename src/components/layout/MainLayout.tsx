import { Outlet } from "react-router-dom";

import styled from "styled-components";

import Navigation from "../navigation/Navigation";
import Footer from "./Footer";

export const Main = styled.main`
    width: min(100%, 700px);
    margin: 0px auto;
`;

export const MainLayout = () => {
    return (
        <>
            <Navigation />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </>
    );
};
