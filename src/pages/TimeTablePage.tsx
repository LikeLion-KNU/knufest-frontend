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

    const locationRefs = {
        "1주차장": useRef<HTMLDivElement>(null),
        백양로: useRef<HTMLDivElement>(null),
        대운동장: useRef<HTMLDivElement>(null),
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
                title="1주차장"
                data={getTimetableData(timetableData)(activeDate, "1주차장")}
                locationRef={locationRefs["1주차장"]}
            />
            <TimeTableSection
                title="백양로"
                data={getTimetableData(timetableData)(activeDate, "백양로")}
                locationRef={locationRefs["백양로"]}
            />
            <TimeTableSection
                title="대운동장"
                data={getTimetableData(timetableData)(activeDate, "대운동장")}
                locationRef={locationRefs["대운동장"]}
            />
            <ScrollTopButton onClick={handleScrollToTop}>
                <AiOutlineArrowUp size={24} />
            </ScrollTopButton>
        </>
    );
};

export default TimeTablePage;
