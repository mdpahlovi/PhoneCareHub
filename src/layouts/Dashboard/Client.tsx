"use client";

import { useSession } from "next-auth/react";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { borderRounded } from "@/exports/constant";
import useStateStore from "@/hooks/zustand/useStateStore";
import { Box, Drawer, IconButton, Typography, Avatar, Button, ButtonProps } from "@mui/material";

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

export const StyledButton = styled((props: { children?: React.ReactNode } & ButtonProps) => {
    return <Button size="large" variant="outlined" {...props} fullWidth />;
})({ justifyContent: "start" });
