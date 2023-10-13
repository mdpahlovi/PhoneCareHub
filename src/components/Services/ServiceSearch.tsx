"use client";

import { useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import useCreateQuery from "@/hooks/useCreateQuery";
import useDeleteQuery from "@/hooks/useDeleteQuery";
import { InputBase, IconButton, Box } from "@mui/material";

export default function ServiceSearch({ search }: { search: string | null }) {
    const createQuery = useCreateQuery();
    const deleteQuery = useDeleteQuery();
    const inputField = useRef<HTMLInputElement | null>(null);

    const padding = { py: 0.5, pl: 3, pr: 0.5 };
    const border = { border: 1, borderColor: "divider", borderRadius: "9999px" };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => createQuery("search", e.target.value);
    const handleClick = () => {
        deleteQuery("search");
        if (inputField.current) {
            const inputElement = inputField.current;
            if (inputElement.childNodes[0] instanceof HTMLInputElement) inputElement.childNodes[0].value = "";
        }
    };

    return (
        <Box maxWidth="600px" display="flex" alignItems="center" {...border} {...padding}>
            <InputBase ref={inputField} placeholder="Search Service" onChange={handleChange} sx={{ flex: 1 }} />
            {search ? (
                <IconButton color="default" onClick={handleClick} sx={{ borderRadius: "9999px" }}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </Box>
    );
}
