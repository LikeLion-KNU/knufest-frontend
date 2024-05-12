import styled from "styled-components";

export const PageContainer = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    position: relative;
`;

export const StyledImage = styled.div`
    position: relative;
    width: 100%;
    height: auto;

    img {
        width: 100%;
        height: auto;
    }

    button {
        position: absolute;
        top: 85%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export const CountdownContainer = styled.div`
    width: 450px;
    margin: 2rem;

    div {
        margin: 1rem 0;
    }
`;
