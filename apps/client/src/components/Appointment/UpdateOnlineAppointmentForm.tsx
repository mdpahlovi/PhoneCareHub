"use client";

import { ActionProps } from "@/types";
import Form from "@/components/Forms/Form";
import { getStatus } from "@/exports/constant";
import { OnlineAppointment } from "@prisma/client";
import FormInput from "@/components/Forms/FormInput";
import FormSelect from "@/components/Forms/FormSelect";
import FormSubmit from "@/components/Forms/FormSubmit";
import useHandleActions from "@/hooks/useHandleAction";
import FormDatePick from "@/components/Forms/FormDatePick";
import FormMultiInput from "@/components/Forms/FormMultiInput";
import { getOnlineAppointmentInitialValues } from "@/libs/initialValues";

export default function UpdateOnlineAppointmentForm({ appointment, action }: { appointment: OnlineAppointment } & ActionProps) {
    const { isPending, handleSubmit } = useHandleActions({ action });

    return (
        <Form initialValues={getOnlineAppointmentInitialValues(appointment)} onSubmit={handleSubmit}>
            <FormSelect items={[...getStatus("online", true), "cancelled"]} name="status" label="Select Status" />
            <FormInput type="number" name="paymentAmount" label="Payment Amount" />
            <FormMultiInput name="issueDetected" label="Issue Didected" />
            <FormDatePick name="deliveryDate" label="Delivery Date" />
            <FormSubmit loading={isPending}>Submit</FormSubmit>
        </Form>
    );
}
