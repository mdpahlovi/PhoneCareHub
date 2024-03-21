"use client";

import { Stack } from "@mui/material";
import { ActionProps } from "@/types";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSubmit from "@/components/Forms/FormSubmit";
import useHandleActions from "@/hooks/useHandleAction";
import registerSchema from "@/validations/registerSchema";

const initialValues = { first_name: "", last_name: "", email: "", password: "", c_password: "" };

export default function RegisterForm({ action }: ActionProps) {
    const { isPending, handleSubmit } = useHandleActions({ action });

    return (
        <Form initialValues={initialValues} validationSchema={registerSchema} onSubmit={handleSubmit}>
            <Stack direction={{ sm: "row" }} gap={3}>
                <FormInput name="first_name" label="First Name" />
                <FormInput name="last_name" label="Last Name" />
            </Stack>
            <FormInput type="email" name="email" label="Your Email" />
            <FormInput type="password" name="password" label="Your Password" />
            <FormInput type="password" name="c_password" label="Confirm Password" />
            <FormSubmit loading={isPending}>Register</FormSubmit>
        </Form>
    );
}
