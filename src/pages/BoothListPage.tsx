import React from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

import { Variants } from "framer-motion";

import { Map } from "@/components/map/Map";

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
                    {/* {visibleBooth?.map((booth, index) => {
                        return <Booth index={index} name={booth} heart={0} />;
                    })} */}
                </VisibleList>
            </MainContent>
        </PageContainer>
    );
};
export default BoothListPage;
