"use client";

import setTheme from "@/constants/theme";
import useThemeStore from "@/hooks/useThemeStore";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import NextEmotionCacheProvider from "./EmotionCache";

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    const { mode } = useThemeStore();

    return (
        <NextEmotionCacheProvider options={{ key: "mui" }}>
            <ThemeProvider theme={setTheme(mode)}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </NextEmotionCacheProvider>
    );
}
