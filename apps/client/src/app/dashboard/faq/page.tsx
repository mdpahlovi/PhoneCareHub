import Context from "./context";
import { getAllFAQ } from "@/libs/fetch";

export const metadata = { title: "FAQs" };

export default async function FAQs() {
    const faqs = await getAllFAQ();

    return <Context faqs={faqs?.data} />;
}
