import styled from "styled-components";

export const Card = styled.div`
    width: 230px;
    height: 100%;
    border-radius: 25px;
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 25%);
    position: relative;
    overflow: hidden;
    scroll-snap-align: center;
    flex-shrink: 0;
    span {
        position: absolute;
        bottom: 14px;
        left: 20px;
        z-index: 9;
    }
`;

export const Picture = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
`;
