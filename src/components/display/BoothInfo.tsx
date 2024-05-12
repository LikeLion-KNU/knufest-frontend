import React from "react";

import mainPageImage from "@/assets/main_page.jpg";

import { BoothDetail, BoothImg, BoothName, ImgWrapper, InfoWrapper } from "./BoothInfo.styled";

//zustand 로 refactor 필요
const BoothInfo: React.FC = () => {
    return (
        <>
            <ImgWrapper>
                <BoothImg src={mainPageImage} />
            </ImgWrapper>
            <InfoWrapper>
                <BoothName>컴퓨터학부 포차 이름</BoothName>
                <BoothDetail>컴퓨터학부 포차 정보</BoothDetail>
            </InfoWrapper>
        </>
    );
};

export default BoothInfo;
