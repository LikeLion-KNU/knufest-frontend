import { TiHeartFullOutline } from "react-icons/ti";

import { HeartWrapper } from "./Heart.styled";

export interface IHeart extends React.ComponentProps<"div"> {
    num: number;
    likable: boolean;
}

export const Heart: React.FC<IHeart> = ({ num, likable, ...rest }) => {
    console.log(num);
    console.log(likable);
    return (
        <HeartWrapper likeable={likable} {...rest}>
            <TiHeartFullOutline size={24} />
            {num}
        </HeartWrapper>
    );
};
