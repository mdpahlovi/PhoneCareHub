"use client";

import { Stack } from "@mui/material";
import Form from "@/components/Forms/Form";
import useCreateData from "@/hooks/useCreateData";
import FormInput from "@/components/Forms/FormInput";
import FormSubmit from "@/components/Forms/FormSubmit";
import firstWordCapital from "@/libs/firstWordCapital";
import createUserOrAdminSchema from "@/validations/createUserOrAdminSchema";

const initialValues = { name: "", email: "", phone: "", password: "", c_password: "" };
type CreateFormValue = { name: string; email: string; phone: string; password: string; c_password: string };

export default function CreateUserOrAdminForm({ path }: { path: "user" | "admin" }) {
    const pathUpperCase = firstWordCapital(path);
    const { handleCreate, loading } = useCreateData(path);

    const onSubmit = (data: CreateFormValue) => {
        const { c_password, ...payload } = data;
        handleCreate(payload);
    };

    return (
        <Form initialValues={initialValues} validationSchema={createUserOrAdminSchema} onSubmit={onSubmit}>
            <FormInput name="name" label={`${pathUpperCase} Name`} />
            {path === "admin" ? <FormInput name="title" label="Admin Title" /> : ""}
            <Stack direction={{ sm: "row" }} gap={3}>
                <FormInput type="email" name="email" label={`${pathUpperCase} Email`} />
                <FormInput name="phone" label={`${pathUpperCase} Phone`} />
            </Stack>
            <Stack direction={{ sm: "row" }} gap={3}>
                <FormInput type="password" name="password" label="Password" />
                <FormInput type="password" name="c_password" label="Confirm Password" />
            </Stack>
            <FormSubmit loading={loading}>Submit</FormSubmit>
        </Form>
    );
}
