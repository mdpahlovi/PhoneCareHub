"use client";

import Form from "@/components/Forms/Form";
import useCreateData from "@/hooks/useCreateData";
import FormInput from "@/components/Forms/FormInput";
import FormSubmit from "@/components/Forms/FormSubmit";
import FormDatePicker from "@/components/Forms/FormDatePick";
import createOfflineAppointment from "@/validations/createOfflineAppointment";

const initialValues = { deviceInfo: "", issueDescription: "", appointmentDate: "" };

export default function OfflineAppointmentForm({ serviceId }: { serviceId: string }) {
    const { handleCreate, loading } = useCreateData("offlineAppointment");

    const onSubmit = (values: any) => {
        values.serviceId = serviceId;
        handleCreate(values);
    };

    return (
        <Form initialValues={initialValues} validationSchema={createOfflineAppointment} onSubmit={onSubmit}>
            <FormInput name="deviceInfo" label="Device Info" />
            <FormInput name="issueDescription" label="Issue Description" />
            <FormDatePicker name="appointmentDate" label="Appointment Date" />
            <FormSubmit loading={loading}>Submit</FormSubmit>
        </Form>
    );
}
