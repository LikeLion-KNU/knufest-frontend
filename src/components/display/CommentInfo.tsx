import React, { useCallback, useRef } from "react";

import { IComment } from "@/services/comment/comment.types";

import { parseCreatedDate } from "@/utils/parseCreatedDate";

import { Text } from "../typography/Text";
import { Comment } from "./Comment";
import { CommentList, CommentWrapper, CommentContainer, Title } from "./CommentInfo.styled";

interface CommentInfoProps {
    commentsDetail: IComment[];
    hasMore: boolean;
    setPage: (page: (prevPage: number) => number) => void;
}

const CommentInfo: React.FC<CommentInfoProps> = ({ commentsDetail, hasMore, setPage }) => {
    const observer = useRef<IntersectionObserver | null>(null);
    const lastCommentRef = useCallback(
        (node: HTMLDivElement | null) => {
            if (!hasMore) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    setPage((prevPage) => prevPage + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [hasMore, setPage],
    );

    return (
        <CommentWrapper>
            <Text size="20px" weight="bold">
                <Title>댓글</Title>
            </Text>
            <CommentList>
                {commentsDetail.map((comment, index) => (
                    <div key={comment.id} ref={index === commentsDetail.length - 1 ? lastCommentRef : null}>
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
        </CommentWrapper>
    );
};

export default CommentInfo;
