"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { Stack } from "@mui/material";
import Form from "@/components/Forms/Form";
import { useRouter } from "next/navigation";
import FormInput from "@/components/Forms/FormInput";
import FormSubmit from "@/components/Forms/FormSubmit";
import createAdminSchema from "@/validations/createAdminSchema";
import useAxiosRequest from "@/hooks/useAxiosRequest";

const initialValues = { name: "", email: "", phone: "", password: "", c_password: "" };
type CreateAdminFormValue = { name: string; email: string; phone: string; password: string; c_password: string };

export default function CreateAdminForm() {
    const { push } = useRouter();
    const axios = useAxiosRequest();
    const [loading, setLoading] = useState(false);

    const onSubmit = (data: CreateAdminFormValue) => {
        setLoading(true);
        const { c_password, ...payload } = data;
        axios
            .post("/admin/create", payload)
            .then((res: any) => {
                setLoading(false);
                toast.success(res.message);
                push("/dashboard/admins");
            })
            .catch((error) => {
                setLoading(false);
                toast.error(error.message);
            });
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
