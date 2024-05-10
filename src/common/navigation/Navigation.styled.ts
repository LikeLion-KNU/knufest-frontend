import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledNav = styled.nav`
    width: min(100%, 700px);
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    padding: 10px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 0 0 10px 10px;

    & ul {
        padding: 0;
    }

    & ul,
    li {
        list-style: none;
        margin: 0;
        padding-inline-start: 0;
        font-weight: bold;
    }

    li {
        padding: 15px 0;
    }
`;

export const NavHeader = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;
    height: 60px;
    gap: 100px;
`;

export const Hapuruna = styled.h3`
    color: black;
`;

export const MenuIcon = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 22px;
`;

export const MenuBar = styled.span`
    display: block;
    height: 3px;
    width: 100%;
    background-color: black;
`;

export const NavItem = styled(motion.li)`
    padding: 10px 0;
    width: 100%;
    text-align: center;
`;

export const NavLink = styled.a`
    text-decoration: none;
    color: black;
`;
