import styled from "styled-components";

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

export const ElementContainer = styled.div`
    width: 85%;
    margin: 2rem;

    div {
        margin: 1rem 0;
    }
`;
