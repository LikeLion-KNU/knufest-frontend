import styled from "styled-components";

export interface IText {
    size: "xs" | "s" | "m" | "l" | "xl" | string;
    weight: "bold" | "normal";
}

export const Text = styled.span<IText>`
    font-weight: ${(props) => props.weight};

    font-size: ${(props) => {
        switch (props.size) {
            case "xs":
                return "14px";
            case "s":
                return "16px";
            case "m":
                return "18px";
            case "l":
                return "22px";
            case "xl":
                return "56px";
            default:
                return props.size;
        }
    }};
`;
