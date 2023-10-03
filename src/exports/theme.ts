import { Inter } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const inter = Inter({ weight: ["300", "400", "500", "700"], subsets: ["latin"], display: "swap" });

const theme = createTheme({
    palette: { mode: "light" },
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
                sizeMedium: { padding: "6px" },
                colorPrimary: ({ theme }) => ({ border: `1px solid ${theme.palette.primary.main}` }),
            },
        },
    },
});

export default theme;
