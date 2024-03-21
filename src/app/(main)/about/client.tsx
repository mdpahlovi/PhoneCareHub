"use client";

import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledAbout = styled(Container)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    alignItems: "center",
    gap: theme.spacing(3),
    paddingTop: theme.spacing(7.5),
    paddingBottom: theme.spacing(7.5),
    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "1fr",
    },
}));
