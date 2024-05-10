import React, { useState } from "react";

import { motion, Variants } from "framer-motion";

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

    return (
        <StyledNav>
            <NavHeader>
                <Hapuruna>하푸르나</Hapuruna>
                <MenuIcon onClick={() => setShow(!show)}>
                    <MenuBar />
                    <MenuBar />
                    <MenuBar />
                </MenuIcon>
            </NavHeader>
            <motion.ul initial="closed" animate={show ? "open" : "closed"} variants={listVariants}>
                <NavItem variants={itemVariants}>
                    <NavLink href="#">공지사항</NavLink>
                </NavItem>
                <NavItem variants={itemVariants}>
                    <NavLink href="#">공연 타임테이블</NavLink>
                </NavItem>
                <NavItem variants={itemVariants}>
                    <NavLink href="#">부스 정보</NavLink>
                </NavItem>
                <NavItem variants={itemVariants}>
                    <NavLink href="#">만든이들</NavLink>
                </NavItem>
            </motion.ul>
        </StyledNav>
    );
};

export default Navigation;
