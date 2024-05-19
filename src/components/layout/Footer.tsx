import React from "react";
import { FaTimes } from "react-icons/fa";

import {
    FooterContainer,
    Logo,
    LogoLikeLion,
    EventName,
    LogoWrapper,
    LegalLinks,
    TopBorder,
    LegalText,
} from "@/components/layout/Footer.styled";
import { Text } from "@/components/typography/Text";

import logo from "@/assets/hapuruna.png";
import logolikelionknu from "@/assets/likelionknu.png";

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <TopBorder />
            <LogoWrapper>
                <Logo src={logo} alt="Event Logo" />
                <FaTimes size={20} color="#767494" />
                <LogoLikeLion src={logolikelionknu} alt="Likelion Logo" />
            </LogoWrapper>
            <EventName>
                <Text size="m" weight="bold" variant="purple">
                    2024 경북대학교 대동제
                </Text>
            </EventName>
            <LegalLinks>
                <LegalText>
                    <Text size="s" weight="normal" variant="lightpurple">
                        © 2024 LikeLion, All Rights Reserved.
                    </Text>
                </LegalText>
                <LegalText>
                    <Text size="xs" weight="normal" variant="lightpurple">
                        Terms and Conditions
                    </Text>
                    <Text size="xs" weight="normal" variant="purple">
                        &nbsp;|&nbsp;
                    </Text>
                    <Text size="xs" weight="normal" variant="lightpurple">
                        Privacy Policy
                    </Text>
                </LegalText>
            </LegalLinks>
        </FooterContainer>
    );
};

export default Footer;
