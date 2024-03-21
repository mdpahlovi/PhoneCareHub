"use client";

import setTheme from "@/exports/theme";
import useThemeStore from "@/hooks/zustand/useThemeStore";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    const { mode } = useThemeStore();

    return (
        <AppRouterCacheProvider options={{ key: "phonecarehub" }}>
            <ThemeProvider theme={setTheme(mode)}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}
