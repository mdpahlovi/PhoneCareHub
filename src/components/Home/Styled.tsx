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

export const StyledProcessBackground = styled("div")(({ theme }) => ({
    color: "white",
    padding: "40px 0 10px 0",
    marginBottom: 40,
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
