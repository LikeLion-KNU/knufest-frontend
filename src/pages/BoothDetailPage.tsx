import BoothInfo from "@/components/display/BoothInfo";
import CommentInfo from "@/components/display/CommentInfo";
import sendImg from "@/assets/send.png";

import { DetailPageWrapper, SubBtn, ContentContainer, SendImg, BottomBox } from "@/pages/BoothDetailPage.styled";

export default function BoothDetailPage() {
    return (
        <DetailPageWrapper>
            <BoothInfo />
            <CommentInfo />
            <BottomBox>
                <ContentContainer>
                    <textarea
                        placeholder="댓글을 입력해주세요."
                        rows={1}>
                    </textarea>
                    <SubBtn type="submit">
                        <SendImg src={sendImg}/>
                    </SubBtn>
                </ContentContainer>
            </BottomBox>
        </DetailPageWrapper>
    );
};
