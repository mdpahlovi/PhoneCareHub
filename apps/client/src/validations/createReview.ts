import * as yup from "yup";

const createPayment = yup.object().shape({
    rating: yup.number().required("Rating is Required"),
    comment: yup.string().required("Comment is Required"),
});

export default createPayment;
