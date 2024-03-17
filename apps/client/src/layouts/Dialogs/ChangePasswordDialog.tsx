"use client";

import Form from "@/components/Forms/Form";
import Close from "@mui/icons-material/Close";
import useUpdateData from "@/hooks/useUpdateData";
import FormInput from "@/components/Forms/FormInput";
import FormSubmit from "@/components/Forms/FormSubmit";
import changePasswordSchema from "@/validations/changePasswordSchema";
import useChangePasswordStore from "@/hooks/zustand/useChangePasswordStore";
import { Dialog, DialogContent, Box, IconButton, Typography, DialogTitle } from "@mui/material";

const initialValue = { password: "", c_password: "" };

export default function ChangePasswordDialog() {
    const { id, path, open, onClose } = useChangePasswordStore();
    const { handleUpdate, loading } = useUpdateData(path === "profile" ? "/profile" : `/${path}/${id}`);

    const onSubmit = (data: { password: string; c_password: string }) => {
        handleUpdate({ password: data.password });
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
                    Change Password
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Form initialValues={initialValue} validationSchema={changePasswordSchema} onSubmit={onSubmit}>
                    <FormInput type="password" name="password" label="New Password" />
                    <FormInput type="password" name="c_password" label="Confirm Password" />
                    <FormSubmit loading={loading}>Submit</FormSubmit>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
