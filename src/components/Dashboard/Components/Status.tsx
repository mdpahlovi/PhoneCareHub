import { Chip } from "@mui/material";
import firstWordCapital from "@/libs/firstWordCapital";

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

    return <Chip label={firstWordCapital(status)} color={color} />;
}
