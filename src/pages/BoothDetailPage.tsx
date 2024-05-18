import React, { useState } from "react";
import { useParams } from "react-router-dom";

import BoothInfo from "@/components/display/BoothInfo";
import CommentInfo from "@/components/display/CommentInfo";
import { Loader } from "@/components/feedback/Loader";

import { DetailPageWrapper, SubBtn, ContentContainer, SendImg, BottomBox } from "@/pages/BoothDetailPage.styled";

import { useBoothDetail } from "@/hooks/useBoothDetail";
import { useComment } from "@/hooks/useComment";

import sendImg from "@/assets/send.png";

const BoothDetailPage: React.FC = () => {
    const { category, boothId } = useParams<{ category: string; boothId?: string }>();
    const { isPending, boothDetail, error } = useBoothDetail(category || "", boothId || "");
    const {
        comments,
        isPending: commentsPending,
        error: commentError,
        createComment,
    } = useComment(category || "", parseInt(boothId || ""));
    const [commentText, setCommentText] = useState<string>("");

    const handleCommentSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await createComment(commentText);
        setCommentText("");
    };

    if (isPending || commentsPending) {
        return <Loader />;
    }

    if (error || !boothDetail) {
        return <div>Error: {error}</div>;
    }

    if (commentError) {
        return <div>Error: {commentError}</div>;
    }

    return (
        <DetailPageWrapper>
            <BoothInfo boothDetail={boothDetail} />
            <CommentInfo commentsDetail={comments} />
            <BottomBox>
                <ContentContainer onSubmit={handleCommentSubmit}>
                    <textarea
                        placeholder="댓글을 입력해주세요."
                        rows={1}
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                    ></textarea>
                    <SubBtn type="submit">
                        <SendImg src={sendImg} />
                    </SubBtn>
                </ContentContainer>
            </BottomBox>
        </DetailPageWrapper>
    );
};

export default BoothDetailPage;
