import React, { useState } from "react";
import { Guest } from "@/components/display/Guest";
import { ShowDate } from "@/components/display/ShowData";
import { MainContent, GuestCard, GuestContainer, Date } from "./SpecialGuestPage.styled";
import { Paragraph } from "@/components/typography/Paragraph"
import { Text } from "@/components/typography/Text";
import { BiSolidMap } from "react-icons/bi";

const SpecialGuestPage: React.FC = () => {
    const [activeDate, setActiveDate] = useState<string>("5.22"); 

    const handleDateClick = (date: string) => { 
        setActiveDate(date);
    };
    interface GuestData {
        [key: string]: { pic: string; name: string; }[];
    }
    
    const guestData: GuestData = {
        "5.21": [
            { pic: "./src/assets/jannavi.jpg", name: "잔나비" },
            { pic: "./src/assets/norazo.jpg", name: "노라조" },
            { pic: "./src/assets/soranband.webp", name: "소란밴드" }
        ],
        "5.22": [
            { pic: "./src/assets/qwer.webp", name: "QWER" },
            { pic: "./src/assets/10cm.jpg", name: "10CM" },
            { pic: "./src/assets/haha.webp", name: "하하" }
        ],
        "5.23": [
            { pic: "./src/assets/paulblanco.avif", name: "Paul Balnco" },
            { pic: "./src/assets/loykim.webp", name: "로이킴" },
            { pic: "./src/assets/bigmama.webp", name: "빅마마" }
        ]
    };
    const renderGuests = () => {
        return guestData[activeDate].map((guest) => (
            <Guest pic={guest.pic} name={guest.name} />
        ));
    };

    return (
        <MainContent>
            <Paragraph size="44px" weight="bold" variant="darkpurple">SPECIAL GUEST</Paragraph>
            <GuestContainer>
                <Date>
                    <ShowDate date="5.21" day="TUE" active={activeDate === "5.21"} onClick={() => handleDateClick("5.21")} />
                    <ShowDate date="5.22" day="WED" active={activeDate === "5.22"} onClick={() => handleDateClick("5.22")} />
                    <ShowDate date="5.23" day="THU" active={activeDate === "5.23"} onClick={() => handleDateClick("5.23")} />
                </Date>
                <div>
                    <BiSolidMap size={18} color="#5d5a88" />
                    <Text size="m" weight="bold" variant="darkpurple">1주차장</Text>
                </div>
                <GuestCard>
                    { renderGuests() }
                </GuestCard>
            </GuestContainer>
        </MainContent>
    );
}
export default SpecialGuestPage;