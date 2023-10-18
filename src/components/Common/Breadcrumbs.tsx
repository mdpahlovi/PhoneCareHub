"use client";

import Link, { LinkProps } from "next/link";
import { styled } from "@mui/material/styles";
import { usePathname } from "next/navigation";
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import firstWordCapital from "@/libs/firstWordCapital";

type StyledLinkProps = { white?: boolean; selected?: boolean; children?: React.ReactNode } & LinkProps;

export const StyledBreadcrumbLink = styled((props: StyledLinkProps) => {
    const { white, selected, ...other } = props;
    return <Link {...other} />;
})(({ theme, white, selected }) => ({
    textDecoration: selected ? "underline" : "none",
    color: selected ? theme.palette.secondary.main : white ? "white" : theme.palette.text.primary,
    "&:hover": { textDecoration: "underline" },
}));

export default function Breadcrumbs({ white }: { white?: boolean }) {
    const pathname = usePathname();
    const paths = pathname.includes("dashboard") ? pathname.split("/").slice(1) : pathname.split("/");

    return (
        <MuiBreadcrumbs separator="›" sx={{ color: white ? "white" : "text.primary", mt: 1 }}>
            {paths.map((path, idx) => {
                const href = path ? `/${path}` : "/";
                const selected = paths.length - 1 === idx;
                return (
                    <StyledBreadcrumbLink key={idx} href={href} selected={selected} white={white}>
                        {path ? firstWordCapital(path) : "Home"}
                    </StyledBreadcrumbLink>
                );
            })}
        </MuiBreadcrumbs>
    );
}
