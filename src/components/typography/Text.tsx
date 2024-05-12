import styled from "styled-components";

export interface IText {
    size: "xs" | "s" | "m" | "l" | "xl" | string;
    weight: "bold" | "normal";
    variant?: "darkpurple" | "purple" | "white" | "lightpurple";
}

export const Text = styled.span<IText>`
    font-weight: ${(props) => props.weight ?? "normal"};

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

    color: ${(props) => {
        switch (props.variant) {
            case "darkpurple":
                return "#5d5a88";
            case "purple":
                return "#767494";
            case "lightpurple":
                return "#adabc3";
            case "white":
                return "#ffffff";
        }
    }};
`;
