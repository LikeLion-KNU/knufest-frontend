import { motion } from "framer-motion";
import styled from "styled-components";

export const PageContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    position: relative;
`;

export const VisibleList = styled(motion.ul)`
    padding: 40px;
    width: 90%;
    list-style: none;
`;
