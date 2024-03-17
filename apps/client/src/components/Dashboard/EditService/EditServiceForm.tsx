"use client";

import { Stack } from "@mui/material";
import { Service } from "@/types/response";
import Form from "@/components/Forms/Form";
import useUpdateData from "@/hooks/useUpdateData";
import FormInput from "@/components/Forms/FormInput";
import FormSubmit from "@/components/Forms/FormSubmit";
import FormImageUpload from "@/components/Forms/FormImageUpload";
import { getServiceInitialValues } from "@/libs/initialValues";

export default function EditServiceForm({ service }: { service: Service }) {
    const { handleUpdate, loading } = useUpdateData(`/service/${service.id}`, "/services");

    return (
        <Form initialValues={getServiceInitialValues(service)} onSubmit={handleUpdate}>
            <FormImageUpload name="image" image={service.image} />
            <Stack direction={{ sm: "row" }} gap={3}>
                <FormInput name="name" label="Service Name" />
                <FormInput type="number" name="estimatetime" label="Estimate Time" />
            </Stack>
            <FormInput name="description" label="Description" textarea />
            <FormSubmit loading={loading}>Submit</FormSubmit>
        </Form>
    );
}
