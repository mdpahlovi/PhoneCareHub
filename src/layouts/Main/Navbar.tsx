"use client";

import Image from "next/image";
import MenuItems from "./MenuItems";
import { styled } from "@mui/material/styles";
import Container from "@mui/system/Container";
import { Box, Collapse } from "@mui/material";
import { MenuButton } from "./Button";
import useStateStore from "@/hooks/useStateStore";

export default function Navbar() {
    const { toggleMenu } = useStateStore();

    const StyledNavbar = styled(Container)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: theme.spacing(3),
    }));

    const StyledMenuBox = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(3),
    }));

    const StyledMenuItems = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    }));

    const CollapseMenuItems = styled(Box)(({ theme }) => ({
        display: "none",
        flexDirection: "column",
        gap: theme.spacing(1),
        paddingInline: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            display: "flex",
        },
    }));

    return (
        <>
            <StyledNavbar>
                <Image src="/mui.png" alt="logo" width={65} height={30} />
                <StyledMenuBox>
                    <MenuButton />
                    <StyledMenuItems>
                        <MenuItems />
                    </StyledMenuItems>
                </StyledMenuBox>
            </StyledNavbar>
            <Collapse in={toggleMenu} timeout="auto" unmountOnExit>
                <CollapseMenuItems>
                    <MenuItems />
                </CollapseMenuItems>
            </Collapse>
        </>
    );
}
