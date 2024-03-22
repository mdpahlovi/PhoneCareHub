"use client";

import toast from "react-hot-toast";
import { Button } from "@mui/material";
import { handleCancel } from "@/app/dashboard/(appointment)/actions";

export default function CancelAppointment({ type, id }: { type: "online" | "offline"; id: string }) {
    const handleCancelAppointment = async () => {
        await handleCancel(id, type)
            .then(() => toast.success("Appointment Canceled Successfully"))
            .catch(() => toast.error("Failed To Appointment Canceled "));
    };

    return (
        <Button size="small" color="error" onClick={handleCancelAppointment}>
            Cancel
        </Button>
    );
}
