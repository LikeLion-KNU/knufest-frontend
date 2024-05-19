import styled from "styled-components";

export const ImgContainer = styled.div`
    margin: 0 auto;

    width: 100%;
    aspect-ratio: 1/1;
`;

export const ImgWrapper = styled.div`
    overflow: hidden;
    width: 90%;
    margin: 0 auto;
    aspect-ratio: 1 / 1;
    border-radius: 20px;
    margin-bottom: 10px;

    display: flex;
    flex-direction: row;
    overflow-x: auto;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const BoothImg = styled.img`
    width: 100%;
    aspect-ratio: 1/1;
    scroll-snap-align: center;
    flex-shrink: 0;
    object-fit: cover;
    object-position: 50% 50%;
    border-radius: 20px;
`;

export const DotWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 30px;
`;

export const Dot = styled.div<{ active: boolean }>`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ active }) => (active ? "#3F3A6C" : "#dddddd")};
    display: inline-block;
    transition: background-color 0.3s ease;
    cursor: pointer;
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
