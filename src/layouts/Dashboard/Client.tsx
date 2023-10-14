"use client";

import { useSession } from "next-auth/react";
import MenuIcon from "@mui/icons-material/Menu";
import useStateStore from "@/hooks/useStateStore";
import { borderRounded } from "@/exports/constant";
import { Box, Drawer, IconButton, Typography, Avatar } from "@mui/material";

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
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
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
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
            }}
            open
        >
            {children}
        </Drawer>
    );
}

export function ProfileCard() {
    const { data, update } = useSession();

    return (
        <Box mt={1.25} mb={3} display="flex" alignItems="center" {...borderRounded}>
            <Avatar src={data?.user?.image!} alt="" sx={{ m: 1, width: 48, height: 48 }} />
            <Typography fontWeight={600}>{data?.user?.name}</Typography>
        </Box>
    );
}
