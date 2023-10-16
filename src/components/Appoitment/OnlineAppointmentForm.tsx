"use client";

import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";
import FormSubmit from "../Forms/FormSubmit";
import useCreateData from "@/hooks/useCreateData";
import createOnlineAppointment from "@/validations/createOnlineAppointment";

const initialValues = { deviceInfo: "", issueDescription: "", shippingAddress: "" };

export default function OnlineAppointmentForm({ serviceId }: { serviceId: string }) {
    const { handleCreate, loading } = useCreateData("onlineAppointment");

    const onSubmit = (values: any) => {
        values.serviceId = serviceId;
        handleCreate(values);
    };

    return (
        <Form initialValues={initialValues} validationSchema={createOnlineAppointment} onSubmit={onSubmit}>
            <FormInput name="deviceInfo" label="Device Info" />
            <FormInput name="issueDescription" label="Issue Description" />
            <FormInput name="shippingAddress" label="Shipping Address" />
            <FormSubmit loading={loading}>Submit</FormSubmit>
        </Form>
    );
}
