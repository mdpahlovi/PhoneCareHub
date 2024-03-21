import { Link } from "@/exports/mui";
import { Button } from "@mui/material";

export default function DetailButton({ href, label }: { href: string; label: string }) {
    return (
        <Button size="small" sx={{ whiteSpace: "nowrap" }} LinkComponent={Link} href={`/dashboard/${href}`}>
            {label}
        </Button>
    );
}
