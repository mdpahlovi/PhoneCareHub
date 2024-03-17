import Link from "next/link";
import Image from "next/image";
import { Button, Stack, Typography } from "@mui/material";

export default function AuthError({ searchParams }: { searchParams: { error?: string } }) {
    return (
        <Stack style={{ minHeight: "100vh" }} justifyContent="center" alignItems="center">
            <Image src="/images/errors/auth-error.png" alt="" width={384} height={384} />
            <Typography textAlign="center" variant="h4" fontWeight={800}>
                OOPS! {searchParams?.error}
            </Typography>
            <Typography textAlign="center" mt={1}>
                This error can be happened because of network issue. Please Try again or use custom login
            </Typography>
            <Button LinkComponent={Link} href="/login" sx={{ mt: 2 }}>
                Back To Login
            </Button>
        </Stack>
    );
}
