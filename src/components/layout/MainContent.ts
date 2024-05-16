import styled from "styled-components";

export const MainContent = styled.div<{ isHomePage: boolean }>`
    margin-top: ${({ isHomePage }) => (isHomePage ? "0px" : "50px")};
    position: relative;
`;
