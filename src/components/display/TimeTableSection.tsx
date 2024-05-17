import React from "react";
import { BiSolidMap } from "react-icons/bi";

import { Paragraph } from "@/components/typography/Paragraph";

import { Text } from "../typography/Text";
import { TimeTableSectionWrapper, LocationWrapper, EventWrapper, EventTime } from "./TimeTableSection.styled";

interface TimeTableSectionProps {
    title: string;
    data: { time: string; event: string }[];
    locationRef: React.RefObject<HTMLDivElement>;
}

export const TimeTableSection: React.FC<TimeTableSectionProps> = ({ title, data, locationRef }) => {
    return (
        <TimeTableSectionWrapper ref={locationRef}>
            <Paragraph size="m" weight="bold" variant="darkpurple">
                <LocationWrapper>
                    <BiSolidMap size={18} color="#5d5a88" />
                    <Text size="xs" weight="bold" variant="darkpurple">
                        {title}
                    </Text>
                </LocationWrapper>
            </Paragraph>
            {data.map((entry, index) => (
                <EventWrapper key={index}>
                    <EventTime size="s" weight="bold" variant="darkpurple">
                        {entry.time}
                    </EventTime>
                    <Text size="xs" weight="normal" variant="black">
                        {entry.event}
                    </Text>
                </EventWrapper>
            ))}
        </TimeTableSectionWrapper>
    );
};
