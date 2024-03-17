"use client";
import Image from "next/image";
import { Button, Stack, Typography } from "@mui/material";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    return (
        <Stack style={{ minHeight: "100vh" }} justifyContent="center" alignItems="center">
            <Image src="/images/errors/global-error.png" alt="" width={384} height={384} />
            <Typography textAlign="center" variant="h4" fontWeight={800}>
                Something went wrong!
            </Typography>
            <Typography textAlign="center" mt={1}>
                {error.message}
            </Typography>
            <Button onClick={() => reset()} sx={{ mt: 2 }}>
                Try Again
            </Button>
        </Stack>
    );
}
