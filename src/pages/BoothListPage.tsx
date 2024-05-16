import React from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

import { Variants } from "framer-motion";

import { Booth } from "@/components/display/Booth";
import { Map } from "@/components/map/Map";

// import { useVisitor } from "@/hooks/useVisitor";
import { PageContainer, MainContent, VisibleList } from "./BoothListPage.styled";

const listVariants: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
};

const BoothListPage: React.FC = () => {
    /**
     *  a: 기타
     *  b: 복합
     *  c: 주막
     */
    const lists = ["컴퓨터학부 주점이름", "전자 주점이름", "토목 주점이름", "기계 주점이름", "식품공학부 주점이름"];
    const num = 356;
    //list랑 index, heart는 받아온 값으로 수정

    // const { visitorId } = useVisitor();

    return (
        <PageContainer>
            <MainContent>
                <TransformWrapper initialScale={0.5} minScale={0.5}>
                    <TransformComponent
                        wrapperClass="map-wrapper"
                        contentClass="map"
                        wrapperStyle={{ width: "100%", aspectRatio: "4/3" }}
                    >
                        <Map />
                    </TransformComponent>
                </TransformWrapper>

                <VisibleList variants={listVariants} initial="hidden" animate="visible">
                    {lists.map((name, index) => {
                        return <Booth index={index} name={name} num={num} likable={true} />;
                    })}
                </VisibleList>
            </MainContent>
        </PageContainer>
    );
};
export default BoothListPage;
