import React from "react";

import { Variants } from "framer-motion";

import { Booth } from "@/components/display/Booth";

import { useVisitor } from "@/hooks/useVisitor";

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
    const lists = ["컴퓨터학부 주점이름", "전자 주점이름", "토목 주점이름", "기계 주점이름", "식품공학부 주점이름"];
    const heart = 356;
    //list랑 index, heart는 받아온 값으로 수정

    const { visitorId } = useVisitor();

    return (
        <PageContainer>
            <MainContent>
                <p>{visitorId}</p>
                {/*<Map />*/}
                <VisibleList variants={listVariants} initial="hidden" animate="visible">
                    {lists.map((name, index) => {
                        return <Booth index={index} name={name} heart={heart} />;
                    })}
                </VisibleList>
            </MainContent>
        </PageContainer>
    );
};
export default BoothListPage;
