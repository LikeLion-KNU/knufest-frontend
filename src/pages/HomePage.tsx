
import { useEffect, useRef, useState } from "react";


import { ButtonList } from "@/components/display/ButtonList";
import { Countdown } from "@/components/display/Countdown";
import { Button } from "@/components/forms/Button";
import { Paragraph } from "@/components/typography/Paragraph";
import { Text } from "@/components/typography/Text";

import { StyledImage, ElementContainer } from "@/pages/HomePage.styled";

import { userService } from "@/services/user/user.service";

import mainPageImage from "@/assets/main_page.jpg";

export default function HomePage() {
    const [isCountdownFinished, setIsCountdownFinished] = useState(false);
    const [isFestivalOver, setIsFestivalOver] = useState(false);
    const quickAccessRef = useRef<HTMLDivElement>(null);

    const [totalUser, setTotalUser] = useState<number | undefined>(undefined);

    const scrollToQuickAccess = () => {
        quickAccessRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        userService.readTotalUsers().then((data) => {
            setTotalUser(data.count);
        });
    }, []);
    
    const festivalStartDate = new Date("2024-05-21T00:00:00");
    const festivalEndDate = new Date("2024-05-23T22:40:00");

    return (
        <>
            <StyledImage>
                <img src={mainPageImage} alt="Main Page" />
                <Button width="200px" variant="navy" onClick={scrollToQuickAccess}>
                    <Text size="m" weight="bold" variant="white">
                        시작하기
                    </Text>
                </Button>
            </StyledImage>

            {/* 카운트다운 */}
            <ElementContainer>
                <Text size="l" weight="bold" variant="darkpurple">
                    {isFestivalOver
                        ? "축제가 종료되었습니다."
                        : isCountdownFinished
                          ? "축제가 진행중입니다!"
                          : "대동제가 곧 시작됩니다"}
                </Text>
                <Countdown
                    targetDate={festivalStartDate}
                    onCountdownEnd={() => setIsCountdownFinished(true)}
                    endDate={festivalEndDate}
                    onFestivalEnd={() => setIsFestivalOver(true)}
                />
            </ElementContainer>

            {/* 빠른 시작 */}
            <ElementContainer ref={quickAccessRef}>
                <Text size="l" weight="bold" variant="darkpurple">
                    축제 바로가기
                </Text>
                <ButtonList />
            </ElementContainer>

            <Paragraph size="m" weight="bold" variant="darkpurple">
                총 사용자수 : {totalUser}
            </Paragraph>
        </>
    );
}
