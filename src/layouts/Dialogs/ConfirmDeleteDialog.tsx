"use client";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { deleteAction } from "@/app/action";
import Close from "@mui/icons-material/Close";
import firstWordCapital from "@/libs/firstWordCapital";
import DeleteSweepRounded from "@mui/icons-material/DeleteSweepRounded";
import useConfirmDeleteStore from "@/hooks/zustand/useConfirmDeleteStore";
import { Dialog, DialogContent, DialogActions, Button, Box, IconButton, Typography } from "@mui/material";

export default function ConfirmDeleteDialog() {
    const { refresh } = useRouter();
    const { id, path, open, onClose } = useConfirmDeleteStore();

    const onConfirm = async () => {
        if (path) {
            await deleteAction(id, path)
                .then(() => {
                    onClose();
                    toast.success(firstWordCapital(path) + " " + "Deleted Successfully");
                })
                .catch(() => toast.error("Something went wrong!"));
        }
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <Box position="absolute" top={8} right={8}>
                <IconButton onClick={onClose}>
                    <Close />
                </IconButton>
            </Box>
            <DialogContent sx={{ textAlign: "center" }}>
                <DeleteSweepRounded color="error" sx={{ width: 64, height: 64 }} />
                <Typography variant="h6" fontWeight={600}>
                    Are You Sure?
                </Typography>
                <Typography>Do you really want to delete the data?</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button color="error" onClick={onConfirm}>
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
}
