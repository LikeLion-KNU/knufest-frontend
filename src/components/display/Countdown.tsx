import { Text } from "@/components/typography/Text";

import { useCountdown } from "@/hooks/useCountdown";
import { useFestivalCountdown } from "@/hooks/useFestivalCountdown";

import { CountdownContainer } from "./Countdown.styled";

interface ICountdown {
    targetDate: Date;
    onCountdownEnd: () => void;
    endDate: Date;
    onFestivalEnd: () => void;
}

export const Countdown: React.FC<ICountdown> = ({ targetDate, onCountdownEnd, endDate, onFestivalEnd }) => {
    const displayTime = useCountdown(targetDate);
    const displayEndTime = useCountdown(endDate);
    const { isCountdownFinished, isFestivalOver } = useFestivalCountdown(
        targetDate,
        endDate,
        onCountdownEnd,
        onFestivalEnd,
    );

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
            {isFestivalOver ? (
                <Text size="m" weight="bold" variant="darkpurple">
                    2024년 축제가 종료되었습니다. <br /> 다음 대동제를 기대해주세요!
                </Text>
            ) : isCountdownFinished ? (
                <>
                    <Text size="m" weight="bold" variant="darkpurple">
                        대동제가 끝나기까지 남은 시간
                    </Text>
                    <Text size="xxl" weight="bold" variant="lightpurple">
                        {displayEndTime}
                    </Text>
                    <Text size="xs" weight="normal" variant="darkpurple">
                        UTC+9 | {endDate.toLocaleDateString("ko-KR", dateOptions)}{" "}
                        {endDate.toLocaleTimeString("en-US", timeOptions)}
                    </Text>
                </>
            ) : (
                <>
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
                </>
            )}
        </CountdownContainer>
    );
};
