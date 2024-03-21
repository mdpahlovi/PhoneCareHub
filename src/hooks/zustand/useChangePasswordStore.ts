import { create } from "zustand";

interface ChangePasswordStore {
    id: string;
    open: boolean;
    path: "user" | "admin" | "";
    onClose: () => void;
    onOpen: (id: string, path: "user" | "admin") => void;
}

const useChangePasswordStore = create<ChangePasswordStore>((set) => ({
    id: "",
    path: "",
    open: false,
    onClose: () => set({ open: false }),
    onOpen: (id, path) => set({ id, path, open: true }),
}));

export default useChangePasswordStore;
