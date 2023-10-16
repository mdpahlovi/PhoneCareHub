"use client";

import { Button } from "@mui/material";
import useUpdateData from "@/hooks/useUpdateData";

export default function CancelAppointment({ type, id }: { type: "online" | "offline"; id: string }) {
    let path: string;
    switch (type) {
        case "online":
            path = `/onlineAppointment`;
            break;
        case "offline":
            path = `/offlineAppointment`;
            break;
    }

    const { handleUpdate } = useUpdateData(`${path}/${id}`, `${path}s/?type=cancelled`);
    return (
        <Button size="small" color="error" onClick={() => handleUpdate({ status: "cancelled" })}>
            Cancel
        </Button>
    );
}
