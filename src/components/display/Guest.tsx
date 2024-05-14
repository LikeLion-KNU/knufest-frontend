import { Text } from "@/components/typography/Text";

import { Card, Picture } from "./Guest.styled";

export interface IGuest {
    pic: string;
    name: string;
}

export const Guest: React.FC<IGuest> = ({ name, pic }) => {
    return (
        <Card>
            <Picture src={pic} alt={name} />
            <Text size="xl" weight="bold" variant="white">
                {name}
            </Text>
        </Card>
    );
};
