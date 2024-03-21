import * as yup from "yup";

const createPayment = yup.object().shape({
    method: yup.string().required("Method is Required"),
    transactionId: yup.string().required("Transaction Id is Required"),
});

export default createPayment;
