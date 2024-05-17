import React from "react";

import { Date } from "@/components/display/DateSelector.styled";
import { ShowDate } from "@/components/display/ShowDate";

interface DateSelectorProps {
    activeDate: string;
    onDateClick: (date: string) => void;
    dates: { date: string; day: string }[];
}

const DateSelector: React.FC<DateSelectorProps> = ({ activeDate, onDateClick, dates }) => {
    return (
        <Date>
            {dates.map(({ date, day }) => (
                <ShowDate
                    key={date}
                    date={date}
                    day={day}
                    active={activeDate === date}
                    onClick={() => onDateClick(date)}
                />
            ))}
        </Date>
    );
};

export default DateSelector;
