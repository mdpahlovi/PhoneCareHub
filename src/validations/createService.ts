import * as yup from "yup";

const createService = yup.object().shape({
    image: yup.string().required("Service Image is required"),
    name: yup.string().required("Service Name is required"),
    estimatetime: yup.string().required("Estimate Time is required"),
    description: yup.string().required("Description is required"),
});

export default createService;
