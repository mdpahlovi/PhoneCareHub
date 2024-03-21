"use client";

import { ActionProps } from "@/types";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSubmit from "@/components/Forms/FormSubmit";
import useHandleActions from "@/hooks/useHandleAction";
import createOnlineAppointment from "@/validations/createOnlineAppointment";

const initialValues = { deviceInfo: "", issueDescription: "", shippingAddress: "" };

export default function OnlineAppointmentForm({ action }: ActionProps) {
    const { isPending, handleSubmit } = useHandleActions({ action });

    return (
        <Form initialValues={initialValues} validationSchema={createOnlineAppointment} onSubmit={handleSubmit}>
            <FormInput name="deviceInfo" label="Device Info" />
            <FormInput name="issueDescription" label="Issue Description" />
            <FormInput name="shippingAddress" label="Shipping Address" />
            <FormSubmit loading={isPending}>Submit</FormSubmit>
        </Form>
    );
}
