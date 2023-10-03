"use client";

import useStateStore from "@/hooks/useStateStore";
import { Container, Stack, Typography, Divider, Collapse } from "@mui/material";

export function MobileMenu({ children }: React.PropsWithChildren) {
    const { toggleMenu } = useStateStore();
    return <Collapse in={toggleMenu}>{children}</Collapse>;
}

export { Container, Stack, Typography, Divider };
