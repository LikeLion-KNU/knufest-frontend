interface Event {
    time: string;
    event: string;
}

interface LocationData {
    대운동장: Event[];
    "소운동장, 복지관": Event[];
    다목적구장: Event[];
    "백양로 동편": Event[];
    "생협 매대": Event[];
    "일청담 총학 중앙 부스": Event[];
    "벚꽃길, 학생주차장": Event[];
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
