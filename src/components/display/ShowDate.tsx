import { Paragraph } from "../typography/Paragraph";
import { ShowDateContainer, ShowDateLink } from "./ShowDate.styled";

interface IShowDate {
    date: string;
    day: string;
    active: boolean;
    onClick: () => void;
}
export const ShowDate: React.FC<IShowDate> = ({ date, day, active, onClick }) => {
    const variant = active ? "#5D5A88" : "#fff";
    return (
        <ShowDateContainer>
            <ShowDateLink href="#" onClick={onClick}>
                <Paragraph size="24px" weight="bold" variant={variant}>
                    {date}
                </Paragraph>
                <Paragraph size="xs" weight="bold" variant={variant}>
                    {day}
                </Paragraph>
            </ShowDateLink>
        </ShowDateContainer>
    );
};
