import Image from "next/image";
import { StyledAbout } from "./Styled";
import { Box, Stack, Typography } from "@mui/material";

export default function About() {
    return (
        <StyledAbout>
            <Stack gap={2}>
                <Typography variant="h4" fontWeight={800}>
                    What we do
                </Typography>
                <Typography>
                    The most comprehensive repairs available at PhoneCareHub. Any device, mobile or tablet can be repaired or upgraded by
                    us, learn more about us and see why we are the best choice for device repairs and upgrades.
                </Typography>
                <Typography align="right" variant="h5" fontWeight={800} borderRight={6} borderColor="secondary.main" pr={2}>
                    10+ Years Of Working Experience In Quality Repair Services.
                </Typography>
                <Typography>
                    We have a fully trained, experienced service department ready to handle all of your service needs. We have been in the
                    repair and service business since 2006.
                </Typography>
            </Stack>
            <Box display={{ xs: "none", md: "block" }} ml="auto">
                <Image src="/images/about/page.jpg" alt="" style={{ width: "100%" }} width={400} height={400} />
            </Box>
        </StyledAbout>
    );
}
