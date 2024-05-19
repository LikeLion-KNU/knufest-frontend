import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { motion, Variants } from "framer-motion";

import HapurunaIcon from "@/assets/hapuruna.png";

import { StyledNav, NavHeader, Hapuruna, MenuIcon, MenuBar, NavItem, NavLink } from "./Navigation.styled";

const listVariants: Variants = {
    open: {
        height: "auto",
        clipPath: "inset(0% 0% 0% 0%)",
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
    closed: {
        height: 0,
        clipPath: "inset(0% 100% 0% 0%)",
        overflow: "hidden",
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};

const itemVariants: Variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
};

const Navigation: React.FC = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const handleNavLinkClick = (path: string) => {
        setShow(false);
        navigate(path);
    };

    return (
        <StyledNav>
            <NavHeader>
                <Hapuruna src={HapurunaIcon} width={80} onClick={() => navigate("/")} />
                <MenuIcon onClick={() => setShow(!show)}>
                    <MenuBar />
                    <MenuBar />
                    <MenuBar />
                </MenuIcon>
            </NavHeader>
            <motion.ul initial="closed" animate={show ? "open" : "closed"} variants={listVariants}>
                <NavItem variants={itemVariants}>
                    <NavLink onClick={() => handleNavLinkClick("/booth")}>부스 별 지도</NavLink>
                </NavItem>
                <NavItem variants={itemVariants}>
                    <NavLink onClick={() => handleNavLinkClick("/guests")}>Special Guest</NavLink>
                </NavItem>
                <NavItem variants={itemVariants}>
                    <NavLink onClick={() => handleNavLinkClick("/timetable")}>이벤트 일정</NavLink>
                </NavItem>
                <NavItem variants={itemVariants}>
                    <NavLink onClick={() => handleNavLinkClick("/contributors")}>만든이들</NavLink>
                </NavItem>
            </motion.ul>
        </StyledNav>
    );
};

export default Navigation;
