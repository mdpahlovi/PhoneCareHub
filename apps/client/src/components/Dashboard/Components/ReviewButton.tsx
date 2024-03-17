"use client";

import { Button } from "@mui/material";
import useReviewDialogStore from "@/hooks/zustand/useReviewDialogStore";

type ReviewButtonProps = { userId: string; serviceId: string };

export default function ReviewButton({ userId, serviceId }: ReviewButtonProps) {
    const { onOpen } = useReviewDialogStore();

    return (
        <Button size="small" sx={{ whiteSpace: "nowrap" }} onClick={() => onOpen(userId, serviceId)}>
            Review Now
        </Button>
    );
}
