import * as yup from "yup";

const createCourier = yup.object().shape({
    courierName: yup.string().required("Courier Name is Required"),
    productId: yup.string().required("Product Id is Required"),
    receiptDate: yup.string().required("Receipt Date Id is Required"),
});

export default createCourier;
