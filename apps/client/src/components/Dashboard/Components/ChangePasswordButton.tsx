"use client";

import { Button } from "@mui/material";
import useChangePasswordStore from "@/hooks/zustand/useChangePasswordStore";

export default function ChangePasswordButton({ id, path }: { id: string; path: "user" | "admin" }) {
    const { onOpen } = useChangePasswordStore();

    return (
        <Button sx={{ whiteSpace: "nowrap" }} onClick={() => onOpen(id, path)}>
            Change Password
        </Button>
    );
}
