import * as yup from "yup";

const createBlogSchema = yup.object().shape({
    image: yup.string().required("Blog Image is required"),
    title: yup.string().required("Blog Title is required"),
    content: yup.string().required("Blog Content is required"),
    source: yup.string().required("Blog Source is required"),
    publishedDate: yup.string().required("Published Date is required"),
});

export default createBlogSchema;
