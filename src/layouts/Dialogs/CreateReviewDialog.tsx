"use client";

import Form from "@/components/Forms/Form";
import Close from "@mui/icons-material/Close";
import useCreateData from "@/hooks/useCreateData";
import FormInput from "@/components/Forms/FormInput";
import createReview from "@/validations/createReview";
import FormSubmit from "@/components/Forms/FormSubmit";
import FormRatting from "@/components/Forms/FormRatting";
import useReviewDialogStore from "@/hooks/zustand/useReviewDialogStore";
import { Dialog, DialogContent, Box, IconButton, Typography, DialogTitle } from "@mui/material";

const initialValue = { rating: 0, comment: "" };

export default function ReviewDialog() {
    const { handleCreate, loading } = useCreateData("review", true);
    const { userId, serviceId, open, onClose } = useReviewDialogStore();

    const onSubmit = (data: any) => {
        const payload = { userId, serviceId, ...data };
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
                    Give Review
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Form initialValues={initialValue} validationSchema={createReview} onSubmit={onSubmit}>
                    <FormRatting name="rating" label="Ratting" />
                    <FormInput name="comment" label="Your Comment" />
                    <FormSubmit loading={loading}>Submit</FormSubmit>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
