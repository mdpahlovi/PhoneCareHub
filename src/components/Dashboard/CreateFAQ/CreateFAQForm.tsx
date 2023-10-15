"use client";

import { Stack } from "@mui/material";
import Form from "@/components/Forms/Form";
import useCreateData from "@/hooks/useCreateData";
import FormInput from "@/components/Forms/FormInput";
import FormSubmit from "@/components/Forms/FormSubmit";
import createFAQSchema from "@/validations/createFAQSchema";

const initialValues = { serial: 1, question: "", answer: "" };

export default function CreateFAQForm() {
    const { handleCreate, loading } = useCreateData("faq", true);

    return (
        <Form initialValues={initialValues} validationSchema={createFAQSchema} onSubmit={handleCreate}>
            <Stack mt={3} direction={{ sm: "row" }} gap={3}>
                <FormInput name="question" label="Question" />
                <FormInput name="answer" label="Answer" />
            </Stack>
            <FormSubmit loading={loading}>Submit</FormSubmit>
        </Form>
    );
}
