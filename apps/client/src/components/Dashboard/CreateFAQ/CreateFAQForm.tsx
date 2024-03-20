"use client";

import toast from "react-hot-toast";
import { useTransition } from "react";
import { Stack } from "@mui/material";
import { FormikHelpers } from "formik";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSubmit from "@/components/Forms/FormSubmit";
import createFAQSchema from "@/validations/createFAQSchema";

const initialValues = { question: "", answer: "" };

export default function CreateFAQForm({ action }: { action: (data: any) => Promise<void> }) {
    const [isPending, startTransition] = useTransition();

    const onSubmit = (values: any, helpers: FormikHelpers<any>) => {
        startTransition(async () => {
            await action(values)
                .then(() => {
                    helpers.resetForm();
                    toast.success("FAQ Created Successfully");
                })
                .catch(() => toast.error("Something went wrong!"));
        });
    };

    return (
        <Form initialValues={initialValues} validationSchema={createFAQSchema} onSubmit={onSubmit}>
            <Stack direction={{ sm: "row" }} gap={3}>
                <FormInput name="question" label="Question" />
                <FormInput name="answer" label="Answer" />
            </Stack>
            <FormSubmit loading={isPending}>Submit</FormSubmit>
        </Form>
    );
}
