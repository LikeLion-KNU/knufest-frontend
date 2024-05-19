import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

import BoothInfo from "@/components/display/BoothInfo";
import { Comment } from "@/components/display/Comment";
import { CommentList } from "@/components/display/CommentInfo.styled";
import { CommentContainer } from "@/components/display/CommentInfo.styled";
import { Title } from "@/components/display/CommentInfo.styled";
import { Loader } from "@/components/feedback/Loader";
import { Paragraph } from "@/components/typography/Paragraph";
import { Text } from "@/components/typography/Text";

import { DetailPageWrapper, SubBtn, ContentContainer, SendImg, BottomBox } from "@/pages/BoothDetailPage.styled";
import { ScrollTopButton } from "@/pages/BoothDetailPage.styled";

import { useBoothDetail } from "@/services/booth/booth.hooks";
import { useComment } from "@/services/comment/comment.hooks";

import sendImg from "@/assets/send.png";

import { parseCreatedDate } from "@/utils/parseCreatedDate";

import { CommentHeader } from "./BoothListPage.styled";

export default function BoothDetailPage() {
    const { isPending, boothDetail } = useBoothDetail();

    const {
        isPending: isCommentFetchPending,
        comments,
        commentInputRef,
        handleCommentSubmit,
        handleCommentDelete,
    } = useComment();

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <DetailPageWrapper>
            {isPending ? <Loader /> : boothDetail && <BoothInfo boothDetail={boothDetail} />}

            {boothDetail?.boothDescription.includes("<br/>")
                ? boothDetail?.boothDescription.split("<br/>").map((detail) => {
                      return (
                          <Paragraph size="m" weight="normal">
                              {detail}
                          </Paragraph>
                      );
                  })
                : boothDetail?.boothDescription}

            <CommentHeader>
                <Text size="20px" weight="bold">
                    <Title>
                        댓글
                        <Text size="m" weight="bold" variant="#3F3A6C">
                            {0}
                        </Text>
                    </Title>
                </Text>
            </CommentHeader>

            {isCommentFetchPending ? (
                <Loader />
            ) : (
                <CommentList>
                    {comments &&
                        comments.map((comment, index) => (
                            <div key={index}>
                                <CommentContainer>
                                    <Comment
                                        name={comment.name}
                                        created={parseCreatedDate(comment.created)}
                                        comment={comment.comment}
                                        deleteable={comment.deleteable}
                                        handleCommentDelete={() => {
                                            handleCommentDelete(comment.id as number);
                                        }}
                                    />
                                </CommentContainer>
                                <hr style={{ marginTop: "15px" }} />
                            </div>
                        ))}
                </CommentList>
            )}

            <BottomBox>
                <ContentContainer
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault();

                        if (!commentInputRef.current) return;
                        if (commentInputRef.current.value === "") return;

                        console.log(commentInputRef.current.value);
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

            <ScrollTopButton onClick={handleScrollToTop}>
                <AiOutlineArrowUp size={24} />
            </ScrollTopButton>
        </DetailPageWrapper>
    );
}
