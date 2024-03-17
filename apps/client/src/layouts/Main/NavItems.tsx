"use client";

import Link from "next/link";
import { Fragment } from "react";
import { Button } from "@mui/material";
import useNavLinks from "@/hooks/links/useNavLinks";
import { usePathname } from "next/navigation";
import { StyledLink } from "@/components/Common/StyledLink";

export default function NavItems() {
    const routes = useNavLinks();
    const pathname = usePathname();

    return routes.map(({ href, text, button }, idx) => (
        <Fragment key={idx}>
            {button ? (
                <Button LinkComponent={Link} href={href} sx={{ width: "max-content", mt: { xs: 1, md: 0 } }}>
                    {text}
                </Button>
            ) : (
                <StyledLink href={href} selected={href === pathname}>
                    {text}
                </StyledLink>
            )}
        </Fragment>
    ));
}
