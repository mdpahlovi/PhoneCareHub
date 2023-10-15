import Link from "next/link";
import { IconButton } from "@mui/material";
import { EditRounded } from "@mui/icons-material";

export default function EditButton({ href }: { href?: string }) {
    return (
        <IconButton component={Link} href={`/dashboard${href}`}>
            <EditRounded />
        </IconButton>
    );
}
