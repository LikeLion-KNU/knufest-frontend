import styled from "styled-components";

export const BackImg = styled.img`
    position: absolute;
    top: -30px;
    z-index: -10;
    width: 100%;
`;

export const GuestContainer = styled.div`
    width: 100%;
    margin-top: 86px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 36px;
    p {
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 25%);
    }
`;

export const GuestCard = styled.div`
    height: 300px;
    display: flex;
    flex-direction: row;
    gap: 25px;
    padding: 0 50px;
    margin-top: 44px;
    overflow: hidden;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;
