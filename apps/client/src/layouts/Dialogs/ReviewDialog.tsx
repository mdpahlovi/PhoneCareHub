"use client";

import toast from "react-hot-toast";
import { useTransition } from "react";
import Form from "@/components/Forms/Form";
import { useRouter } from "next/navigation";
import Close from "@mui/icons-material/Close";
import FormInput from "@/components/Forms/FormInput";
import createReview from "@/validations/createReview";
import FormSubmit from "@/components/Forms/FormSubmit";
import FormRatting from "@/components/Forms/FormRatting";
import { handleReview } from "@/app/dashboard/(appointment)/actions";
import useReviewDialogStore from "@/hooks/zustand/useReviewDialogStore";
import { Dialog, DialogContent, Box, IconButton, Typography, DialogTitle } from "@mui/material";

export default function ReviewDialog() {
    const { refresh } = useRouter();
    const [isPending, startTransition] = useTransition();
    const { isEdit, userId, serviceId, open, review, onClose } = useReviewDialogStore();

    const onSubmit = (formData: any) => {
        const data = { userId, serviceId, ...formData };

        startTransition(async () => {
            await handleReview(isEdit, data, review?.id)
                .then(() => {
                    refresh();
                    onClose();
                    toast.success(isEdit ? "Review Updated Successfully" : "Review Added Successfully");
                })
                .catch(() => toast.error("Something went wrong!"));
        });
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
                    <FormSubmit loading={isPending}>Submit</FormSubmit>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
