"use client";

import toast from "react-hot-toast";
import { useTransition } from "react";
import Form from "@/components/Forms/Form";
import Close from "@mui/icons-material/Close";
import { changePasswordAction } from "@/app/action";
import FormInput from "@/components/Forms/FormInput";
import FormSubmit from "@/components/Forms/FormSubmit";
import changePasswordSchema from "@/validations/changePasswordSchema";
import useChangePasswordStore from "@/hooks/zustand/useChangePasswordStore";
import { Dialog, DialogContent, Box, IconButton, Typography, DialogTitle } from "@mui/material";

const initialValue = { password: "", c_password: "" };

export default function ChangePasswordDialog() {
    const [isPending, startTransition] = useTransition();
    const { id, path, open, onClose } = useChangePasswordStore();

    const onSubmit = ({ password }: any) => {
        if (path) {
            startTransition(async () => {
                await changePasswordAction(id, password, path)
                    .then(() => toast.success("Password Changed Successfully"))
                    .catch(() => toast.error("Something wants wrong"));
            });
        }
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
                    <FormSubmit loading={isPending}>Submit</FormSubmit>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
