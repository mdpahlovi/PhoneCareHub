import { Chip } from "@mui/material";

export default function Status({ status }: { status: string }) {
    let color: any;
    switch (status) {
        case "completed":
            color = "success";
            break;
        case "cancelled":
            color = "error";
            break;
        default:
            color = "primary";
            break;
    }

    return <Chip label={status.charAt(0).toUpperCase() + status.slice(1)} color={color} />;
}
