import { create } from "zustand";
import { Review } from "@prisma/client";

interface ReviewDialogStore {
    isEdit: boolean;
    userId: string;
    serviceId: string;
    open: boolean;
    review: Review | null;
    onClose: () => void;
    onOpen: (userId: string, serviceId: string) => void;
    onEdit: (review: Review) => void;
}

const initialValue = { isEdit: false, userId: "", serviceId: "", open: false, review: null };

const useReviewDialogStore = create<ReviewDialogStore>((set) => ({
    ...initialValue,
    onClose: () => set(initialValue),
    onOpen: (userId, serviceId) => set({ userId, serviceId, open: true }),
    onEdit: (review) => set({ open: true, isEdit: true, review }),
}));

export default useReviewDialogStore;
