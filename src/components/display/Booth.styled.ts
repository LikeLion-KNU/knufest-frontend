import { motion } from "framer-motion";
import styled from "styled-components";

export const BoothListItem = styled(motion.li)`
    height: 70px;
    padding: 0px 25px;
    margin: 12px 0;
    border-radius: 25px;
    background-color: #e9e9fb;
`;

export const BoothLink = styled.a`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    text-decoration: none;

    span {
        display: flex;
        align-items: center;

        width: 100%;

        padding-left: 20px;
    }
`;

export const Index = styled.div`
    flex-shrink: 0;

    width: 30px;
    height: 30px;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #fff;
    background-color: #9874ff;
`;
