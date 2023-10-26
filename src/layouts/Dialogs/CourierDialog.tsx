"use client";

import Form from "@/components/Forms/Form";
import Close from "@mui/icons-material/Close";
import useCreateData from "@/hooks/useCreateData";
import FormInput from "@/components/Forms/FormInput";
import FormSubmit from "@/components/Forms/FormSubmit";
import createCourier from "@/validations/createCourier";
import FormDatePick from "@/components/Forms/FormDatePick";
import useCourierDialogStore from "@/hooks/zustand/useCourierDialogStore";
import { Dialog, DialogContent, Box, IconButton, Typography, DialogTitle } from "@mui/material";

const initialValue = { courierName: "", productId: "", receiptDate: "" };

export default function CourierDialog() {
    const { onlineAppointmentId, type, open, onClose } = useCourierDialogStore();
    const { handleCreate, loading } = useCreateData(`device${type}`, true);

    const onSubmit = (data: any) => {
        const payload = { onlineAppointmentId, ...data };
        handleCreate(payload);
        onClose();
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
                    <FormSubmit loading={loading}>Submit</FormSubmit>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
