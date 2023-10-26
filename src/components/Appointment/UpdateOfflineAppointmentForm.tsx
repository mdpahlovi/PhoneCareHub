"use client";

import Form from "@/components/Forms/Form";
import FormInput from "../Forms/FormInput";
import FormSelect from "../Forms/FormSelect";
import FormSubmit from "../Forms/FormSubmit";
import { getStatus } from "@/exports/constant";
import useUpdateData from "@/hooks/useUpdateData";
import FormMultiInput from "../Forms/FormMultiInput";
import { OfflineAppointment } from "@/types/response";
import { getOfflineAppointmentInitialValues } from "@/libs/initialValues";

export default function UpdateOfflineAppointmentForm({ appointment }: { appointment: OfflineAppointment }) {
    const { handleUpdate, loading } = useUpdateData(`/offlineAppointment/${appointment?.id}`, "mOfflineAppointments");

    return (
        <Form initialValues={getOfflineAppointmentInitialValues(appointment)} onSubmit={handleUpdate}>
            <FormSelect items={[...getStatus("offline", true), "cancelled"]} name="status" label="Select Status" />
            <FormInput type="number" name="paymentAmount" label="Payment Amount" />
            <FormMultiInput name="issueDetected" label="Issue Didected" />
            <FormSubmit loading={loading}>Submit</FormSubmit>
        </Form>
    );
}
