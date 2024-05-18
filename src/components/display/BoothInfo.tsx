/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useRef, useCallback, useEffect } from "react";

import { IReadBoothByIdResponse } from "@/services/booth/booth.types";

import { Booth } from "./Booth";
import { BoothImg, ImgWrapper, ImgContainer, InfoWrapper, DotWrapper, Dot } from "./BoothInfo.styled";

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
            slide && observer.observe(slide);
        });

        return () => {
            slideRefs.current.forEach((slide) => {
                slide && observer.unobserve(slide);
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
                <Booth
                    index={boothDetail.boothnum}
                    name={boothDetail.boothName}
                    num={boothDetail.likes}
                    likeable={!boothDetail.likable}
                    category={boothDetail.categori}
                />
            </InfoWrapper>
        </>
    );
};

export default BoothInfo;
