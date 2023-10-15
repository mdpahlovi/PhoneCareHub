"use client";

import { useState } from "react";
import { Stack } from "@mui/material";
import Form from "@/components/Forms/Form";
import { useRouter } from "next/navigation";
import FormInput from "@/components/Forms/FormInput";
import createService from "@/validations/createService";
import FormSubmit from "@/components/Forms/FormSubmit";
import FormImageUpload from "@/components/Forms/FormImageUpload";
import useAxiosRequest from "@/hooks/useAxiosRequest";
import toast from "react-hot-toast";

const initialValues = { image: "", name: "", estimatetime: "", description: "" };
type CreateServiceValue = { image: string; name: string; estimatetime: string; description: string };

export default function CreateServiceForm() {
    const { push } = useRouter();
    const axios = useAxiosRequest();
    const [loading, setLoading] = useState(false);

    const onSubmit = (data: CreateServiceValue) => {
        axios
            .post("/service/create", data)
            .then((res: any) => {
                setLoading(false);
                toast.success(res.message);
                push("/dashboard/services");
            })
            .catch((error) => {
                setLoading(false);
                toast.error(error.message);
            });
    };

    return (
        <Form initialValues={initialValues} validationSchema={createService} onSubmit={onSubmit}>
            <FormImageUpload name="image" />
            <Stack direction={{ sm: "row" }} gap={3}>
                <FormInput name="name" label="Service Name" />
                <FormInput type="number" name="estimatetime" label="Estimate Time" />
            </Stack>
            <FormInput name="description" label="Description" />
            <FormSubmit loading={loading}>Submit</FormSubmit>
        </Form>
    );
}
