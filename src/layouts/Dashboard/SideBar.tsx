import Link from "next/link";
import { signOut } from "next-auth/react";
import SideBarItems from "./SideBarItems";
import { Divider, Stack, Box } from "@mui/material";
import { ProfileCard, StyledButton } from "./Client";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Person2Rounded from "@mui/icons-material/Person2Rounded";

export default function SideBar() {
    return (
        <Stack minHeight="100vh" display="flex" direction="column" justifyContent="space-between" px={2} py={3}>
            <Box>
                <ProfileCard />
                <SideBarItems />
            </Box>
            <Box>
                <Divider sx={{ mb: 3 }} />
                <StyledButton LinkComponent={Link} href="/dashboard/profile" startIcon={<Person2Rounded />} sx={{ mb: 1 }}>
                    Profile
                </StyledButton>
                <StyledButton color="error" startIcon={<LogoutRoundedIcon />} onClick={() => signOut()}>
                    Sign Out
                </StyledButton>
            </Box>
        </Stack>
    );
}
