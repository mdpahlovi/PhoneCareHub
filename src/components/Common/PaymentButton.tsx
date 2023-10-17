"use client";

import { Button } from "@mui/material";
import usePaymentDialogStore from "@/hooks/zustand/usePaymentDialogStore";

type PaymentButtonProps = { onlineAppointmentId: string; amount: number | null; status: string };

export default function PaymentButton({ onlineAppointmentId, amount, status }: PaymentButtonProps) {
    const { onOpen } = usePaymentDialogStore();

    return (
        <Button size="small" onClick={() => onOpen(onlineAppointmentId, amount)} disabled={status !== "payment"}>
            Pay Now
        </Button>
    );
}
