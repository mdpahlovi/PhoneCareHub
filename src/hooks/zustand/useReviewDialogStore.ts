import { create } from "zustand";

interface ReviewDialogStore {
    userId: string;
    serviceId: string;
    open: boolean;
    onClose: () => void;
    onOpen: (userId: string, serviceId: string) => void;
}

const useReviewDialogStore = create<ReviewDialogStore>((set) => ({
    userId: "",
    serviceId: "",
    open: false,
    onClose: () => set({ open: false }),
    onOpen: (userId, serviceId) => set({ userId, serviceId, open: true }),
}));

export default useReviewDialogStore;
