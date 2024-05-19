import { useState, useEffect } from "react";

export const useFestivalCountdown = (targetDate: Date, onCountdownEnd: () => void) => {
    const [isCountdownFinished, setIsCountdownFinished] = useState(false);

    useEffect(() => {
        const checkCountdown = () => {
            const currentTime = new Date().getTime();
            const targetTime = targetDate.getTime();

            if (currentTime >= targetTime) {
                setIsCountdownFinished(true);
                onCountdownEnd();
            }
        };

        const interval = setInterval(checkCountdown, 1000);

        return () => clearInterval(interval);
    }, [targetDate, onCountdownEnd]);

    return isCountdownFinished;
};
