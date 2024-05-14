import { ShowDateContainer, ShowDateLink} from "./ShowDate.styled";
import { Paragraph } from "../typography/Paragraph";

interface IShowDate {
    date: string;
    day: string;
    active: boolean;
    onClick: () => void;
}
export const ShowDate: React.FC<IShowDate> = ({ date, day, active, onClick }) => {
    const variant = active ? "#5D5A88" : "#adabc3"
    return (
        <ShowDateContainer>
            <ShowDateLink href="#" onClick={onClick}>
                <Paragraph size="40px" weight="bold" variant={variant}>
                    {date}
                </Paragraph>
                <Paragraph size="20px" weight="bold" variant={variant}>
                    {day}
                </Paragraph>
            </ShowDateLink>
        </ShowDateContainer>
    );
};
