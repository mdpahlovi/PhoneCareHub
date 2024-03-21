import { create } from "zustand";
import { DeletePath } from "@/types";

interface ConfirmDeleteStore {
    id: string;
    path: DeletePath | "";
    open: boolean;
    onClose: () => void;
    onOpen: (id: string, path: DeletePath) => void;
}

const useConfirmDeleteStore = create<ConfirmDeleteStore>((set) => ({
    id: "",
    path: "",
    open: false,
    onClose: () => set({ open: false }),
    onOpen: (id, path) => set({ id, path, open: true }),
}));

export default useConfirmDeleteStore;
