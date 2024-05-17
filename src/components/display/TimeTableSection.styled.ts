import styled from "styled-components";

import { Text } from "@/components/typography/Text";

export const TimeTableSectionWrapper = styled.div`
    margin: 20px 0;
    padding: 20px;
    width: 80%;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    color: #333;
`;

export const LocationWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const EventWrapper = styled.div<{ isCurrent: boolean }>`
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    padding: 20px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background-color: ${({ isCurrent }) => (isCurrent ? "#e8e6ff" : "transparent")};

    &:last-child {
        border-bottom: none;
    }
`;

export const EventTime = styled(Text)`
    font-weight: bold;
    font-family: "DM Sans", sans-serif;
`;

export const EventText = styled(Text)`
    display: flex;
    align-items: center;
`;
