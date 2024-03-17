import Image from "next/image";
import { getServerSession } from "next-auth";
import { Stack, Typography } from "@mui/material";
import { authOptions } from "../api/auth/[...nextauth]/options";

export default async function Dashboard() {
    const session = await getServerSession(authOptions);

    return (
        <Stack minHeight="calc(100vh - 112px)" alignItems="center" justifyContent="center" gap={3}>
            <Image src={session?.user?.image!} alt="" width={160} height={160} style={{ borderRadius: 24 }} />
            <Typography variant="h3" fontWeight={800} textAlign="center">
                Welcome {session?.user?.name}
                <br />
                To PhoneCareHub
            </Typography>
        </Stack>
    );
}
