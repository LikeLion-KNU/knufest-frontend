import { CommentContent, CommentInfoWrapper } from "./Comment.styled";
import { FaRegTrashAlt } from "react-icons/fa";

import { Paragraph } from "../typography/Paragraph";
import { Text } from "../typography/Text";
import { IComment } from "./CommentInfo";

//zustand로 refactor 필요

const Comment = ({ name, time, content, deletable }: IComment) => {
    return (
        <>
            <CommentContent>
                <Text size="m" weight="bold" variant="#3F3A6C">
                    <CommentInfoWrapper>
                        {name}
                        <Text size="xs" weight="normal" variant="#A3A3A3">
                            {time}
                        </Text>
                    </CommentInfoWrapper>
                </Text>
                { deletable ?
                    <FaRegTrashAlt color="#3F3A6C" size={"24px"}/>
                    : null
                }
            </CommentContent>
            <Paragraph size="s" weight="normal">{content}</Paragraph>
        </>
    );
};

export default Comment;
