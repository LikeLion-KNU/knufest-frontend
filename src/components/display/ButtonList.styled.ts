import styled from "styled-components";

export const ButtonListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;

    border: 1px solid #d4d2e3;
    border-radius: 24px;

    button {
    }

    button > div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
