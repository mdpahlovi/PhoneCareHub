"use client";

import Form from "@/components/Forms/Form";
import Close from "@mui/icons-material/Close";
import useCreateData from "@/hooks/useCreateData";
import FormInput from "@/components/Forms/FormInput";
import FormSubmit from "@/components/Forms/FormSubmit";
import createPayment from "@/validations/createPayment";
import usePaymentDialogStore from "@/hooks/zustand/usePaymentDialogStore";
import { Dialog, DialogContent, Box, IconButton, Typography, DialogTitle } from "@mui/material";

const initialValue = { method: "", transactionId: "" };

export default function PaymentDialog() {
    const { handleCreate, loading } = useCreateData("payment", true);
    const { onlineAppointmentId, amount, open, onClose } = usePaymentDialogStore();

    const onSubmit = (data: any) => {
        const payload = { onlineAppointmentId, amount, ...data };
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
            <DialogTitle sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography variant="h5" fontWeight={600}>
                    Pay Now
                </Typography>
                <Typography>${amount}</Typography>
            </DialogTitle>
            <DialogContent>
                <Form initialValues={initialValue} validationSchema={createPayment} onSubmit={onSubmit}>
                    <FormInput name="method" label="Payment Method" />
                    <FormInput name="transactionId" label="Transaction Id" />
                    <FormSubmit loading={loading}>Submit</FormSubmit>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
