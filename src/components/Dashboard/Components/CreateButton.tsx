import Link from "next/link";
import { Button, Stack } from "@mui/material";
import firstWordCapital from "@/libs/firstWordCapital";

export default function CreateButton({ href }: { href: string }) {
    return (
        <Stack mb={3} alignItems="end">
            <Button LinkComponent={Link} href={`/dashboard/create-${href}`}>
                Create {firstWordCapital(href)}
            </Button>
        </Stack>
    );
}
