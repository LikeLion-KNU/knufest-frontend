import styled from "styled-components";

export const CommentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    gap: 40px;
`;
export const Title = styled.div`
    display: flex;
    gap: 4px;
    align-items: flex-end;
`;
export const CommentList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 90%;
    div > hr {
        margin-top: 38px;
        border: 1px solid #dddddd;
    }

    div:last-child > div + hr {
        display: none;
    }
`;

export const CommentContainer = styled.div``;
