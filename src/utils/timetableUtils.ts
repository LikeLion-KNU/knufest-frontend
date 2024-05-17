interface Event {
    time: string;
    event: string;
}

interface LocationData {
    "1주차장": Event[];
    백양로: Event[];
    대운동장: Event[];
}

export interface TimetableData {
    [key: string]: LocationData;
}

export const handleDateClick = (setActiveDate: (date: string) => void) => (date: string) => {
    setActiveDate(date);
};

export const getTimetableData =
    (timetableData: TimetableData) =>
    (date: string, location: keyof LocationData): Event[] => {
        const dayData = timetableData[date];
        if (dayData) {
            return dayData[location];
        }
        return [];
    };
