import styled from "styled-components";

export interface IPageButton {
    active: boolean;
}

export const PageSkipButton = styled.button`
    display: block;
    width: 30px;
    height: 30px;

    border: none;

    background: none;

    &:hover {
        cursor: pointer;
    }
`;

export const PageButton = styled.button<IPageButton>`
    display: block;
    width: 30px;
    height: 30px;

    border: ${(props) => (props.active ? "1px solid #3f3a6c" : "none")};
    border-radius: 10px;

    color: #3f3a6c;
    background-color: #e7e6f2;

    &:hover {
        cursor: pointer;
    }
`;

export const PaginationContainer = styled.div`
    display: flex;
    gap: 12px;

    width: auto;
    height: 30px;
`;
