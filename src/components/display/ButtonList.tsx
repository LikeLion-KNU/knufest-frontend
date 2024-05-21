import { FaRegBell } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { IoMapOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { PiMicrophoneStage } from "react-icons/pi";
import { RiKakaoTalkFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/forms/Button";
import { Text } from "@/components/typography/Text";

import { ButtonListContainer } from "./ButtonList.styled";

export const ButtonList = () => {
    const navigate = useNavigate();

    return (
        <ButtonListContainer>
            <Button width="auto" variant="purple" onClick={() => navigate("/booth")}>
                <div>
                    <IoMapOutline size={22} style={{ marginRight: "10px" }} />
                    <Text size="m" weight="bold" variant="white">
                        부스 별 지도
                    </Text>
                </div>
            </Button>
            <Button width="auto" variant="purple" onClick={() => navigate("/guests")}>
                <div>
                    <PiMicrophoneStage size={22} style={{ marginRight: "10px" }} />
                    <Text size="m" weight="bold" variant="white">
                        Special Guest
                    </Text>
                </div>
            </Button>
            <Button width="auto" variant="purple" onClick={() => navigate("/timetable")}>
                <div>
                    <LuCalendarDays size={22} style={{ marginRight: "10px" }} />
                    <Text size="m" weight="bold" variant="white">
                        이벤트 일정
                    </Text>
                </div>
            </Button>
            <Button width="auto" variant="purple" onClick={() => navigate("/contributors")}>
                <div>
                    <GoPeople size={22} style={{ marginRight: "10px" }} />
                    <Text size="m" weight="bold" variant="white">
                        만든이들
                    </Text>
                </div>
            </Button>
            <Button width="auto" variant="red" onClick={() => window.open("https://instagram.com/knu_ch", "_blank")}>
                <div>
                    <FaRegBell size={22} style={{ marginRight: "10px" }} />
                    <Text size="m" weight="bold" variant="white">
                        총학 Hotline
                    </Text>
                </div>
            </Button>

            {/* 총학 linktree */}
            <Button width="auto" variant="neon" onClick={() => window.open("https://linktr.ee/knuch2024", "_blank")}>
                <div>
                    <FaLink size={22} style={{ marginRight: "10px", color: "black" }} />
                    <Text size="m" weight="bold" variant="black">
                        총학 linktree
                    </Text>
                </div>
            </Button>

            {/* 개발진 문의 - 카카오톡 오픈채팅방 */}
            <Button
                width="auto"
                variant="kakaoyellow"
                onClick={() => window.open("https://open.kakao.com/o/gI1H2nsg", "_blank")}
            >
                <div>
                    <RiKakaoTalkFill size={22} style={{ marginRight: "10px", color: "black" }} />
                    <Text size="s" weight="bold" variant="black">
                        개발진 문의 - 카카오톡 오픈채팅방
                    </Text>
                </div>
            </Button>
        </ButtonListContainer>
    );
};
