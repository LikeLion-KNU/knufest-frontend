import React, { useState } from "react";

import { Pagination } from "@/components/navigation/Pagination";

import { Text } from "../typography/Text";
import Comment from "./Comment";
import { CommentList, CommentWrapper, CommentContainer, Title } from "./CommentInfo.styled";

export interface IComment {
    name: string;
    time: string;
    content: string;
    deletable: boolean;
}

const CommentInfo: React.FC = () => {
    const [commentnum] = useState<number>(221);

    const comments: IComment[] = [
        { name: "User1", time: "2024-05-13", content: "첫 번째 댓글입니다.", deletable: false },
        { name: "User2", time: "2024-05-14", content: "두 번째 댓글입니다.", deletable: true },
        { name: "User3", time: "2024-05-15", content: "세 번째 댓글입니다.", deletable: false },
    ];

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
                {comments.map((comment, index) => (
                    <div>
                        <CommentContainer>
                            <Comment
                                key={index}
                                name={comment.name}
                                time={comment.time}
                                content={comment.content}
                                deletable={comment.deletable}
                            />
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
