"use client";

import useCreateQuery from "@/hooks/useCreateQuery";
import { MenuItem, TextField } from "@mui/material";

export default function StatusFilter({ status, items }: { status: string; items: string[] }) {
    const createQuery = useCreateQuery();

    return (
        <TextField
            size="small"
            value={status}
            variant="outlined"
            label="Select Status"
            onChange={(e) => createQuery("status", e.target.value)}
            select
        >
            {items.map((item, idx) => (
                <MenuItem key={idx} value={item}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                </MenuItem>
            ))}
        </TextField>
    );
}
