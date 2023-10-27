import SideBarItems from "./SideBarItems";
import { Divider, Stack, Box } from "@mui/material";
import { ProfileButton, ProfileCard, SignOutButton } from "./Client";

export default function SideBar() {
    return (
        <Stack minHeight="100vh" display="flex" direction="column" justifyContent="space-between" px={2} py={3}>
            <Box>
                <ProfileCard />
                <SideBarItems />
            </Box>
            <Box>
                <Divider sx={{ mb: 3 }} />
                <ProfileButton />
                <SignOutButton />
            </Box>
        </Stack>
    );
}
