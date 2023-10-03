import { create } from "zustand";

interface StateStore {
    toggleMenu: boolean;
    setToggleMenu: () => void;
}

const useStateStore = create<StateStore>()((set) => ({
    toggleMenu: false,
    setToggleMenu: () => set((state) => ({ toggleMenu: !state.toggleMenu })),
}));

export default useStateStore;
