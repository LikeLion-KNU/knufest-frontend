import { BoothInfoWrapper, CommentWrapper, DetailPageWrapper, SplitWrapper } from "@/pages/BoothDetailPage.styled";

export default function BoothDetailPage() {
    return (
        <DetailPageWrapper>
            <BoothInfoWrapper></BoothInfoWrapper>
            <SplitWrapper></SplitWrapper>
            <CommentWrapper></CommentWrapper>
        </DetailPageWrapper>
    );
}
