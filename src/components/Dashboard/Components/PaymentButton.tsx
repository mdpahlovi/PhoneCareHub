"use client";

import { Button } from "@mui/material";
import usePaymentDialogStore from "@/hooks/zustand/usePaymentDialogStore";

type PaymentButtonProps = { onlineAppointmentId: string; amount: number | null };

export default function PaymentButton({ onlineAppointmentId, amount }: PaymentButtonProps) {
    const { onOpen } = usePaymentDialogStore();

    return (
        <Button size="small" onClick={() => onOpen(onlineAppointmentId, amount)} sx={{ whiteSpace: "nowrap" }}>
            Pay Now
        </Button>
    );
}
