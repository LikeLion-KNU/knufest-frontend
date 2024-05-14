import React, { useState } from "react";
import { BiSolidMap } from "react-icons/bi";

import { Guest } from "@/components/display/Guest";
import { ShowDate } from "@/components/display/ShowData";
import { Paragraph } from "@/components/typography/Paragraph";
import { Text } from "@/components/typography/Text";

import tencmImg from "@/assets/10cm.jpg";
import bigmamaImg from "@/assets/bigmama.webp";
import hahaImg from "@/assets/haha.webp";
import jannaviImg from "@/assets/jannavi.jpg";
import loykimImg from "@/assets/loykim.webp";
import norazoImg from "@/assets/norazo.jpg";
import paulblancoImg from "@/assets/paulblanco.avif";
import qwerImg from "@/assets/qwer.webp";
import soranbandImg from "@/assets/soranband.webp";

import { MainContent, GuestCard, GuestContainer, Date } from "./SpecialGuestPage.styled";

const SpecialGuestPage: React.FC = () => {
    const [activeDate, setActiveDate] = useState<string>("5.22");

    const handleDateClick = (date: string) => {
        setActiveDate(date);
    };
    interface GuestData {
        [key: string]: { pic: string; name: string }[];
    }

    const guestData: GuestData = {
        "5.21": [
            { pic: jannaviImg, name: "잔나비" },
            { pic: norazoImg, name: "노라조" },
            { pic: soranbandImg, name: "소란밴드" },
        ],
        "5.22": [
            { pic: qwerImg, name: "QWER" },
            { pic: tencmImg, name: "10CM" },
            { pic: hahaImg, name: "하하" },
        ],
        "5.23": [
            { pic: paulblancoImg, name: "Paul Balnco" },
            { pic: loykimImg, name: "로이킴" },
            { pic: bigmamaImg, name: "빅마마" },
        ],
    };
    const renderGuests = () => {
        return guestData[activeDate].map((guest) => <Guest pic={guest.pic} name={guest.name} />);
    };

    return (
        <MainContent>
            <Paragraph size="44px" weight="bold" variant="darkpurple">
                SPECIAL GUEST
            </Paragraph>
            <GuestContainer>
                <Date>
                    <ShowDate
                        date="5.21"
                        day="TUE"
                        active={activeDate === "5.21"}
                        onClick={() => handleDateClick("5.21")}
                    />
                    <ShowDate
                        date="5.22"
                        day="WED"
                        active={activeDate === "5.22"}
                        onClick={() => handleDateClick("5.22")}
                    />
                    <ShowDate
                        date="5.23"
                        day="THU"
                        active={activeDate === "5.23"}
                        onClick={() => handleDateClick("5.23")}
                    />
                </Date>
                <div>
                    <BiSolidMap size={18} color="#5d5a88" />
                    <Text size="m" weight="bold" variant="darkpurple">
                        1주차장
                    </Text>
                </div>
                <GuestCard>{renderGuests()}</GuestCard>
            </GuestContainer>
        </MainContent>
    );
};
export default SpecialGuestPage;
