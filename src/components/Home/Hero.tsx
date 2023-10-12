import Image from "next/image";

import { Box, Button, Stack, Typography } from "@mui/material";
import { StyledHero } from "./Styled";

export default function Hero() {
    return (
        <StyledHero>
            <Stack gap={2}>
                <Typography variant="h4" fontWeight={800}>
                    Empowering Tech Resilience
                </Typography>
                <Typography>Experience the future with every fix. PhoneCareHub.com, where your device&apos;s journey continues.</Typography>
                <Stack display="flex" direction="row" gap={3}>
                    <Button>Our Services</Button>
                    <Button variant="outlined">Book Now</Button>
                </Stack>
            </Stack>
            <Box display={{ xs: "none", md: "block" }} marginLeft="auto">
                <Image src="/images/hero.svg" alt="" style={{ width: "100%" }} width={500} height={500} />
            </Box>
        </StyledHero>
    );
}
