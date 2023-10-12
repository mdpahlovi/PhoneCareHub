"use client";

import { Fragment } from "react";
import useNavLinks from "@/hooks/useNavLinks";
import { usePathname } from "next/navigation";
import { StyledLink, StyledLinkButton } from "@/components/Common/StyledComponent";

export default function MenuItems() {
    const routes = useNavLinks();
    const pathname = usePathname();

    return routes.map(({ href, text, button }, idx) => (
        <Fragment key={idx}>
            {button ? (
                <StyledLinkButton href={href} navbar>
                    {text}
                </StyledLinkButton>
            ) : (
                <StyledLink href={href} selected={href === pathname}>
                    {text}
                </StyledLink>
            )}
        </Fragment>
    ));
}
