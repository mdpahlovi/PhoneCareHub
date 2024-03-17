import { Skeleton } from "@mui/material";
import React from "react";

export default function FAQLoading() {
    return (
        <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
            {[...Array(5)].map((p, idx) => (
                <div key={idx} style={{ display: "flex", gap: "8px" }}>
                    <Skeleton variant="rectangular" width={36} height={36} sx={{ borderRadius: 1.5 }} />
                    <Skeleton variant="rectangular" height={36} sx={{ width: "100%", borderRadius: 1.5 }} />
                    <Skeleton variant="rectangular" width={36} height={36} sx={{ borderRadius: 1.5 }} />
                </div>
            ))}
        </div>
    );
}
