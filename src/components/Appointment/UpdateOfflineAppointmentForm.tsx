"use client";

import { ActionProps } from "@/types";
import Form from "@/components/Forms/Form";
import { getStatus } from "@/exports/constant";
import { OfflineAppointment } from "@prisma/client";
import FormInput from "@/components/Forms/FormInput";
import FormSelect from "@/components/Forms/FormSelect";
import FormSubmit from "@/components/Forms/FormSubmit";
import useHandleActions from "@/hooks/useHandleAction";
import FormMultiInput from "@/components/Forms/FormMultiInput";
import { getOfflineAppointmentInitialValues } from "@/libs/initialValues";

export default function UpdateOfflineAppointmentForm({ appointment, action }: { appointment: OfflineAppointment } & ActionProps) {
    const { isPending, handleSubmit } = useHandleActions({ action });

    return (
        <Form initialValues={getOfflineAppointmentInitialValues(appointment)} onSubmit={handleSubmit}>
            <FormSelect items={[...getStatus("offline", true), "cancelled"]} name="status" label="Select Status" />
            <FormInput type="number" name="paymentAmount" label="Payment Amount" />
            <FormMultiInput name="issueDetected" label="Issue Didected" />
            <FormSubmit loading={isPending}>Submit</FormSubmit>
        </Form>
    );
}
