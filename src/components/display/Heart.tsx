import { TiHeartFullOutline } from "react-icons/ti";

import { HeartWrapper } from "./Heart.styled";

export interface IHeart {
    num: number;
    likable: boolean;
}

export const Heart: React.FC<IHeart> = ({ num, likable }) => {
    return (
        <HeartWrapper likable={likable}>
            <TiHeartFullOutline size={24} />
            {num}
        </HeartWrapper>
    );
};
