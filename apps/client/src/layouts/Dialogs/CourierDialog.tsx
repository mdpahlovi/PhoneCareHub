"use client";

import toast from "react-hot-toast";
import { useTransition } from "react";
import Form from "@/components/Forms/Form";
import { useRouter } from "next/navigation";
import Close from "@mui/icons-material/Close";
import FormInput from "@/components/Forms/FormInput";
import FormSubmit from "@/components/Forms/FormSubmit";
import createCourier from "@/validations/createCourier";
import FormDatePick from "@/components/Forms/FormDatePick";
import { handleCourier } from "@/app/dashboard/(appointment)/actions";
import useCourierDialogStore from "@/hooks/zustand/useCourierDialogStore";
import { Dialog, DialogContent, Box, IconButton, Typography, DialogTitle } from "@mui/material";

const initialValue = { courierName: "", productId: "", receiptDate: "" };

export default function CourierDialog() {
    const { refresh } = useRouter();
    const [isPending, startTransition] = useTransition();
    const { onlineAppointmentId, type, open, onClose } = useCourierDialogStore();

    const onSubmit = (data: any) => {
        startTransition(async () => {
            await handleCourier(type, onlineAppointmentId, data)
                .then(() => {
                    refresh();
                    onClose();
                    toast.success("Courier added successfully");
                })
                .catch(() => toast.error("Something went wrong!"));
        });
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <Box position="absolute" top={8} right={8}>
                <IconButton onClick={onClose}>
                    <Close />
                </IconButton>
            </Box>
            <DialogTitle>
                <Typography variant="h5" fontWeight={600}>
                    Add {type} Detail
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Form initialValues={initialValue} validationSchema={createCourier} onSubmit={onSubmit}>
                    <FormInput name="courierName" label="Courier Name" />
                    <FormInput name="productId" label="Product Id" />
                    <FormDatePick name="receiptDate" label="Receipt Date" />
                    <FormSubmit loading={isPending}>Submit</FormSubmit>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
