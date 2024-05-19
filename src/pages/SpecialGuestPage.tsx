import React, { useState } from "react";
import { BiSolidMap } from "react-icons/bi";

import DateSelector from "@/components/display/DateSelector";
import { Guest } from "@/components/display/Guest";
import { Paragraph } from "@/components/typography/Paragraph";
import { Text } from "@/components/typography/Text";

import tencmImg from "@/assets/10cm.jpg";
import backImg from "@/assets/BackImg.png";
import hahaImg from "@/assets/haha.webp";
import jannaviImg from "@/assets/jannavi.jpg";
import jeonhangilImg from "@/assets/jeonhangil.webp";
import leesangmi from "@/assets/leesangmi.jpg";
import leeyeonghyun from "@/assets/leeyeonghyun.webp";
import loykimImg from "@/assets/loykim.webp";
import norazoImg from "@/assets/norazo.jpg";
import paulblancoImg from "@/assets/paulblanco.avif";
import qwerImg from "@/assets/qwer.webp";

import { GuestCard, GuestContainer, BackImg, LocationWrapper } from "./SpecialGuestPage.styled";

const SpecialGuestPage: React.FC = () => {
    const [activeDate, setActiveDate] = useState<string>("5.21");

    const handleDateClick = (date: string) => {
        setActiveDate(date);
    };
    interface GuestData {
        [key: string]: { pic: string; name: string }[];
    }

    const guestData: GuestData = {
        "5.21": [
            { pic: leesangmi, name: "이상미(EX)" },
            { pic: norazoImg, name: "노라조" },
            { pic: jannaviImg, name: "잔나비" },
        ],
        "5.22": [
            { pic: hahaImg, name: "하하" },
            { pic: qwerImg, name: "QWER" },
            { pic: tencmImg, name: "10CM" },
        ],
        "5.23": [
            { pic: jeonhangilImg, name: "전한길" },
            { pic: loykimImg, name: "로이킴" },
            { pic: paulblancoImg, name: "Paul Balnco" },
            { pic: leeyeonghyun, name: "이영현(빅마마)" },
        ],
    };
    const renderGuests = () => {
        return guestData[activeDate].map((guest) => <Guest pic={guest.pic} name={guest.name} />);
    };

    return (
        <>
            <Paragraph size="xl" weight="bold" variant="darkpurple" isTitle>
                SPECIAL GUEST
            </Paragraph>
            <BackImg src={backImg} alt="background" />
            <GuestContainer>
                <DateSelector
                    activeDate={activeDate}
                    onDateClick={handleDateClick}
                    dates={[
                        { date: "5.21", day: "TUE" },
                        { date: "5.22", day: "WED" },
                        { date: "5.23", day: "THU" },
                    ]}
                />
                <LocationWrapper>
                    <BiSolidMap size={18} color="#5d5a88" />
                    <Text size="m" weight="bold" variant="darkpurple">
                        대운동장
                    </Text>
                </LocationWrapper>
                <GuestCard>{renderGuests()}</GuestCard>
            </GuestContainer>
        </>
    );
};
export default SpecialGuestPage;
