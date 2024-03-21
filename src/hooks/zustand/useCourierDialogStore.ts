import { create } from "zustand";

type CourierType = "Shipping" | "Returned";

interface CourierDialogStore {
    type: CourierType | string;
    onlineAppointmentId: string;
    open: boolean;
    onClose: () => void;
    onOpen: (onlineAppointmentId: string, type: CourierType) => void;
}

const useCourierDialogStore = create<CourierDialogStore>((set) => ({
    type: "",
    onlineAppointmentId: "",
    open: false,
    onClose: () => set({ open: false }),
    onOpen: (onlineAppointmentId, type) => set({ onlineAppointmentId, type, open: true }),
}));

export default useCourierDialogStore;
