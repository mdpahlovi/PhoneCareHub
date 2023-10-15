"use client";

import { Stack } from "@mui/material";
import Form from "@/components/Forms/Form";
import useCreateData from "@/hooks/useCreateData";
import FormInput from "@/components/Forms/FormInput";
import FormSubmit from "@/components/Forms/FormSubmit";
import createAdminSchema from "@/validations/createAdminSchema";

const initialValues = { name: "", email: "", phone: "", password: "", c_password: "" };
type CreateAdminFormValue = { name: string; email: string; phone: string; password: string; c_password: string };

export default function CreateAdminForm() {
    const { handleCreate, loading } = useCreateData("admin");

    const onSubmit = (data: CreateAdminFormValue) => {
        const { c_password, ...payload } = data;
        handleCreate(payload);
    };

    return (
        <Form initialValues={initialValues} validationSchema={createAdminSchema} onSubmit={onSubmit}>
            <FormInput name="name" label="Admin Name" />
            <Stack direction={{ sm: "row" }} gap={3}>
                <FormInput type="email" name="email" label="Admin Email" />
                <FormInput name="phone" label="Admin Phone" />
            </Stack>
            <Stack direction={{ sm: "row" }} gap={3}>
                <FormInput type="password" name="password" label="Password" />
                <FormInput type="password" name="c_password" label="Confirm Password" />
            </Stack>
            <FormSubmit loading={loading}>Submit</FormSubmit>
        </Form>
    );
}
