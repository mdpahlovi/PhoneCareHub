"use client";

import { styled } from "@mui/material/styles";
import { Typography, TypographyProps } from "@mui/material";

type StyledTypographyProps = { line: string; children?: React.ReactNode } & TypographyProps;

export const StyledTypography = styled((props: StyledTypographyProps) => {
    const { line, ...other } = props;
    return <Typography {...other} />;
})(({ theme, line }) => ({
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: line,
    WebkitBoxOrient: "vertical",
}));
