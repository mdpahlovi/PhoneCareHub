import Link from "next/link";
import Image from "next/image";
import { StyledHero } from "./Styled";
import { Box, Button, Stack, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Hero() {
    return (
        <StyledHero>
            <Stack gap={2}>
                <Typography variant="h4" fontWeight={800}>
                    Empowering Tech Resilience
                </Typography>
                <Typography>Experience the future with every fix. PhoneCareHub.com, where your device&apos;s journey continues.</Typography>
                <Stack display="flex" direction="row" flexWrap="wrap" gap={2}>
                    <Link href="/about">
                        <Button>Learn More</Button>
                    </Link>
                    <a href="https://wa.me/8801736817612" target="_blank">
                        <Button variant="outlined" startIcon={<WhatsAppIcon />}>
                            Whatsapp
                        </Button>
                    </a>
                </Stack>
            </Stack>
            <Box display={{ xs: "none", md: "block" }} ml="auto">
                <Image src="/images/hero.svg" alt="" style={{ width: "100%" }} width={500} height={500} />
            </Box>
        </StyledHero>
    );
}
