"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";
import { StyledLink, StyledLinkButton } from "@/exports/StyledComponent";

const routes = [
    { href: "/", text: "Home" },
    { href: "/features", text: "Features" },
    { href: "/services", text: "Services" },
    { href: "/listed", text: "Listed" },
    { href: "/contact", text: "Contact" },
    { href: "/login", text: "Login / Register", button: true },
];

export default function MenuItems() {
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
