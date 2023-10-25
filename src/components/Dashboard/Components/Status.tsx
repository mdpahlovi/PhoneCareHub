import { Chip } from "@mui/material";
import firstWordCapital from "@/libs/firstWordCapital";
import { OfflineAppointmentStatus, OnlineAppointmentStatus } from "@/types/response";

export default function Status({ status }: { status: OnlineAppointmentStatus | OfflineAppointmentStatus }) {
    let color: any;
    switch (status) {
        case "returned" || "completed":
            color = "success";
            break;
        case "cancelled":
            color = "error";
            break;
        default:
            color = "primary";
            break;
    }

    return <Chip label={firstWordCapital(status)} color={color} />;
}
