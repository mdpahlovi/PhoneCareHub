"use client";

import Form from "@/components/Forms/Form";
import FormSelect from "../Forms/FormSelect";
import FormInput from "../Forms/FormInput";
import FormSubmit from "../Forms/FormSubmit";
import FormMultiInput from "../Forms/FormMultiInput";
import FormDatePick from "../Forms/FormDatePick";
import { OnlineAppointment } from "@/types/response";
import { getOnlineAppointmentInitialValues } from "@/libs/initialValues";
import useUpdateData from "@/hooks/useUpdateData";

export default function UpdateOnlineAppointmentForm({ appointment }: { appointment: OnlineAppointment }) {
    const { handleUpdate, loading } = useUpdateData(`/onlineAppointment/${appointment?.id}`, "mOnlineAppointments");

    return (
        <Form initialValues={getOnlineAppointmentInitialValues(appointment)} onSubmit={handleUpdate}>
            <FormSelect
                items={["pending", "reviewing", "payment", "servicing", "completed", "cancelled"]}
                name="status"
                label="Select Status"
            />
            <FormInput type="number" name="paymentAmount" label="Payment Amount" />
            <FormMultiInput name="issueDidected" label="Issue Didected" />
            <FormDatePick name="deliveryDate" label="Delivery Date" />
            <FormSubmit loading={loading}>Submit</FormSubmit>
        </Form>
    );
}
