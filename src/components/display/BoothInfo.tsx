import React from "react";

import mainPageImage from "@/assets/main_page.jpg";

import { Text } from "../typography/Text";
import { BoothDetail, BoothImg, BoothName, ImgWrapper, InfoWrapper } from "./BoothInfo.styled";
import { Heart } from "./Heart";

//zustand 로 refactor 필요
const BoothInfo: React.FC = () => {
    const boothdetail =
        "멋쟁이사자처럼 주점에서는 노래방 마이크로 김대건이 노래를 하고 춤도 추고 히어로 서사에 대해 설명할 것입니다.";
    const boothName = "멋쟁이 사자처럼 주점";
    const num = 365;

    return (
        <>
            <ImgWrapper>
                <BoothImg src={mainPageImage} />
            </ImgWrapper>
            <InfoWrapper>
                <BoothName>
                    <Text size="20px" weight="bold" variant="#3F3A6C">
                        {boothName}
                    </Text>
                    <Heart num={num} likable={true} />
                </BoothName>
                <BoothDetail>
                    <Text size="s" weight="normal">
                        {boothdetail}
                    </Text>
                    <hr />
                </BoothDetail>
            </InfoWrapper>
        </>
    );
};

export default BoothInfo;
