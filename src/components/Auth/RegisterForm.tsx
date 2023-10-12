"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { Grid } from "@mui/material";
import Form from "@/components/Forms/Form";
import { useRouter } from "next/navigation";
import { baseAxios } from "@/exports/axios";
import FormSubmit from "../Forms/FormSubmit";
import FormInput from "@/components/Forms/FormInput";
import type { RegisterFormInput } from "@/types/global";
import registerSchema from "@/validations/registerSchema";

const initialValues = { first_name: "", last_name: "", email: "", password: "", c_password: "" };

export default function RegisterForm() {
    const { push } = useRouter();
    const [loading, setLoading] = useState(false);

    const onSubmit = (data: RegisterFormInput) => {
        setLoading(true);
        const payload = { name: `${data.first_name} ${data.last_name}`, email: data.email, password: data.password };

        baseAxios
            .post("/auth/signup", payload)
            .then((res) => {
                setLoading(false);
                if (res.data) push("/login");
            })
            .catch((error) => {
                setLoading(false);
                toast.error(error.message);
            });
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
            <FormSubmit loading={loading}>Register</FormSubmit>
        </Form>
    );
}
