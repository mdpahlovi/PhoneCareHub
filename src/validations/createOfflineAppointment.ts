import * as yup from "yup";

const createOfflineAppointment = yup.object().shape({
    deviceInfo: yup.string().required("Device Info is required"),
    issueDescription: yup.string().required("Issue Description is required"),
    appointmentDate: yup.string().required("Appointment Date is required"),
});

export default createOfflineAppointment;
