"use client";

import Form from "@/components/Forms/Form";
import { Button, Grid } from "@mui/material";
import FormInput from "@/components/Forms/FormInput";
import type { RegisterFormInput } from "@/types/global";
import registerSchema from "@/validations/registerSchema";
import FormSubmit from "../Forms/FormSubmit";

const initialValues = { first_name: "", last_name: "", email: "", password: "", c_password: "" };

export default function RegisterForm() {
    const onSubmit = (data: RegisterFormInput) => {
        console.log(data);
    };

    return (
        <Form initialValues={initialValues} validationSchema={registerSchema} onSubmit={onSubmit}>
            <Grid container flexWrap={{ sm: "nowrap" }} gap={3}>
                <Grid xs={12} sm={6} component={FormInput} name="first_name" label="First Name" />
                <Grid xs={12} sm={6} component={FormInput} name="last_name" label="Last Name" />
            </Grid>
            <FormInput type="email" name="email" label="Your Email" />
            <FormInput type="password" name="password" label="Your Password" />
            <FormInput type="password" name="c_password" label="Confirm Password" />
            <FormSubmit>Register</FormSubmit>
        </Form>
    );
}
