"use client";

import { ActionProps } from "@/types";
import { Stack } from "@mui/material";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSubmit from "@/components/Forms/FormSubmit";
import useHandleActions from "@/hooks/useHandleAction";
import firstWordCapital from "@/libs/firstWordCapital";
import createUserSchema from "@/validations/createUserOrAdminSchema";

const initialValues = { name: "", email: "", phone: "", password: "", c_password: "" };

export default function CreateUserOrAdminForm({ path, action }: { path: "user" | "admin" } & ActionProps) {
    const user = firstWordCapital(path);
    const { isPending, handleSubmit } = useHandleActions({ action });

    return (
        <Form initialValues={initialValues} validationSchema={createUserSchema} onSubmit={handleSubmit}>
            <FormInput name="name" label={`${user} Name`} />
            {path === "admin" ? <FormInput name="title" label="Admin Title" /> : ""}
            <Stack direction={{ sm: "row" }} gap={3}>
                <FormInput type="email" name="email" label={`${user} Email`} />
                <FormInput name="phone" label={`${user} Phone`} />
            </Stack>
            <Stack direction={{ sm: "row" }} gap={3}>
                <FormInput type="password" name="password" label="Password" />
                <FormInput type="password" name="c_password" label="Confirm Password" />
            </Stack>
            <FormSubmit loading={isPending}>Submit</FormSubmit>
        </Form>
    );
}
