import NavItems from "./NavItems";
import { MobileMenu } from "@/exports/mui";
import { MenuButton, ModeToggle } from "./Client";
import { Box, Stack, Container } from "@mui/material";
import ThemedLogo from "@/components/Common/ThemedLogo";

export default function Navbar() {
    return (
        <Box borderBottom={1} borderColor="divider">
            <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <ThemedLogo />
                <Stack direction="row" alignItems="center" gap={3} p={2}>
                    <Stack display={{ xs: "none", md: "flex" }} direction="row" alignItems="center" justifyContent="space-between" gap={3}>
                        <NavItems />
                    </Stack>
                    <ModeToggle />
                    <MenuButton />
                </Stack>
            </Container>
            <MobileMenu>
                <Stack display={{ md: "none" }} gap={1} px={3} pb={3}>
                    <NavItems />
                </Stack>
            </MobileMenu>
        </Box>
    );
}
