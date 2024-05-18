import { ICommentRead } from "@/services/booth/booth.types";

import { Paragraph } from "../typography/Paragraph";
import { Text } from "../typography/Text";
import { CommentContent, CommentInfoWrapper } from "./Comment.styled";

const Comment = ({ name, time, content }: ICommentRead) => {
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
            </CommentContent>
            <Paragraph size="s" weight="normal">
                {content}
            </Paragraph>
        </>
    );
};

export default Comment;
