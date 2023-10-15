"use client";

import setTheme from "@/exports/theme";
import useThemeStore from "@/hooks/zustand/useThemeStore";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import NextEmotionCacheProvider from "./EmotionCache";

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    const { mode } = useThemeStore();

    return (
        <NextEmotionCacheProvider options={{ key: "phonecarehub" }}>
            <ThemeProvider theme={setTheme(mode)}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </NextEmotionCacheProvider>
    );
}
