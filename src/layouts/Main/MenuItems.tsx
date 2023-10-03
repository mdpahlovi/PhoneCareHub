import Link from "next/link";
import { Fragment } from "react";
import { Button } from "@mui/material";
import { usePathname } from "next/navigation";
import { styled } from "@mui/material/styles";
import type { NavLink, NavLinkButton } from "@/types/global";

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

    const NavLink = styled((props: NavLink) => {
        const { selected, ...other } = props;
        return <Link {...other} />;
    })(({ theme, selected }) => ({
        fontWeight: "500",
        textDecoration: selected ? "underline" : "none",
        color: selected ? theme.palette.text.primary : theme.palette.text.secondary,
        "&:hover": { textDecoration: "underline" },
    }));

    const NavLinkButton = styled((props: NavLinkButton) => {
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
