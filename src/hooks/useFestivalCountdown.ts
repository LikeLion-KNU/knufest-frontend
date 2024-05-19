import { useState, useEffect } from "react";

export const useFestivalCountdown = (
    targetDate: Date,
    endDate: Date,
    onCountdownEnd: () => void,
    onFestivalEnd: () => void,
) => {
    const [isCountdownFinished, setIsCountdownFinished] = useState(false);
    const [isFestivalOver, setIsFestivalOver] = useState(false);

    useEffect(() => {
        const checkCountdown = () => {
            const currentTime = new Date().getTime();
            const targetTime = targetDate.getTime();
            const endTime = endDate.getTime();

            if (currentTime >= targetTime && !isCountdownFinished) {
                setIsCountdownFinished(true);
                onCountdownEnd();
            }

            if (currentTime >= endTime && !isFestivalOver) {
                setIsFestivalOver(true);
                onFestivalEnd();
            }
        };

        const interval = setInterval(checkCountdown, 1000);

        return () => clearInterval(interval);
    }, [targetDate, endDate, onCountdownEnd, onFestivalEnd, isCountdownFinished, isFestivalOver]);

    return { isCountdownFinished, isFestivalOver };
};
