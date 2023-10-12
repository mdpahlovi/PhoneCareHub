"use client";

import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledHero = styled(Container)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
        margin: "40px 0",
        gridTemplateColumns: "1fr",
    },
}));
