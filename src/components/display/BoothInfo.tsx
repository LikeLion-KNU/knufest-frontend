import React from "react";
import { useState, useRef, useCallback, useEffect } from "react";

import { IReadBoothByIdResponse } from "@/services/booth/booth.types";

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

interface BoothInfoProps {
    boothDetail: IReadBoothByIdResponse;
}

const BoothInfo: React.FC<BoothInfoProps> = ({ boothDetail }) => {
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
                    {boothDetail.urls.map((src, index) => {
                        return <BoothImg key={index} src={src} ref={(el) => (slideRefs.current[index] = el)} />;
                    })}
                </ImgWrapper>
                <DotWrapper>
                    {boothDetail.urls.map((_, index) => (
                        <Dot key={index} active={index === currentIndex} />
                    ))}
                </DotWrapper>
            </ImgContainer>
            <InfoWrapper>
                <BoothName>
                    <Text size="20px" weight="bold" variant="#3F3A6C">
                        {boothDetail.boothName}
                    </Text>
                    <Heart num={boothDetail.likes} likable={boothDetail.likable} />
                </BoothName>
                <BoothDetail>
                    <Text size="s" weight="normal">
                        {boothDetail.categori}
                    </Text>
                    <hr />
                </BoothDetail>
            </InfoWrapper>
        </>
    );
};

export default BoothInfo;
