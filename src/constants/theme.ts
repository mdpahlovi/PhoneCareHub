import { Inter } from "next/font/google";
import { PRIMARY, SECONDARY } from "./colors";
import type { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { filledInputClasses } from "@mui/material/FilledInput";

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
                defaultProps: { color: "primary", variant: "contained" },
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
                    root: { borderRadius: "12px" },
                    sizeMedium: { padding: "6px" },
                    colorPrimary: {
                        transition: "all 250ms",
                        backgroundColor: mode === "light" ? PRIMARY.lighter : PRIMARY.darker,
                        "&:hover": {
                            color: "#FFFFFF",
                            backgroundColor: mode === "light" ? PRIMARY.light : PRIMARY.dark,
                        },
                    },
                },
            },
            MuiTextField: { defaultProps: { fullWidth: true, variant: "filled" } },
            MuiFilledInput: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        overflow: "hidden",
                        backgroundColor: "transparent",
                        borderRadius: "12px",
                        border: `1px solid ${theme.palette.divider}`,
                        transition: theme.transitions.create(["border-color", "box-shadow"]),
                        "&:hover": { backgroundColor: theme.palette.action.hover },
                        "&:before": { display: "none" },
                        "&:after": { display: "none" },
                        [`&.${filledInputClasses.disabled}`]: { backgroundColor: "transparent" },
                        [`&.${filledInputClasses.focused}`]: {
                            backgroundColor: "transparent",
                            borderColor: theme.palette.primary.main,
                        },
                        [`&.${filledInputClasses.error}`]: { borderColor: theme.palette.error.main },
                    }),
                },
            },
            MuiFormLabel: { styleOverrides: { root: { marginTop: "2px" } } },
        },
    });
};

export default setTheme;
