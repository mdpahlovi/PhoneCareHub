import components from "./components";
import { Inter } from "next/font/google";
import { PRIMARY, SECONDARY } from "./colors";
import type { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const inter = Inter({ weight: ["300", "400", "500", "700"], subsets: ["latin"], display: "swap" });

const setTheme = (mode: PaletteMode) => {
    return createTheme({
        palette: {
            mode: mode,
            primary: { main: PRIMARY.main, dark: PRIMARY.dark, light: PRIMARY.light },
            secondary: { main: SECONDARY.main, dark: SECONDARY.dark, light: SECONDARY.light },
        },
        shape: { borderRadius: 8 },
        components: components(mode),
        typography: { fontFamily: inter.style.fontFamily },
    });
};

export default setTheme;
