import { CustomStyle } from "./custom";
import { filledInputClasses } from "@mui/material/FilledInput";
import type { Components, PaletteMode, Theme } from "@mui/material";

const components = (mode: PaletteMode): Components<Omit<Theme, "components">> => {
    return {
        MuiButton: {
            defaultProps: { color: "primary", variant: "contained" },
            styleOverrides: {
                root: {
                    boxShadow: "none",
                    textTransform: "none",
                    borderRadius: "9999px",
                    paddingInline: "1.5rem",
                },
                containedPrimary: ({ theme }) => CustomStyle.PrimaryButton(theme),
            },
        },
        MuiIconButton: {
            defaultProps: { color: "primary" },
            styleOverrides: {
                root: { borderRadius: "12px" },
                sizeMedium: { padding: "6px" },
                colorPrimary: ({ theme }) => CustomStyle.PrimaryButton(theme),
                colorError: ({ theme }) => CustomStyle.ErrorButton(theme),
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
        MuiAvatar: {
            defaultProps: { variant: "rounded" },
            styleOverrides: { rounded: { borderRadius: 16 } },
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: 16,
                    "&:last-child": {
                        paddingBottom: 16,
                    },
                },
            },
        },
    };
};

export default components;
