"use client";

import Link from "next/link";
import Form from "@/components/Forms/Form";
import loginSchema from "@/validations/loginSchema";
import FormInput from "@/components/Forms/FormInput";
import type { LoginFormInput } from "@/types/global";
import FormSubmit from "@/components/Forms/FormSubmit";

const initialValues = { email: "", password: "" };

export default function LoginForm() {
    const onSubmit = (data: LoginFormInput) => {
        console.log(data);
    };

    return (
        <Form initialValues={initialValues} validationSchema={loginSchema} onSubmit={onSubmit}>
            <FormInput type="email" name="email" label="Your Email" />
            <FormInput type="password" name="password" label="Your Password" />
            <Link href="/forget-password" style={{ marginLeft: "auto" }}>
                Forget Password
            </Link>
            <FormSubmit>Login</FormSubmit>
        </Form>
    );
}
