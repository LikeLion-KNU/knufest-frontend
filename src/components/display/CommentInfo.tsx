import React, { useState } from "react";

import { Pagination } from "@/components/navigation/Pagination";

import { IComment } from "@/services/comment/comment.types";

import { parseCreatedDate } from "@/utils/parseCreatedDate";

import { Text } from "../typography/Text";
import { Comment } from "./Comment";
import { CommentList, CommentWrapper, CommentContainer, Title } from "./CommentInfo.styled";

interface CommentInfoProps {
    commentsDetail: IComment[];
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
                            <Comment
                                id={comment.id}
                                name={comment.name}
                                created={parseCreatedDate(comment.created)}
                                comment={comment.comment}
                                deleteable={comment.deleteable}
                            />
                        </CommentContainer>
                        <hr style={{ marginTop: "15px" }} />
                    </div>
                ))}
            </CommentList>
            <Pagination />
        </CommentWrapper>
    );
};

export default CommentInfo;
