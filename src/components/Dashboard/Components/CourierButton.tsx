"use client";

import { Button } from "@mui/material";
import useCourierDialogStore from "@/hooks/zustand/useCourierDialogStore";

type CourierType = "Shipping" | "Returned";

export default function CourierButton({ onlineAppointmentId, type }: { onlineAppointmentId: string; type: CourierType }) {
    const { onOpen } = useCourierDialogStore();

    return (
        <Button size="small" onClick={() => onOpen(onlineAppointmentId, type)} sx={{ whiteSpace: "nowrap" }}>
            Add {type} Detail
        </Button>
    );
}
