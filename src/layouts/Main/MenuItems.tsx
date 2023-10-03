"use client";

import Link from "next/link";
import { Fragment } from "react";
import { Button } from "@mui/material";
import { usePathname } from "next/navigation";
import { styled } from "@mui/material/styles";
import { NavLink } from "@/exports/component";
import type { NavLinkButtonProps } from "@/types/global";

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

    const NavLinkButton = styled((props: NavLinkButtonProps) => {
        return <Button component={Link} {...props} />;
    })(({ theme }) => ({
        [theme.breakpoints.down("md")]: {
            width: "max-content",
            marginTop: theme.spacing(1),
        },
    }));

    return routes.map(({ href, text, button }, idx) => (
        <Fragment key={idx}>
            {button ? (
                <NavLinkButton href={href}>{text}</NavLinkButton>
            ) : (
                <NavLink href={href} selected={href === pathname}>
                    {text}
                </NavLink>
            )}
        </Fragment>
    ));
}
