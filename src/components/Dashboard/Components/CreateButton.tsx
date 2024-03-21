import Link from "next/link";
import { Button, Stack } from "@mui/material";
import firstWordCapital from "@/libs/firstWordCapital";

export default function CreateButton({ create }: { create: string }) {
    return (
        <Stack mb={3} alignItems="end">
            <Button LinkComponent={Link} href={`/dashboard/create-${create}`}>
                Create {firstWordCapital(create)}
            </Button>
        </Stack>
    );
}
