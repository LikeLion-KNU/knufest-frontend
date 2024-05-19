import React from "react";

import BoothInfo from "@/components/display/BoothInfo";
import CommentInfo from "@/components/display/CommentInfo";
import { Loader } from "@/components/feedback/Loader";

import { DetailPageWrapper, SubBtn, ContentContainer, SendImg, BottomBox } from "@/pages/BoothDetailPage.styled";

import { useBoothDetail } from "@/services/booth/booth.hooks";
import { useComment } from "@/services/comment/comment.hooks";

import sendImg from "@/assets/send.png";

export default function BoothDetailPage() {
    const { isPending, boothDetail } = useBoothDetail();
    const {
        isPending: isCommentFetchPending,
        comments,
        hasMore,
        setPage,
        commentInputRef,
        handleCommentSubmit,
    } = useComment();

    return (
        <DetailPageWrapper>
            {isPending ? <Loader /> : boothDetail && <BoothInfo boothDetail={boothDetail} />}
            {isCommentFetchPending ? (
                <Loader />
            ) : (
                comments && <CommentInfo commentsDetail={comments} hasMore={hasMore} setPage={setPage} />
            )}
            <BottomBox>
                <ContentContainer
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault();
                        if (!commentInputRef.current || commentInputRef.current.value === "") return;
                        handleCommentSubmit(commentInputRef.current.value);
                        commentInputRef.current.value = "";
                    }}
                >
                    <input ref={commentInputRef} placeholder="댓글을 입력해주세요." />
                    <SubBtn type="submit">
                        <SendImg src={sendImg} />
                    </SubBtn>
                </ContentContainer>
            </BottomBox>
        </DetailPageWrapper>
    );
}
