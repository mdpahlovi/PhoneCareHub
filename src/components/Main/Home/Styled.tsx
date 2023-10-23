"use client";

import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledHero = styled(Container)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "1fr",
        paddingTop: theme.spacing(7.5),
        paddingBottom: theme.spacing(7.5),
    },
}));

export const StyledProcessBackground = styled("div")(({ theme }) => ({
    color: "white",
    padding: "60px 0 16px 0",
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundImage: "url(/images/banner.jpg)",
    "&::before": {
        inset: "0",
        content: '""',
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
}));

export const StyledWhyChooseUs = styled(Container)(({ theme }) => ({
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

export const StyledFAQ = styled("div")(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    alignItems: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "1fr",
    },
}));
