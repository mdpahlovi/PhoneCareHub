"use client";

import CountUp from "react-countup";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useStateStore from "@/hooks/zustand/useStateStore";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { Container, Stack, Typography, Divider, Collapse, Grid, Link as MuiLink, LinkProps, Box, Avatar, Rating } from "@mui/material";

export function Link(props: LinkProps & NextLinkProps) {
    return <MuiLink component={NextLink} {...props} />;
}

export function MobileMenu({ children }: React.PropsWithChildren) {
    const { toggleMenu } = useStateStore();
    return <Collapse in={toggleMenu}>{children}</Collapse>;
}

export function Copyright() {
    return <Typography align="center">&copy; {new Date().getFullYear()} PhoneCareHub, All Rights Reserved.</Typography>;
}

export { Container, Stack, Typography, Divider, Grid, Box, Carousel, Avatar, Rating, CountUp };
