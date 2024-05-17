import styled from "styled-components";

export const MainContent = styled.div<{ isHomePage: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: ${({ isHomePage }) => (isHomePage ? "0px" : "50px")};
    position: relative;
`;
