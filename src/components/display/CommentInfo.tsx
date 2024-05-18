import React, { useState } from "react";

import { Pagination } from "@/components/navigation/Pagination";

import { ICommentRead } from "@/services/booth/booth.types";

import { Text } from "../typography/Text";
import Comment from "./Comment";
import { CommentList, CommentWrapper, CommentContainer, Title } from "./CommentInfo.styled";

interface CommentInfoProps {
    commentsDetail: ICommentRead[];
}

const CommentInfo: React.FC<CommentInfoProps> = ({ commentsDetail }) => {
    const [commentnum] = useState<number>(commentsDetail.length);

    return (
        <CommentWrapper>
            <Text size="20px" weight="bold">
                <Title>
                    댓글
                    <Text size="m" weight="bold" variant="#3F3A6C">
                        {commentnum}
                    </Text>
                </Title>
            </Text>
            <CommentList>
                {commentsDetail.map((comment, index) => (
                    <div key={index}>
                        <CommentContainer>
                            <Comment name={comment.name} time={comment.time} content={comment.content} comment={""} />
                        </CommentContainer>
                        <hr />
                    </div>
                ))}
            </CommentList>
            <Pagination />
        </CommentWrapper>
    );
};

export default CommentInfo;
