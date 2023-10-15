import * as yup from "yup";

const createFAQSchema = yup.object().shape({
    question: yup.string().required("Question is required"),
    answer: yup.string().required("Answer Title is required"),
});

export default createFAQSchema;
