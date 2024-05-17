import { Variants } from "framer-motion";

import { Text } from "@/components/typography/Text";

import { useLikes } from "@/services/booth/booth.hooks";

import { BoothLink, Index, BoothListItem } from "./Booth.styled";
import { Heart } from "./Heart";

interface IBooth {
    index: number;
    name: string;
    num: number;
    likeable: boolean;
    category: string;
}
const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

export const Booth: React.FC<IBooth> = ({ index, name, num, likeable, category }) => {
    const { likeable: likeAble, handleLikeBtnClick } = useLikes(likeable, category, index);

    return (
        <BoothListItem variants={itemVariants}>
            <BoothLink href={`booth/${index + 1}`}>
                <Index>{index + 1}</Index>
                <Text size="m" weight="bold" variant="#5D5A88">
                    {name}
                </Text>
            </BoothLink>
            <Heart num={likeAble ? num + 1 : num} likable={likeAble} onClick={handleLikeBtnClick} />
        </BoothListItem>
    );
};
