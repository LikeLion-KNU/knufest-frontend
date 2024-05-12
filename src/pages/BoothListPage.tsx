import React from "react";
import Navigation from "@/components/navigation/Navigation";
import { Variants } from "framer-motion";
// import Map from "./Map";
import {
	PageContainer,
	MainContent,
	VisibleList
} from "./BoothListPage.styled";
import { Booth } from "@/components/display/Booth";

const listVariants: Variants = {
	hidden: {
		opacity: 0
	},
	visible: {
		opacity: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.1
		}
	}
};



const BoothListPage: React.FC = () => {
	const lists = ["컴퓨터학부 주점이름","전자 주점이름","토목 주점이름","기계 주점이름","식품공학부 주점이름"];
	const heart = 356;
    //list랑 index, heart는 받아온 값으로 수정

  return (
    <PageContainer>
      <Navigation />
      <MainContent>
        {/*<Map />*/}
        <VisibleList variants={listVariants} initial="hidden" animate="visible">
					{lists.map((name,index) => {
						return (
						<Booth index={index} name={name} heart={heart}/>
					)})}
        </VisibleList>
      </MainContent>
    </PageContainer>
  );
};
export default BoothListPage;
