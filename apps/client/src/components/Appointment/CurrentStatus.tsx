"use client";

import { Chip, Stack } from "@mui/material";
import { getStatus } from "@/exports/constant";
import { useSearchParams } from "next/navigation";
import firstWordCapital from "@/libs/firstWordCapital";
import { OfflineAppointmentStatus, OnlineAppointmentStatus } from "@/types/response";

type AppointmentType = "online" | "offline";
type CurrentStatusProps = { type?: AppointmentType; status: OnlineAppointmentStatus | OfflineAppointmentStatus; completed: boolean };

export default function CurrentStatus({ type, status, completed }: CurrentStatusProps) {
    const searchParams = useSearchParams();

    let status_array;
    if (type) {
        status_array = getStatus(type, completed);
    } else if (searchParams.get("type")) {
        status_array = getStatus(searchParams.get("type") as AppointmentType, completed);
    } else {
        status_array = [status];
    }

    return (
        <Stack mt={1.5} direction="row" flexWrap="wrap" gap={1}>
            {status_array.map((s) => (
                <Chip key={s} label={firstWordCapital(s)} color={s === status ? "primary" : "default"} />
            ))}
        </Stack>
    );
}
