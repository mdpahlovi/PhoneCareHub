"use client";

import Form from "@/components/Forms/Form";
import Close from "@mui/icons-material/Close";
import useCreateData from "@/hooks/useCreateData";
import useUpdateData from "@/hooks/useUpdateData";
import FormInput from "@/components/Forms/FormInput";
import createReview from "@/validations/createReview";
import FormSubmit from "@/components/Forms/FormSubmit";
import FormRatting from "@/components/Forms/FormRatting";
import useReviewDialogStore from "@/hooks/zustand/useReviewDialogStore";
import { Dialog, DialogContent, Box, IconButton, Typography, DialogTitle } from "@mui/material";

export default function ReviewDialog() {
    const { handleCreate, loading: createLoading } = useCreateData("review", true);
    const { isEdit, userId, serviceId, open, review, onClose } = useReviewDialogStore();
    const { handleUpdate, loading: updateLoading } = useUpdateData(`/review/${review?.id}`);

    const onSubmit = (data: any) => {
        const payload = { userId, serviceId, ...data };
        isEdit ? handleUpdate(data) : handleCreate(payload);
        onClose();
    };

    let initialValue = { rating: isEdit ? review?.rating : 0, comment: isEdit ? review?.comment : "" };
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
                    <FormSubmit loading={isEdit ? updateLoading : createLoading}>Submit</FormSubmit>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
