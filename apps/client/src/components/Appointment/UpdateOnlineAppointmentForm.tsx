"use client";

import Form from "@/components/Forms/Form";
import FormInput from "../Forms/FormInput";
import FormSelect from "../Forms/FormSelect";
import FormSubmit from "../Forms/FormSubmit";
import { getStatus } from "@/exports/constant";
import FormDatePick from "../Forms/FormDatePick";
import useUpdateData from "@/hooks/useUpdateData";
import { OnlineAppointment } from "@prisma/client";
import FormMultiInput from "../Forms/FormMultiInput";
import { getOnlineAppointmentInitialValues } from "@/libs/initialValues";

export default function UpdateOnlineAppointmentForm({ appointment }: { appointment: OnlineAppointment }) {
    const { handleUpdate, loading } = useUpdateData(`/onlineAppointment/${appointment?.id}`, "mOnlineAppointments");

    return (
        <Form initialValues={getOnlineAppointmentInitialValues(appointment)} onSubmit={handleUpdate}>
            <FormSelect items={[...getStatus("online", true), "cancelled"]} name="status" label="Select Status" />
            <FormInput type="number" name="paymentAmount" label="Payment Amount" />
            <FormMultiInput name="issueDetected" label="Issue Didected" />
            <FormDatePick name="deliveryDate" label="Delivery Date" />
            <FormSubmit loading={loading}>Submit</FormSubmit>
        </Form>
    );
}
