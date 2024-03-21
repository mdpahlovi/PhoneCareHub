"use client";

import { Stack } from "@mui/material";
import { ActionProps } from "@/types";
import { Service } from "@prisma/client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSubmit from "@/components/Forms/FormSubmit";
import useHandleActions from "@/hooks/useHandleAction";
import FormImageUpload from "@/components/Forms/FormImageUpload";
import { getServiceInitialValues } from "@/libs/initialValues";

export default function EditServiceForm({ service, action }: { service: Service } & ActionProps) {
    const { isPending, handleSubmit } = useHandleActions({ action });

    return (
        <Form initialValues={getServiceInitialValues(service)} onSubmit={handleSubmit}>
            <FormImageUpload name="image" image={service.image} />
            <Stack direction={{ sm: "row" }} gap={3}>
                <FormInput name="name" label="Service Name" />
                <FormInput type="number" name="estimatetime" label="Estimate Time" />
            </Stack>
            <FormInput name="description" label="Description" textarea />
            <FormSubmit loading={isPending}>Submit</FormSubmit>
        </Form>
    );
}
