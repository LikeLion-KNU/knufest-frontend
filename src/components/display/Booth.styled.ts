import { motion } from "framer-motion";
import styled from "styled-components";

export const BoothList = styled(motion.li)`
    height: 40px;
    padding: 20px 25px;
    margin: 12px 0;
    border-radius: 25px;
    background-color: #e9e9fb;
    align-content: center;
`;

export const BoothLink = styled.a`
    position: relative;
    text-decoration: none;
    display: flex;
    align-items: center;

    span {
        position: absolute;
        left: 50px;
    }
`;

export const Index = styled.div`
    position: absolute;
    left: 0;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    align-content: center;
    text-align: center;
    font-weight: bolder;
    font-size: 20px;

    color: #fff;
    background-color: #9874ff;
`;

export const Heart = styled.div`
    position: absolute;
    right: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    font-size: 12px;
    line-height: 8px;
    color: #9874ff;
`;
