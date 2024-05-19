import { FaRegTrashAlt } from "react-icons/fa";

import { IComment } from "@/services/comment/comment.types";

import { Paragraph } from "../typography/Paragraph";
import { Text } from "../typography/Text";
import { CommentContent, CommentInfoWrapper } from "./Comment.styled";

export const Comment: React.FC<IComment> = ({ name, created, comment, deleteable, handleCommentDelete }) => {
    return (
        <>
            <CommentContent>
                <Text size="m" weight="bold" variant="#3F3A6C">
                    <CommentInfoWrapper>
                        {name}
                        <Text size="xs" weight="normal" variant="#A3A3A3">
                            {created}
                        </Text>
                    </CommentInfoWrapper>
                </Text>
                {deleteable ? <FaRegTrashAlt color="#5d5a88" onClick={handleCommentDelete} /> : null}
            </CommentContent>
            <Paragraph size="s" weight="normal">
                {comment}
            </Paragraph>
        </>
    );
};
