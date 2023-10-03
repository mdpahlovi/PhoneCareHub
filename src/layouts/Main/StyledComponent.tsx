"use client";

import { styled } from "@mui/material/styles";
import { Container, Box } from "@mui/material";

export const StyledNav = styled("nav")(({ theme }) => ({
    borderBottom: "1px solid",
    borderColor: theme.palette.divider,
}));

export const StyledNavbar = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2),
}));

export const StyledMenuBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(3),
}));

export const StyledMenuItems = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

export const CollapseMenuItems = styled(Box)(({ theme }) => ({
    display: "none",
    flexDirection: "column",
    gap: theme.spacing(1),
    paddingInline: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
        display: "flex",
    },
}));

export const StyledFooter = styled("footer")(({ theme }) => ({
    borderTop: "1px solid",
    padding: theme.spacing(3),
    borderColor: theme.palette.divider,
}));
