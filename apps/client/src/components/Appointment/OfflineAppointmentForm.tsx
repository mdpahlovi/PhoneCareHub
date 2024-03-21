"use client";

import { ActionProps } from "@/types";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSubmit from "@/components/Forms/FormSubmit";
import useHandleActions from "@/hooks/useHandleAction";
import FormDatePicker from "@/components/Forms/FormDatePick";
import createOfflineAppointment from "@/validations/createOfflineAppointment";

const initialValues = { deviceInfo: "", issueDescription: "", appointmentDate: "" };

export default function OfflineAppointmentForm({ action }: ActionProps) {
    const { isPending, handleSubmit } = useHandleActions({ action });

    return (
        <Form initialValues={initialValues} validationSchema={createOfflineAppointment} onSubmit={handleSubmit}>
            <FormInput name="deviceInfo" label="Device Info" />
            <FormInput name="issueDescription" label="Issue Description" />
            <FormDatePicker name="appointmentDate" label="Appointment Date" />
            <FormSubmit loading={isPending}>Submit</FormSubmit>
        </Form>
    );
}
