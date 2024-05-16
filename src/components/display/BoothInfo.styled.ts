import styled from "styled-components";

export const ImgWrapper = styled.div`
    overflow: hidden;
    width: 90%;
    aspect-ratio: 1 / 1;
    border-radius: 20px;
    margin-bottom: 30px;
`;

export const BoothImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    width: 90%;
`;

export const BoothName = styled.div`
    background-color: #e7e6f2;
    border-radius: 20px;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    position: relative;
    flex-grow: 3;
    div {
        position: absolute;
        right: 10px;
    }
`;

export const BoothDetail = styled.div`
    padding: 0px 10px;
    hr {
        margin: 38px 0px;
        border: 1px solid #dddddd;
    }
`;
