import React, { useState, useRef } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BiSolidMap } from "react-icons/bi";

import DateSelector from "@/components/display/DateSelector";
import { TimeTableSection } from "@/components/display/TimeTableSection";
import { Paragraph } from "@/components/typography/Paragraph";
import { Text } from "@/components/typography/Text";

import backImg from "@/assets/BackImg.png";

import timetableDataJson from "@/constants/timetable.json";

import { handleDateClick, getTimetableData, TimetableData } from "@/utils/timetableUtils";

import { BackImg, DateWrapper, LocationWrapper, LocationButton, ScrollTopButton } from "./TimeTablePage.styled";

const TimeTablePage: React.FC = () => {
    const [activeDate, setActiveDate] = useState<string>("5.21");
    const timetableData = timetableDataJson as TimetableData;
    const headerOffset = 100;
    const currentTime = new Date();
    // const currentTime = new Date("2024-05-21T11:00:00"); // Test

    const locationRefs = {
        대운동장: useRef<HTMLDivElement>(null),
        "소운동장, 복지관": useRef<HTMLDivElement>(null),
        다목적구장: useRef<HTMLDivElement>(null),
        "백양로 동편": useRef<HTMLDivElement>(null),
        "생협 매대": useRef<HTMLDivElement>(null),
        "일청담 총학 중앙 부스": useRef<HTMLDivElement>(null),
        "벚꽃길, 학생주차장": useRef<HTMLDivElement>(null),
    };

    const handleLocationClickHandler = (location: keyof typeof locationRefs) => {
        const element = locationRefs[location].current;
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <Paragraph size="xl" weight="bold" variant="darkpurple" isTitle>
                Time Table
            </Paragraph>
            <BackImg src={backImg} alt="background" />
            <DateWrapper>
                <DateSelector
                    activeDate={activeDate}
                    onDateClick={handleDateClick(setActiveDate)}
                    dates={[
                        { date: "5.21", day: "TUE" },
                        { date: "5.22", day: "WED" },
                        { date: "5.23", day: "THU" },
                    ]}
                />
            </DateWrapper>
            <LocationWrapper>
                {(Object.keys(locationRefs) as Array<keyof typeof locationRefs>).map((location) => (
                    <LocationButton key={location} onClick={() => handleLocationClickHandler(location)}>
                        <BiSolidMap size={18} color="#5d5a88" />
                        <Text size="xs" weight="bold" variant="darkpurple">
                            {location}
                        </Text>
                    </LocationButton>
                ))}
            </LocationWrapper>
            <TimeTableSection
                title="대운동장"
                data={getTimetableData(timetableData)(activeDate, "대운동장")}
                locationRef={locationRefs["대운동장"]}
                currentTime={currentTime}
            />
            <TimeTableSection
                title="소운동장, 복지관"
                data={getTimetableData(timetableData)(activeDate, "소운동장, 복지관")}
                locationRef={locationRefs["소운동장, 복지관"]}
                currentTime={currentTime}
            />
            <TimeTableSection
                title="다목적구장"
                data={getTimetableData(timetableData)(activeDate, "다목적구장")}
                locationRef={locationRefs["다목적구장"]}
                currentTime={currentTime}
            />
            <TimeTableSection
                title="백양로 동편"
                data={getTimetableData(timetableData)(activeDate, "백양로 동편")}
                locationRef={locationRefs["백양로 동편"]}
                currentTime={currentTime}
            />
            <TimeTableSection
                title="생협 매대"
                data={getTimetableData(timetableData)(activeDate, "생협 매대")}
                locationRef={locationRefs["생협 매대"]}
                currentTime={currentTime}
            />
            <TimeTableSection
                title="일청담 총학 중앙 부스"
                data={getTimetableData(timetableData)(activeDate, "일청담 총학 중앙 부스")}
                locationRef={locationRefs["일청담 총학 중앙 부스"]}
                currentTime={currentTime}
            />
            <TimeTableSection
                title="벚꽃길, 학생주차장"
                data={getTimetableData(timetableData)(activeDate, "벚꽃길, 학생주차장")}
                locationRef={locationRefs["벚꽃길, 학생주차장"]}
                currentTime={currentTime}
            />
            <ScrollTopButton onClick={handleScrollToTop}>
                <AiOutlineArrowUp size={24} />
            </ScrollTopButton>
        </>
    );
};

export default TimeTablePage;
