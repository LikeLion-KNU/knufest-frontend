import { Text } from "@/components/typography/Text";

import { useCountdown } from "@/hooks/useCountdown";

import { CountdownContainer } from "./Countdown.styled";

interface ICountdown {
    targetDate: Date;
}

export const Countdown: React.FC<ICountdown> = ({ targetDate }) => {
    const displayTime = useCountdown(targetDate);

    const dateOptions: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    };
    const timeOptions: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",

        hour12: false,
    };

    return (
        <CountdownContainer>
            <Text size="l" weight="bold" variant="darkpurple">
                축제까지 남은 시간
            </Text>
            <Text size="xxl" weight="bold" variant="lightpurple">
                {displayTime}
            </Text>
            <Text size="xs" weight="normal" variant="darkpurple">
                UTC+9 | {targetDate.toLocaleDateString("ko-KR", dateOptions)}{" "}
                {targetDate.toLocaleTimeString("en-US", timeOptions)}
            </Text>
        </CountdownContainer>
    );
};
