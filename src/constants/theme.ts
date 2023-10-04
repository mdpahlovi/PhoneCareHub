import { Inter } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import type { PaletteMode } from "@mui/material";
import { PRIMARY, SECONDARY } from "./colors";

const inter = Inter({ weight: ["300", "400", "500", "700"], subsets: ["latin"], display: "swap" });

const setTheme = (mode: PaletteMode) => {
    return createTheme({
        palette: {
            mode: mode,
            primary: { main: PRIMARY.main, dark: PRIMARY.dark, light: PRIMARY.light },
            secondary: { main: SECONDARY.main, dark: SECONDARY.dark, light: SECONDARY.light },
        },
        shape: { borderRadius: 8 },
        typography: { fontFamily: inter.style.fontFamily },
        components: {
            MuiButton: {
                defaultProps: {
                    color: "primary",
                    variant: "contained",
                },
                styleOverrides: {
                    root: {
                        boxShadow: "none",
                        textTransform: "none",
                        borderRadius: "9999px",
                        paddingInline: "1.5rem",
                    },
                },
            },
            MuiIconButton: {
                defaultProps: { color: "primary" },
                styleOverrides: {
                    root: { borderRadius: "16px" },
                    sizeMedium: { padding: "5.5px" },
                    colorPrimary: {
                        backgroundColor: mode === "light" ? PRIMARY.lighter : PRIMARY.darker,
                        "&:hover": {
                            color: "#FFFFFF",
                            backgroundColor: mode === "light" ? PRIMARY.light : PRIMARY.dark,
                        },
                    },
                },
            },
        },
    });
};

export default setTheme;
