import BoothInfo from "@/components/display/BoothInfo";
import CommentInfo from "@/components/display/CommentInfo";

import { DetailPageWrapper } from "@/pages/BoothDetailPage.styled";

export default function BoothDetailPage() {
    return (
        <DetailPageWrapper>
            <BoothInfo />
            <hr />
            <CommentInfo />
        </DetailPageWrapper>
    );
}
