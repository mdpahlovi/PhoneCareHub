"use client";

import { useState } from "react";
import { FAQ } from "@/types/response";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import DragHandle from "@mui/icons-material/DragHandle";
import DeleteButton from "@/components/Dashboard/Components/DeleteButton";
import { IconButton, Paper, Popover, Typography } from "@mui/material";

export default function FAQCard({ faq, lastItem }: { faq: FAQ; lastItem?: boolean }) {
    const { id, serial, answer, question } = faq;
    const [anchorEl, setAnchorEl] = useState<string | null>("");
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: serial });

    const style: React.CSSProperties = {
        width: "100%",
        marginBottom: lastItem ? "0px" : "1rem",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div key={id} ref={setNodeRef} style={style}>
            <IconButton {...attributes} {...listeners}>
                <DragHandle />
            </IconButton>
            <Paper aria-describedby={id} sx={{ width: "100%", p: 0.75 }} onClick={() => setAnchorEl(anchorEl ? null : id)}>
                <Typography fontWeight={600}>{question}</Typography>
            </Paper>
            <Popover
                id={id}
                open={anchorEl === id}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
                <Typography sx={{ p: 2 }}>{answer}</Typography>
            </Popover>
            <DeleteButton id={id} path="faq" />
        </div>
    );
}
