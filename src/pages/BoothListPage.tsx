import React from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

import { Variants } from "framer-motion";

import { Booth } from "@/components/display/Booth";
import { Loader } from "@/components/feedback/Loader";
import { Map } from "@/components/map/Map";

import { useAllBooth } from "@/services/booth/booth.hooks";

import { VisibleList } from "./BoothListPage.styled";

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
    const { isPending, boothList } = useAllBooth();
    return (
        <>
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
                {isPending ? (
                    <Loader />
                ) : (
                    boothList &&
                    boothList.map((booth) => {
                        return (
                            <Booth
                                index={booth.boothnum}
                                name={booth.boothName}
                                num={booth.likes}
                                likeable={!booth.likable}
                                category={booth.categori}
                            />
                        );
                    })
                )}
            </VisibleList>
        </>
    );
};
export default BoothListPage;
