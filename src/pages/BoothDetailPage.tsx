import React from "react";
import { useParams } from "react-router-dom";

import BoothInfo from "@/components/display/BoothInfo";
import CommentInfo from "@/components/display/CommentInfo";
import { Loader } from "@/components/feedback/Loader";

import { DetailPageWrapper, SubBtn, ContentContainer, SendImg, BottomBox } from "@/pages/BoothDetailPage.styled";

import { useBoothDetail } from "@/hooks/useBoothDetail";

import sendImg from "@/assets/send.png";

const BoothDetailPage: React.FC = () => {
    const { category, boothId } = useParams<{ category: string; boothId: string }>();
    const { isPending, boothDetail, error } = useBoothDetail(category, boothId);

    if (isPending) {
        return <Loader />;
    }

    if (error || !boothDetail) {
        return <div>Error: {error}</div>;
    }

    return (
        <DetailPageWrapper>
            <BoothInfo boothDetail={boothDetail} />
            <CommentInfo />
            <BottomBox>
                <ContentContainer>
                    <textarea placeholder="댓글을 입력해주세요." rows={1}></textarea>
                    <SubBtn type="submit">
                        <SendImg src={sendImg} />
                    </SubBtn>
                </ContentContainer>
            </BottomBox>
        </DetailPageWrapper>
    );
};

export default BoothDetailPage;
