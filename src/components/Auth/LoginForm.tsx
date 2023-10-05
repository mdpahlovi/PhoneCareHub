"use client";

import Link from "next/link";
import { Button } from "@mui/material";
import Form from "@/components/Forms/Form";
import loginSchema from "@/validations/loginSchema";
import FormInput from "@/components/Forms/FormInput";
import type { LoginFormInput } from "@/types/global";

export default function LoginForm() {
    const onSubmit = (data: LoginFormInput) => {
        console.log(data);
    };

    return (
        <Form submitHandler={onSubmit} schema={loginSchema}>
            <FormInput type="email" name="email" label="Your Email" />
            <FormInput type="password" name="password" label="Your Password" />
            <Link href="/forget-password" style={{ marginLeft: "auto" }}>
                Forget Password
            </Link>
            <Button type="submit" size="large">
                Login
            </Button>
        </Form>
    );
}
