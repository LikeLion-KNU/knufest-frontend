import { Variants } from "framer-motion";

import { Text } from "@/components/typography/Text";

import { BoothLink, Index, BoothListItem } from "./Booth.styled";
import { Heart } from "./Heart";

interface IBooth {
    index: number;
    name: string;
    num: number;
    likable: boolean;
}
const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

export const Booth: React.FC<IBooth> = ({ index, name, num, likable }) => {
    return (
        <BoothListItem variants={itemVariants}>
            <BoothLink href={`booth/${index + 1}`}>
                <Index>{index + 1}</Index>
                <Text size="m" weight="bold" variant="#5D5A88">
                    {name}
                </Text>
                <Heart num={num} likable={likable} />
            </BoothLink>
        </BoothListItem>
    );
};
