"use client";

import Link from "next/link";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { StyledLinkButtonProps, StyledLinkProps } from "@/types/global";

export const StyledLink = styled((props: StyledLinkProps) => {
    const { selected, ...other } = props;
    return <Link {...other} />;
})(({ theme, selected }) => ({
    fontWeight: "500",
    textDecoration: selected ? "underline" : "none",
    color: selected ? theme.palette.text.primary : theme.palette.text.secondary,
    "&:hover": { textDecoration: "underline" },
}));

export const StyledLinkButton = styled((props: StyledLinkButtonProps) => {
    const { navbar, ...others } = props;
    return <Button component={Link} {...others} />;
})(({ theme, navbar }) => ({
    [theme.breakpoints.down("md")]: navbar ? { width: "max-content", marginTop: theme.spacing(1) } : undefined,
}));
