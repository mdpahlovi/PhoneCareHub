import { Link } from "@/exports/mui";
import { Button } from "@mui/material";

export default function SetDetailButton({ href }: { href: string }) {
    return (
        <Button size="small" sx={{ whiteSpace: "nowrap" }} LinkComponent={Link} href={`/dashboard/${href}`}>
            Set Detail
        </Button>
    );
}
