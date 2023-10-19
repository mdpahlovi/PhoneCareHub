"use client";

import { IconButton } from "@mui/material";
import { DeleteRounded } from "@mui/icons-material";
import useConfirmDeleteStore from "@/hooks/zustand/useConfirmDeleteStore";

export default function DeleteButton({ id, path }: { id: string; path: string }) {
    const { onOpen } = useConfirmDeleteStore();

    return (
        <IconButton color="error" onClick={() => onOpen(id, path)}>
            <DeleteRounded />
        </IconButton>
    );
}
