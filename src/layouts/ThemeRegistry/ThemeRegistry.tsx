"use client";

import theme from "@/exports/theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NextEmotionCacheProvider from "./EmotionCache";

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    return (
        <NextEmotionCacheProvider options={{ key: "mui" }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </NextEmotionCacheProvider>
    );
}
