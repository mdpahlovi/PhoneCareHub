"use client";

import { ActionProps } from "@/types";
import { Stack } from "@mui/material";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import useHandleActions from "@/hooks/useHandleAction";
import FormSubmit from "@/components/Forms/FormSubmit";
import createService from "@/validations/createService";
import FormImageUpload from "@/components/Forms/FormImageUpload";

const initialValues = { image: "", name: "", estimatetime: "", description: "" };

export default function CreateServiceForm({ action }: ActionProps) {
    const { isPending, handleSubmit } = useHandleActions({ action });

    return (
        <Form initialValues={initialValues} validationSchema={createService} onSubmit={handleSubmit}>
            <FormImageUpload name="image" />
            <Stack direction={{ sm: "row" }} gap={3}>
                <FormInput name="name" label="Service Name" />
                <FormInput type="number" name="estimatetime" label="Estimate Time" />
            </Stack>
            <FormInput name="description" label="Description" textarea />
            <FormSubmit loading={isPending}>Submit</FormSubmit>
        </Form>
    );
}
