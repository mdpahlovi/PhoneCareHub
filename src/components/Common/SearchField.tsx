"use client";

import { useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import useCreateQuery from "@/hooks/useCreateQuery";
import useDeleteQuery from "@/hooks/useDeleteQuery";
import { InputBase, IconButton, Box } from "@mui/material";

export default function SearchField({ search }: { search: string }) {
    const createQuery = useCreateQuery();
    const deleteQuery = useDeleteQuery();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const padding = { py: 0.5, pl: 5.5, pr: 0.5 };
    const border = { border: 1, borderColor: "divider", borderRadius: "9999px" };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => createQuery("search", e.target.value);
    const handleClick = () => {
        deleteQuery("search");
        if (inputRef.current) {
            const inputElement = inputRef.current;
            if (inputElement.childNodes[0] instanceof HTMLInputElement) inputElement.childNodes[0].value = "";
        }
    };

    return (
        <Box maxWidth="448px" position="relative" display="flex" alignItems="center" {...border} {...padding}>
            <InputBase ref={inputRef} placeholder="Search Service" onChange={handleChange} sx={{ flex: 1 }} />
            <SearchIcon sx={{ position: "absolute", left: 12 }} />
            {search ? (
                <IconButton color="default" onClick={handleClick} sx={{ borderRadius: "9999px" }}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </Box>
    );
}
