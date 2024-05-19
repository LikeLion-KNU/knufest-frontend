import styled from "styled-components";

export interface ISendImg {
    src: string;
}

export const DetailPageWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    word-break: keep-all;

    p {
        width: 90%;
    }
`;
export const BottomBox = styled.div`
    height: 70px;
    width: min(100%, 700px);
    position: fixed;
    display: flex;
    bottom: 0;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;
export const ContentContainer = styled.form`
    height: 46px;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    border: 1px solid #3f3a6c;
    border-radius: 30px;
    position: relative;

    input {
        color: #5d5a88;
        border: none;
        padding: 0px 25px;
        padding-right: 0;
        width: 80%;
        height: 50%;
        background: none;
        font-size: 14px;
        align-content: center;
        resize: none;
        -ms-overflow-style: none;
        &::-webkit-scrollbar {
            display: none;
        }
        &:focus {
            outline: none;
        }
        &::placeholder {
            color: #5d5a88;
        }
    }
`;

export const SubBtn = styled.button`
    display: flex;
    width: 30px;
    height: 30px;
    border: none;
    background-color: #e7e6f2;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 10px;
    padding: 0;
`;

export const SendImg = styled.img`
    width: 50%;
`;

export const ScrollTopButton = styled.button`
    position: fixed;
    bottom: 80px;
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
