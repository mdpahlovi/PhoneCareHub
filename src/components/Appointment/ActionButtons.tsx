"use client";

import { CardActions, Stack } from "@mui/material";
import { useSearchParams } from "next/navigation";
import SeeButton from "@/components/Dashboard/Components/DetailButton";

export default function ActionButtons({ id, type, children }: { id: string; type: "online" | "offline" } & React.PropsWithChildren) {
    const searchParams = useSearchParams();
    const status = searchParams.get("status");

    switch (type) {
        case "online":
            if (status !== "cancelled") {
                break;
            } else {
                return;
            }
        case "offline":
            if (status === "completed") {
                break;
            } else {
                return;
            }
    }

    return (
        <Stack mt={2.5} direction="row" gap={1}>
            {children}
            <SeeButton href={`appointment/${id}?type=${type}`} label="See Detail" />
        </Stack>
    );
}
