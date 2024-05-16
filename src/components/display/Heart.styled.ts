import styled from "styled-components";

interface IHeart {
    likable: boolean;
}
export const HeartWrapper = styled.div<IHeart>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    font-size: 12px;
    line-height: 8px;
    color: ${(props) => (props.likable ? "#9874FF" : "#A4A4A4")};
`;
