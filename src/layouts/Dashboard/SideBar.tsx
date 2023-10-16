"use client";

import Link from "next/link";
import { createElement } from "react";
import { ProfileCard } from "./Client";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { styled, alpha } from "@mui/material/styles";
import useDashboardLinks from "@/hooks/links/useDashboardLinks";
import { Button, ButtonProps, Divider, Stack, Box } from "@mui/material";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";

type StyledLinkButtonProps = { href?: string; selected?: boolean; children?: React.ReactNode } & ButtonProps;

export default function SideBar() {
    const pathname = usePathname();
    const routes = useDashboardLinks();

    const StyledLinkButton = styled((props: StyledLinkButtonProps) => {
        const { selected, ...others } = props;
        return <Button size="large" variant="text" color="inherit" component={Link} {...others} fullWidth />;
    })(({ theme, selected }) => ({
        justifyContent: "start",
        backgroundColor: selected ? alpha(theme.palette.primary.main, 0.25) : "",
        "&:hover": { backgroundColor: selected ? alpha(theme.palette.primary.main, 0.5) : "" },
    }));

    const StyledButton = styled((props: { children?: React.ReactNode } & ButtonProps) => {
        return <Button size="large" variant="outlined" {...props} fullWidth />;
    })(({ theme }) => ({
        justifyContent: "start",
    }));

    return (
        <Stack minHeight="100vh" display="flex" direction="column" justifyContent="space-between" px={2} py={3}>
            <Box>
                <ProfileCard />
                {routes.map(({ href, text, icon }, idx) => (
                    <StyledLinkButton key={idx} href={href} selected={href === pathname} startIcon={createElement(icon)}>
                        {text}
                    </StyledLinkButton>
                ))}
            </Box>
            <Box>
                <Divider sx={{ mb: 3 }} />
                <StyledButton LinkComponent={Link} href="/dashboard/profile" startIcon={<Person2RoundedIcon />} sx={{ mb: 1 }}>
                    Profile
                </StyledButton>
                <StyledButton color="error" startIcon={<LogoutRoundedIcon />} onClick={() => signOut()}>
                    Sign Out
                </StyledButton>
            </Box>
        </Stack>
    );
}
