import React from "react";
import { BiSolidMap } from "react-icons/bi";

import { Paragraph } from "@/components/typography/Paragraph";

import { Text } from "../typography/Text";
import {
    TimeTableSectionWrapper,
    LocationWrapper,
    EventWrapper,
    EventTime,
    EventText,
} from "./TimeTableSection.styled";

interface TimeTableSectionProps {
    title: string;
    data: { time: string; event: string }[];
    locationRef: React.RefObject<HTMLDivElement>;
    currentTime: Date;
}

export const TimeTableSection: React.FC<TimeTableSectionProps> = ({ title, data, locationRef, currentTime }) => {
    const isCurrentEvent = (eventTime: string): boolean => {
        const [startTime, endTime] = eventTime.split(" ~ ").map((time) => new Date(`2024-05-21T${time}:00`));
        return currentTime >= startTime && currentTime <= endTime;
    };

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
                <EventWrapper key={index} isCurrent={isCurrentEvent(entry.time)}>
                    <EventTime size="s" weight="bold" variant="darkpurple">
                        {entry.time}
                    </EventTime>
                    <EventText size="xs" weight="normal" variant="black">
                        {entry.event}
                    </EventText>
                </EventWrapper>
            ))}
        </TimeTableSectionWrapper>
    );
};
