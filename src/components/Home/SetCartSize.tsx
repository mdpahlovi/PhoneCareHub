"use client";

import useCreateQuery from "@/hooks/useCreateQuery";
import { useEffect, useState } from "react";

export default function SetCartSize() {
    const createQuery = useCreateQuery();

    const updateSize = () => {
        if (window.innerWidth < 900) {
            createQuery("size", "2");
        } else {
            createQuery("size", "3");
        }
    };

    useEffect(() => {
        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    });

    return null;
}
