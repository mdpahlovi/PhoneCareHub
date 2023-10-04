"use client";

import Image from "next/image";
import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useStateStore from "@/hooks/useStateStore";
import useThemeStore from "@/hooks/useThemeStore";
import DarkModeIcon from "@mui/icons-material/Brightness7";
import LightModeIcon from "@mui/icons-material/Brightness4";

export function MenuButton() {
    const { toggleMenu, setToggleMenu } = useStateStore();

    const StyledIconButton = styled(IconButton)(({ theme }) => ({
        display: "none",
        cursor: "pointer",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            display: "flex",
        },
    }));

    return <StyledIconButton onClick={setToggleMenu}>{toggleMenu ? <CloseIcon /> : <MenuIcon />}</StyledIconButton>;
}

export function ModeToggle() {
    const { mode, setMode } = useThemeStore();

    return (
        <IconButton onClick={() => setMode(mode === "light" ? "dark" : "light")}>
            {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
    );
}

export function ThemedLogo() {
    return <Image src="/mui.png" alt="logo" width={65} height={30} />;
}
