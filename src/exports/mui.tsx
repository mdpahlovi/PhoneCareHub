"use client";

import Image from "next/image";
import useStateStore from "@/hooks/useStateStore";
import { Container, Stack, Typography, Divider, Collapse } from "@mui/material";

export function MobileMenu({ children }: React.PropsWithChildren) {
    const { toggleMenu } = useStateStore();
    return <Collapse in={toggleMenu}>{children}</Collapse>;
}

export function ThemedLogo() {
    return <Image src="/mui.png" alt="logo" width={65} height={30} />;
}

export function Copyright(props: any) {
    return <Typography align="center">&copy; {new Date().getFullYear()} mui, All Rights Reserved.</Typography>;
}

export { Container, Stack, Typography, Divider };
