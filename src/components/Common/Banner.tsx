"use client";

import Breadcrumbs from "./Breadcrumbs";
import { styled } from "@mui/material/styles";
import { usePathname } from "next/navigation";
import { borderRounded } from "@/exports/constant";
import { Stack, Container, Typography } from "@mui/material";
import firstWordCapital from "@/libs/firstWordCapital";

export const StyledBackground = styled("div")(({ theme }) => ({
    padding: "80px 0",
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: "url(/images/banner.jpg)",
    "&::before": {
        inset: "0",
        content: '""',
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
}));

export default function Banner({ children }: React.PropsWithChildren) {
    const pathname = usePathname().split("/");

    if (pathname.includes("dashboard")) {
        return (
            <Stack
                p={3}
                mb={3}
                direction={{ sm: "row" }}
                alignItems="center"
                justifyContent="space-between"
                gap={{ xs: 1, sm: 3 }}
                {...borderRounded}
            >
                <Typography variant="h5" fontWeight={600}>
                    {children}
                </Typography>
                <Breadcrumbs />
            </Stack>
        );
    } else {
        return (
            <StyledBackground>
                <Container sx={{ position: "relative", zIndex: 10 }}>
                    <Typography variant="h3" fontWeight={600} color="white">
                        {children ? children : firstWordCapital(pathname[1])}
                    </Typography>
                    <Breadcrumbs white />
                </Container>
            </StyledBackground>
        );
    }
}
