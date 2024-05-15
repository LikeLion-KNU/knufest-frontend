import React from "react";

import { Variants } from "framer-motion";

import { Booth } from "@/components/display/Booth";
import { Map } from "@/components/map/Map";

import { useBooth } from "@/hooks/useBooth";

// import Map from "./Map";
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
    const { visibleBooth } = useBooth();

    /**
     *  a: 기타
     *  b: 복합
     *  c: 주막
     */

    return (
        <PageContainer>
            <MainContent>
                <div id="map-container" style={{ width: "100%", height: "200px", overflow: "scroll" }}>
                    <Map />
                </div>

                <VisibleList variants={listVariants} initial="hidden" animate="visible">
                    {visibleBooth?.map((booth, index) => {
                        return <Booth index={index} name={booth} heart={0} />;
                    })}
                </VisibleList>
            </MainContent>
        </PageContainer>
    );
};
export default BoothListPage;
