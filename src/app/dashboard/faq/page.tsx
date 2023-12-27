import { getAllFAQ } from "@/libs/fetch";
import Banner from "@/components/Common/Banner";
import CreateFAQForm from "@/components/Dashboard/CreateFAQ/CreateFAQForm";
import { Divider } from "@mui/material";
import Context from "./context";

export const metadata = { title: "FAQs" };

export default async function FAQs() {
    const faqs = await getAllFAQ();

    return (
        <>
            <Banner>All FAQ</Banner>
            <CreateFAQForm />
            <Divider sx={{ mb: 3, border: "none" }} />
            <Context faqs={faqs?.data} />
        </>
    );
}
