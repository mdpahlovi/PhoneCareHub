"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "@/exports/mui";
import { signIn } from "next-auth/react";
import Form from "@/components/Forms/Form";
import { useRouter, useSearchParams } from "next/navigation";
import loginSchema from "@/validations/loginSchema";
import FormInput from "@/components/Forms/FormInput";
import type { LoginFormInput } from "@/types/global";
import FormSubmit from "@/components/Forms/FormSubmit";

const initialValues = { email: "", password: "" };

export default function LoginForm() {
    const { push } = useRouter();
    const searchParams = useSearchParams();
    const [loading, setLoading] = useState(false);
    const callbackUrl = searchParams.get("callbackUrl");

    const onSubmit = ({ email, password }: LoginFormInput) => {
        setLoading(true);
        signIn("credentials", { redirect: false, email, password, callbackUrl: callbackUrl ? callbackUrl : "/" }).then((res) => {
            setLoading(false);
            if (res?.error) toast.error(res?.error);
            else push(res?.url!);
        });
    };

    return (
        <Form initialValues={initialValues} validationSchema={loginSchema} onSubmit={onSubmit}>
            <FormInput type="email" name="email" label="Your Email" />
            <FormInput type="password" name="password" label="Your Password" />
            <Link href="/forget-password" sx={{ ml: "auto" }}>
                Forget Password
            </Link>
            <FormSubmit loading={loading}>Login</FormSubmit>
        </Form>
    );
}
