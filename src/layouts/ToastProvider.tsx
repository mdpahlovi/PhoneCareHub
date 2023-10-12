"use client";

import { Alert, AlertColor } from "@mui/material";
import toast, { ToastType, Toaster, resolveValue } from "react-hot-toast";

export default function ToastProvider() {
    const toastType = (type: ToastType): AlertColor => {
        switch (type) {
            case "success":
                return "success";
            case "error":
                return "error";
            default:
                return "info";
        }
    };
    return (
        <Toaster position="top-right" toastOptions={{ duration: 1500 }}>
            {(t) => (
                <Alert variant="filled" severity={toastType(t.type)} onClose={() => toast.dismiss(t.id)}>
                    {resolveValue(t.message, t)}
                </Alert>
            )}
        </Toaster>
    );
}
