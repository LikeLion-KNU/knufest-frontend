import { useState, useEffect } from "react";

const formatTime = (time: number): string => {
    return time < 10 ? `0${time}` : time.toString();
};

const calculateTimeLeft = (targetDate: Date) => {
    const difference = +targetDate - +new Date();
    let timeLeft: Record<string, number> = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    } else {
        timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }

    return timeLeft;
};

export const useCountdown = (targetDate: Date) => {
    const [timeLeft, setTimeLeft] = useState<Record<string, number>>(calculateTimeLeft(targetDate));

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearTimeout(timer);
    });

    const formattedTime = `${formatTime(timeLeft.days * 24 + timeLeft.hours)}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`;
    return formattedTime;
};
