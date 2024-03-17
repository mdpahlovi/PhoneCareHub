import { create } from "zustand";

interface ConfirmDeleteStore {
    id: string;
    path: string;
    open: boolean;
    onClose: () => void;
    onOpen: (id: string, path: string) => void;
}

const useConfirmDeleteStore = create<ConfirmDeleteStore>((set) => ({
    id: "",
    path: "",
    open: false,
    onClose: () => set({ open: false }),
    onOpen: (id, path) => set({ id, path, open: true }),
}));

export default useConfirmDeleteStore;
