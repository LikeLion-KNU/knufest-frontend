import React from "react";
import { useState, useRef, useCallback, useEffect } from "react";

import jannaviImage from "@/assets/jannavi.jpg";
import norazoImage from "@/assets/norazo.jpg";

import { Text } from "../typography/Text";
import {
    BoothDetail,
    BoothImg,
    BoothName,
    ImgWrapper,
    ImgContainer,
    InfoWrapper,
    DotWrapper,
    Dot,
} from "./BoothInfo.styled";
import { Heart } from "./Heart";

//zustand 로 refactor 필요
const BoothInfo: React.FC = () => {
    const boothdetail =
        "멋쟁이사자처럼 주점에서는 노래방 마이크로 김대건이 노래를 하고 춤도 추고 히어로 서사에 대해 설명할 것입니다.";
    const boothName = "멋쟁이 사자처럼 주점";
    const num = 365;
    const boothImg = [jannaviImage, norazoImage, jannaviImage];

    const [currentIndex, setCurrentIndex] = useState(0);
    const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

    const updateCurrentIndex = useCallback((entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = slideRefs.current.indexOf(entry.target as HTMLDivElement);
                if (index !== -1) {
                    setCurrentIndex(index);
                }
            }
        });
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(updateCurrentIndex, {
            root: null,
            threshold: 0.5,
        });

        slideRefs.current.forEach((slide) => {
            if (slide) {
                observer.observe(slide);
            }
        });

        return () => {
            slideRefs.current.forEach((slide) => {
                if (slide) {
                    observer.unobserve(slide);
                }
            });
        };
    }, [updateCurrentIndex]);

    return (
        <>
            <ImgContainer>
                <ImgWrapper>
                    {boothImg.map((src, index) => {
                        return <BoothImg key={index} src={src} ref={(el) => (slideRefs.current[index] = el)} />;
                    })}
                </ImgWrapper>
                <DotWrapper>
                    {boothImg.map((_, index) => (
                        <Dot key={index} active={index === currentIndex} />
                    ))}
                </DotWrapper>
            </ImgContainer>
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
