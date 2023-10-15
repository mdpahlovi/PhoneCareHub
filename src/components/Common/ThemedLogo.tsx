"use client";

import Link from "next/link";
import Image from "next/image";
import useThemeStore from "@/hooks/zustand/useThemeStore";

export default function ThemedLogo({ position, orientation }: { position?: "top"; orientation?: "vertical" }) {
    const { mode } = useThemeStore();

    let src;
    if (orientation) {
        src = mode === "light" ? "/logo/footer_light.png" : "/logo/footer_dark.png";
    } else {
        src = mode === "light" ? "/logo/nab_light.png" : "/logo/nab_dark.png";
    }

    return (
        <Link href="/" style={{ display: "flex", alignItems: position ? "flex-start" : "center" }}>
            <Image src={src} alt="logo" width={orientation ? 120 : 166.65} height={orientation ? 120 : 46.65} />
        </Link>
    );
}
