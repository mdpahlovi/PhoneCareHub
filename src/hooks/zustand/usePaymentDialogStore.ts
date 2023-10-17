import { create } from "zustand";

interface PaymentDialogStore {
    onlineAppointmentId: string;
    open: boolean;
    amount: number | null;
    onClose: () => void;
    onOpen: (onlineAppointmentId: string, amount: number | null) => void;
}

const usePaymentDialogStore = create<PaymentDialogStore>((set) => ({
    onlineAppointmentId: "",
    id: "",
    amount: null,
    open: false,
    onClose: () => set({ open: false }),
    onOpen: (onlineAppointmentId, amount) => set({ onlineAppointmentId, amount, open: true }),
}));

export default usePaymentDialogStore;
