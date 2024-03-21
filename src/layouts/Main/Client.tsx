"use client";

import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import useStateStore from "@/hooks/zustand/useStateStore";
import useThemeStore from "@/hooks/zustand/useThemeStore";
import ThemedLogo from "@/components/Common/ThemedLogo";
import useMediaQuery from "@mui/material/useMediaQuery";
import DarkModeIcon from "@mui/icons-material/Brightness7";
import LightModeIcon from "@mui/icons-material/Brightness4";

export function MenuButton() {
    const { toggleMenu, setToggleMenu } = useStateStore();

    return (
        <IconButton sx={{ display: { md: "none" } }} onClick={setToggleMenu}>
            {toggleMenu ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
    );
}

export function ModeToggle() {
    const { mode, setMode } = useThemeStore();

    return (
        <IconButton onClick={() => setMode(mode === "light" ? "dark" : "light")}>
            {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
    );
}

export function FooterLogo() {
    const theme = useTheme();
    const lessThanSm = useMediaQuery(theme.breakpoints.up("sm"));

    let props = {};
    if (lessThanSm) props = { position: "top", orientation: "vertical" };

    return <ThemedLogo {...props} />;
}
