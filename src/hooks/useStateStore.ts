import { create } from "zustand";

interface StateStore {
    toggleMenu: boolean;
    setToggleMenu: () => void;
    toggleSideBar: boolean;
    setToggleSideBar: () => void;
}

const useStateStore = create<StateStore>()((set) => ({
    toggleMenu: false,
    toggleSideBar: false,
    setToggleMenu: () => set((state) => ({ toggleMenu: !state.toggleMenu })),
    setToggleSideBar: () => set((state) => ({ toggleSideBar: !state.toggleSideBar })),
}));

export default useStateStore;
