"use client";

import { Stack } from "@mui/material";
import type { FormProps } from "@/types/global";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";

export default function Form({ schema, children, submitHandler }: FormProps) {
    const methods = useForm({ resolver: yupResolver(schema) });
    const { handleSubmit } = methods;
    const onSubmit = (data: any) => submitHandler(data);

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack gap={3}>{children}</Stack>
            </form>
        </FormProvider>
    );
}
