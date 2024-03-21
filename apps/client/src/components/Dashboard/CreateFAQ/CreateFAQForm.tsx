"use client";

import { ActionProps } from "@/types";
import { Stack } from "@mui/material";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import useHandleActions from "@/hooks/useHandleAction";
import FormSubmit from "@/components/Forms/FormSubmit";
import createFAQSchema from "@/validations/createFAQSchema";

const initialValues = { question: "", answer: "" };

export default function CreateFAQForm({ action }: ActionProps) {
    const { isPending, handleSubmit } = useHandleActions({ action });

    return (
        <Form initialValues={initialValues} validationSchema={createFAQSchema} onSubmit={handleSubmit}>
            <Stack direction={{ sm: "row" }} gap={3}>
                <FormInput name="question" label="Question" />
                <FormInput name="answer" label="Answer" />
            </Stack>
            <FormSubmit loading={isPending}>Submit</FormSubmit>
        </Form>
    );
}
