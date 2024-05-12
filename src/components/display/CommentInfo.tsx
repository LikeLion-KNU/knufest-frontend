import React, { useState } from "react";

import CommentForm from "../forms/CommentForm";
import Comment from "./Comment";
import { CommentList, Title } from "./CommentInfo.styled";
import Pagenation from "./Pagenation";

type Comment = {
    name: string;
    time: string;
    content: string;
};

const CommentInfo: React.FC = () => {
    const [commentnum] = useState<number>(0);

    const comments: Comment[] = [
        { name: "User1", time: "2024-05-13", content: "첫 번째 댓글입니다." },
        { name: "User2", time: "2024-05-14", content: "두 번째 댓글입니다." },
        { name: "User3", time: "2024-05-15", content: "세 번째 댓글입니다." },
    ];

    return (
        <>
            <Title>
                <div>댓글</div>
                <div>{commentnum}</div>
            </Title>
            <CommentList>
                {comments.map((comment, index) => (
                    <div>
                        <Comment key={index} name={comment.name} time={comment.time} content={comment.content} />
                        <hr />
                    </div>
                ))}
            </CommentList>
            <Pagenation />
            <hr />
            <CommentForm />
        </>
    );
};

export default CommentInfo;
