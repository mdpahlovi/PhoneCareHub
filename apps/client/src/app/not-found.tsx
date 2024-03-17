import Link from "next/link";
import Image from "next/image";
import { Button, Stack, Typography } from "@mui/material";

export default function NotFound() {
    return (
        <Stack style={{ minHeight: "100vh" }} justifyContent="center" alignItems="center">
            <Image src="/images/errors/not-found.png" alt="" width={384} height={384} />
            <Typography textAlign="center" variant="h4" fontWeight={800}>
                OOPS! Page Not Found
            </Typography>
            <Typography textAlign="center" mt={1}>
                Sorry, The page you are looking for is correctly not be found
            </Typography>
            <Button LinkComponent={Link} href="/" sx={{ mt: 2 }}>
                Back To Home
            </Button>
        </Stack>
    );
}
