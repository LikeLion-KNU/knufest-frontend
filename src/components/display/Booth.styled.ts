import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import styled from "styled-components";

export const BoothListItem = styled(motion.li)`
    display: flex;
    align-items: center;

    height: 70px;
    padding: 0px 25px;
    margin: 12px 0;
    border-radius: 25px;
`;

export const BoothLink = styled(Link)`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    text-decoration: none;

    span {
        display: flex;
        flex-direction: column;

        width: 100%;

        padding-left: 10px;
        gap: 1px;
    }
`;

export const Index = styled.div<{ category: string }>`
    flex-shrink: 0;
    flex-basis: 30px;
    flex-grow: 1;

    width: auto;
    height: 30px;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #fff;
    background-color: #9874ff;

    background-color: ${(props) => {
        switch (props.category) {
            case "pub":
                return "#9874ff";
            case "comp":
                return "#66A382";
            case "other":
                return "#6273AD";
        }
    }};
`;
