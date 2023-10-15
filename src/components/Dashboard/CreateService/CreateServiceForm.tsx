"use client";

import { Stack } from "@mui/material";
import Form from "@/components/Forms/Form";
import useCreateData from "@/hooks/useCreateData";
import FormInput from "@/components/Forms/FormInput";
import FormSubmit from "@/components/Forms/FormSubmit";
import createService from "@/validations/createService";
import FormImageUpload from "@/components/Forms/FormImageUpload";

const initialValues = { image: "", name: "", estimatetime: "", description: "" };

export default function CreateServiceForm() {
    const { handleCreate, loading } = useCreateData("service");

    return (
        <Form initialValues={initialValues} validationSchema={createService} onSubmit={handleCreate}>
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
