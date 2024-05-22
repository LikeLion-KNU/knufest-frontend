import { useState, useEffect } from "react";

export const useActiveDate = (initialDate: string) => {
    const [activeDate, setActiveDate] = useState<string>(initialDate);
    const currentTime = new Date();
    const currentDateStr = `${currentTime.getMonth() + 1}.${currentTime.getDate()}`;

    useEffect(() => {
        if (["5.21", "5.22", "5.23"].includes(currentDateStr)) {
            setActiveDate(currentDateStr);
        }
    }, [currentDateStr]);

    return [activeDate, setActiveDate] as const;
};
