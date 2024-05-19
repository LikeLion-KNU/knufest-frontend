import styled from "styled-components";

export const BackImg = styled.img`
    position: absolute;
    top: -30px;
    z-index: -10;
    width: 100%;
`;

export const DateWrapper = styled.div`
    width: 100%;
    margin-top: 86px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 36px;

    p {
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }
`;

export const LocationWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 30px 0;
    flex-wrap: wrap;
`;

export const LocationButton = styled.button<{ onClick?: () => void }>`
    display: flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 20px;
    padding: 10px 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const TimeTableSection = styled.div`
    margin: 20px 0;
    padding: 20px;
    width: 80%;
`;

export const ScrollTopButton = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #5d5a88;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
