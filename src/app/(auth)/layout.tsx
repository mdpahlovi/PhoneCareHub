import LayoutTitle from "@/components/Auth/LayoutTitle";
import ThemedLogo from "@/components/Common/ThemedLogo";
import { Copyright } from "@/exports/mui";
import { Box, Divider, Stack } from "@mui/material";
import Image from "next/image";

export default function AuthLayout({ children }: React.PropsWithChildren) {
    const gap = { xs: 3, sm: 8, md: 4, lg: 6 };
    const mdHidden = { xs: "none", md: "flex" };

    return (
        <Box
            sx={{
                px: gap,
                height: "100vh",
                display: "grid",
                alignItems: "center",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1px 1fr" },
                gap,
            }}
        >
            <Stack display={mdHidden} gap={4}>
                <LayoutTitle />
                <Image src="/images/auth.png" alt="" width={480} height={360} />
            </Stack>
            <Divider orientation="vertical" sx={{ display: mdHidden }} />
            <Stack gap={4}>
                <ThemedLogo />
                {children}
                <Copyright />
            </Stack>
        </Box>
    );
}
