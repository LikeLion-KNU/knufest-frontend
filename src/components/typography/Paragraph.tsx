import styled from "styled-components";

import { IText, Text } from "./Text";

export interface IParagraph extends IText {
    children: React.ReactNode;
    isTitle?: boolean;
}

const ParagraphStyled = styled.p<{ isTitle?: boolean }>`
    text-shadow: ${({ isTitle }) => (isTitle ? "0px 4px 4px rgba(0, 0, 0, 0.1)" : "none")};
    font-family: ${({ isTitle }) => (isTitle ? "Blinker SemiBold" : "Pretendard")};
`;

export const Paragraph: React.FC<IParagraph> = ({ size, weight, variant, children, isTitle }) => {
    return (
        <ParagraphStyled isTitle={isTitle}>
            <Text size={size} weight={weight} variant={variant}>
                {children}
            </Text>
        </ParagraphStyled>
    );
};
