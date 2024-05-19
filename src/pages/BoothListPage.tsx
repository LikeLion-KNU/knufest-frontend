import React, { useCallback, useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

import { Variants } from "framer-motion";

import { Booth } from "@/components/display/Booth";
import { Loader } from "@/components/feedback/Loader";
import { Map } from "@/components/map/Map";
import { Paragraph } from "@/components/typography/Paragraph";
import { Text } from "@/components/typography/Text";

import { useAllBooth } from "@/services/booth/booth.hooks";

import { BoothSearchInput, VisibleList } from "./BoothListPage.styled";

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
    const [input, setInput] = useState<string>("");

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }, []);

    const { isPending, boothList } = useAllBooth();
    return (
        <>
            <Paragraph size="m" weight="bold" variant="darkpurple">
                <Text size="m" weight="bold">
                    좌, 우로 스크롤 해주세요!
                </Text>
            </Paragraph>

            <TransformWrapper initialScale={0.5} minScale={0.5}>
                <TransformComponent
                    wrapperClass="map-wrapper"
                    contentClass="map"
                    wrapperStyle={{ width: "100%", aspectRatio: "4/3" }}
                >
                    <Map />
                </TransformComponent>
            </TransformWrapper>

            <BoothSearchInput placeholder="부스이름, 부스아이디로 검색해주세요!" onChange={handleChange} />

            <VisibleList variants={listVariants} initial="hidden" animate="visible">
                {isPending ? (
                    <Loader />
                ) : (
                    boothList &&
                    boothList
                        .filter((booth) => {
                            return booth.boothnum === parseInt(input) || booth.boothName.includes(input);
                        })
                        .map((booth) => {
                            return (
                                <Booth
                                    isNavigatable={true}
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
