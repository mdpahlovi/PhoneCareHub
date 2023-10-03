"use client";

import Link from "next/link";
import { styled } from "@mui/material/styles";
import type { NavLinkProps } from "@/types/global";

export const NavLink = styled((props: NavLinkProps) => {
    const { selected, ...other } = props;
    return <Link {...other} />;
})(({ theme, selected }) => ({
    fontWeight: "500",
    textDecoration: selected ? "underline" : "none",
    color: selected ? theme.palette.text.primary : theme.palette.text.secondary,
    "&:hover": { textDecoration: "underline" },
}));
