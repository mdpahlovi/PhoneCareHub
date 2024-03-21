"use client";

import { Typography } from "@mui/material";
import { usePathname } from "next/navigation";

export default function LayoutTitle() {
    const pathname = usePathname();

    return (
        <Typography variant="h4" fontWeight="800">
            {pathname.includes("login") ? " Hi, Welcome Back" : "Create Your Account"}
        </Typography>
    );
}
