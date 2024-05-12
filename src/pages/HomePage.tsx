import React from "react";

import { Countdown } from "@/components/display/Countdown";
import { Button } from "@/components/forms/Button";
import { Text } from "@/components/typography/Text";

import { PageContainer, MainContent, StyledImage, CountdownContainer } from "@/pages/HomePage.styled";

import mainPageImage from "@/assets/main_page.jpg";

const HomePage: React.FC = () => {
    return (
        <PageContainer>
            <MainContent>
                <StyledImage>
                    <img src={mainPageImage} alt="Main Page" />
                    <Button width="200px" variant="navy">
                        <Text size="m" weight="bold" variant="white">
                            시작하기
                        </Text>
                    </Button>
                </StyledImage>

                {/* 카운트다운 */}
                <CountdownContainer>
                    <Text size="l" weight="bold" variant="darkpurple">
                        대동제가 곧 시작됩니다
                    </Text>
                    <Countdown targetDate={new Date("2024-05-21T00:00:00")} />
                </CountdownContainer>

                {/* 빠른 시작 */}
                <Text size="l" weight="bold" variant="darkpurple">
                    축제 바로가기
                </Text>
            </MainContent>
        </PageContainer>
    );
};

export default HomePage;
