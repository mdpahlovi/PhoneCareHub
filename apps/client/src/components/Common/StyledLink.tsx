"use client";

import Link, { LinkProps } from "next/link";
import { styled } from "@mui/material/styles";

type StyledLinkProps = { selected?: boolean; children?: React.ReactNode } & LinkProps;

export const StyledLink = styled((props: StyledLinkProps) => {
    const { selected, ...other } = props;
    return <Link {...other} />;
})(({ theme, selected }) => ({
    fontWeight: "500",
    textDecoration: selected ? "underline" : "none",
    color: selected ? theme.palette.text.primary : theme.palette.text.secondary,
    "&:hover": { textDecoration: "underline" },
}));
