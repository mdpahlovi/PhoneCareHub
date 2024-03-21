"use client";

import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { borderRounded } from "@/exports/constant";
import { signOut, useSession } from "next-auth/react";
import useStateStore from "@/hooks/zustand/useStateStore";
import Person2Rounded from "@mui/icons-material/Person2Rounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Box, Drawer, IconButton, Typography, Avatar, Button } from "@mui/material";

export function SideBarButton() {
    const { setToggleSideBar } = useStateStore();

    return (
        <IconButton onClick={setToggleSideBar} sx={{ display: { md: "none" } }}>
            <MenuIcon />
        </IconButton>
    );
}

export function TemporarySideBar({ children }: React.PropsWithChildren) {
    const { toggleSideBar, setToggleSideBar } = useStateStore();

    return (
        <Drawer
            variant="temporary"
            open={toggleSideBar}
            onClose={setToggleSideBar}
            ModalProps={{ keepMounted: true }}
            sx={{
                display: { xs: "block", md: "none" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: 264 },
            }}
        >
            {children}
        </Drawer>
    );
}

export function PermanentSideBar({ children }: React.PropsWithChildren) {
    return (
        <Drawer
            variant="permanent"
            sx={{
                display: { xs: "none", md: "block" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: 264 },
            }}
            open
        >
            {children}
        </Drawer>
    );
}

export function ProfileCard() {
    const { data } = useSession();

    return (
        <Box mt={1.25} mb={3} display="flex" alignItems="center" {...borderRounded}>
            <Avatar src={data?.user?.image!} alt="" sx={{ m: 1, width: 48, height: 48 }} />
            <Typography fontWeight={600}>{data?.user?.name}</Typography>
        </Box>
    );
}

export function SignOutButton() {
    return (
        <Button
            fullWidth
            size="large"
            color="error"
            variant="outlined"
            onClick={() => signOut()}
            startIcon={<LogoutRoundedIcon />}
            sx={{ justifyContent: "start" }}
        >
            Sign Out
        </Button>
    );
}

export function ProfileButton() {
    return (
        <Button
            fullWidth
            size="large"
            variant="outlined"
            LinkComponent={Link}
            href="/dashboard/profile"
            startIcon={<Person2Rounded />}
            sx={{ mb: 1, justifyContent: "start" }}
        >
            Profile
        </Button>
    );
}
