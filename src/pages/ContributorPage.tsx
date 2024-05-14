import { Text } from "@/components/typography/Text";

import daegun from "@/assets/daegun.png";
import donggun from "@/assets/donggun.png";
import dongpil from "@/assets/dongpil.png";
import hyoeun from "@/assets/hyoeun.png";
import jeongsik from "@/assets/jeongsik.png";
import jiwoong from "@/assets/jiwoong.png";
import junhyeok from "@/assets/junhyeok.png";

import contributors from "@/constants/contributors.json";

import Card from "../components/display/Card";
import { TextContainer, PositionContainer, PositionTextWrapper } from "./ContributorPage.styled";

const imageMap: { [key: string]: string } = {
    daegun,
    hyoeun,
    dongpil,
    junhyeok,
    donggun,
    jiwoong,
    jeongsik,
};
const teams = ["Front-End", "Back-End"];

export default function ContributorPage() {
    const renderContributors = (team: string): JSX.Element[] =>
        contributors
            .filter((contributor) => contributor.team === team)
            .map((contributor, index) => <Card key={index} {...contributor} photo={imageMap[contributor.photo]} />);

    return (
        <>
            <TextContainer>
                <Text size="xl" weight="bold" variant="darkpurple">
                    만든이들
                </Text>
                <Text size="s" weight="normal" variant="lightpurple">
                    2024 경북대 대동제 홈페이지를 위해 <br />
                    컴퓨터학부 멋쟁이사자처럼 운영진에서 <br />
                    학생 분들의 편의를 위해 제작하게 되었습니다. <br />
                    <br />
                    이번 축제가 오랜만에 이루어지는 만큼 <br />
                    더 즐겁고 행복한 축제가 되셨으면 좋겠습니다.
                    <br />
                </Text>
            </TextContainer>

            {teams.map((team) => (
                <PositionContainer key={team}>
                    <PositionTextWrapper>
                        <Text size="xl" weight="bold" variant="darkpurple">
                            {team}
                        </Text>
                    </PositionTextWrapper>
                    {renderContributors(team)}
                </PositionContainer>
            ))}
        </>
    );
}
