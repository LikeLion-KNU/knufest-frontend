import { IText, Text } from "./Text";

export interface IParagraph extends IText {
    children: React.ReactNode;
}

export const Paragraph: React.FC<IParagraph> = ({ size, weight, variant, children }) => {
    return (
        <p>
            <Text size={size} weight={weight} variant={variant}>
                {children}
            </Text>
        </p>
    );
};
