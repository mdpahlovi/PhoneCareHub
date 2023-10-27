"use client";

import Link from "next/link";
import { createElement } from "react";
import { usePathname } from "next/navigation";
import { styled, alpha } from "@mui/material/styles";
import useDashboardLinks from "@/hooks/links/useDashboardLinks";
import { Button, ButtonProps } from "@mui/material";

type StyledLinkButtonProps = { href?: string; selected?: boolean; children?: React.ReactNode } & ButtonProps;

export default function SideBarItems() {
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

    return routes.map(({ href, text, icon }, idx) => (
        <StyledLinkButton key={idx} href={href} selected={href === pathname} startIcon={createElement(icon)}>
            {text}
        </StyledLinkButton>
    ));
}
