import BoothInfo from "@/components/display/BoothInfo";
import CommentInfo from "@/components/display/CommentInfo";

import { BoothInfoWrapper, CommentWrapper, DetailPageWrapper } from "@/pages/BoothDetailPage.styled";

export default function BoothDetailPage() {
    return (
        <DetailPageWrapper>
            <BoothInfoWrapper>
                <BoothInfo />
            </BoothInfoWrapper>
            <hr />
            <CommentWrapper>
                <CommentInfo />
            </CommentWrapper>
        </DetailPageWrapper>
    );
}
