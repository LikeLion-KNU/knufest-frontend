import { Variants } from "framer-motion";

import { Text } from "@/components/typography/Text";

import { useLikes } from "@/services/booth/booth.hooks";

import { BoothLink, Index, BoothListItem } from "./Booth.styled";
import { Heart } from "./Heart";

export interface IBooth {
    index: number;
    name: string;
    host: string;
    num: number;
    likeable: boolean;
    category: string;
    isNavigatable: boolean;
}
const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

export const Booth: React.FC<IBooth> = ({ index, host, name, num, likeable, category, isNavigatable }) => {
    const { likeable: likeAble, handleLikeBtnClick } = useLikes(likeable, category, index);

    return (
        <BoothListItem
            variants={itemVariants}
            style={{ backgroundColor: category === "pub" ? "#e9e9fb" : category === "comp" ? "#daf1e5" : "#dfe7ff" }}
        >
            <BoothLink to={isNavigatable ? `/booth/${category}/${index}` : ""}>
                {isNavigatable && <Index category={category}>{category !== "it" ? index : `IT-${index}`}</Index>}
                <Text size="m" weight="bold" variant="#5D5A88">
                    {host && (
                        <Text size="xs" weight="bold" variant="#5D5A88">
                            {`[ ${host} ]`}
                        </Text>
                    )}
                    <Text size="m" weight="bold" variant="#5D5A88">
                        {name}
                    </Text>
                </Text>
            </BoothLink>
            <Heart num={likeAble ? num + 1 : num} likable={likeAble} onClick={handleLikeBtnClick} />
        </BoothListItem>
    );
};
