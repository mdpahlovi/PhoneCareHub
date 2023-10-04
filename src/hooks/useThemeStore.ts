import { create } from "zustand";
import type { PaletteMode } from "@mui/material";

interface ThemeStore {
    mode: PaletteMode;
    setMode: (payload: PaletteMode) => void;
}

const useThemeStore = create<ThemeStore>()((set) => ({
    mode: "light",
    setMode: (payload) => set({ mode: payload }),
}));

export default useThemeStore;
