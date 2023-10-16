import * as yup from "yup";

const createOnlineAppointment = yup.object().shape({
    deviceInfo: yup.string().required("Device Info is required"),
    issueDescription: yup.string().required("Issue Description is required"),
    shippingAddress: yup.string().required("Shipping Address is required"),
});

export default createOnlineAppointment;
