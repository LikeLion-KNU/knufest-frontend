import { TiHeartFullOutline } from "react-icons/ti";

import { Variants } from "framer-motion";

import { Text } from "@/components/typography/Text";

import { BoothList, BoothLink, Index, Heart } from "./Booth.styled";

interface IBooth {
    index: number;
    name: string;
    heart: number;
}
const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

export const Booth: React.FC<IBooth> = ({ index, name, heart }) => {
    return (
        <BoothList variants={itemVariants}>
            <BoothLink href="#">
                <Index>{index + 1}</Index>
                <Text size="m" weight="bold" variant="#5D5A88">
                    {name}
                </Text>
                <Heart>
                    <TiHeartFullOutline size={24} />
                    {heart}
                </Heart>
            </BoothLink>
        </BoothList>
    );
};
