"use client";

import Form from "@/components/Forms/Form";
import { Button } from "@mui/material";
import loginSchema from "@/validations/loginSchema";
import FormInput from "@/components/Forms/FormInput";

export default function Login() {
    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <>
            <Form submitHandler={onSubmit} schema={loginSchema}>
                <FormInput type="email" name="email" label="Your Email" />
                <FormInput type="password" name="password" label="Your Password" />
                <Button type="submit">Register</Button>
            </Form>
        </>
    );
}
