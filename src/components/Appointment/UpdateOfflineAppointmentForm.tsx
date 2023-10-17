"use client";

import Form from "@/components/Forms/Form";
import FormSelect from "../Forms/FormSelect";
import FormInput from "../Forms/FormInput";
import FormSubmit from "../Forms/FormSubmit";
import FormMultiInput from "../Forms/FormMultiInput";
import { OfflineAppointment } from "@/types/response";
import { getOfflineAppointmentInitialValues } from "@/libs/initialValues";
import useUpdateData from "@/hooks/useUpdateData";

export default function UpdateOfflineAppointmentForm({ appointment }: { appointment: OfflineAppointment }) {
    const { handleUpdate, loading } = useUpdateData(`/offlineAppointment/${appointment?.id}`, "mOfflineAppointments");

    return (
        <Form initialValues={getOfflineAppointmentInitialValues(appointment)} onSubmit={handleUpdate}>
            <FormSelect items={["pending", "completed", "cancelled"]} name="status" label="Select Status" />
            <FormInput type="number" name="paymentAmount" label="Payment Amount" />
            <FormMultiInput name="issueDidected" label="Issue Didected" />
            <FormSubmit loading={loading}>Submit</FormSubmit>
        </Form>
    );
}
