import Banner from "@/components/Common/Banner";
import CreateFAQForm from "@/components/Dashboard/CreateFAQ/CreateFAQForm";

export default function FAQLayout({ children }: React.PropsWithChildren) {
    return (
        <>
            <Banner>All FAQ</Banner>
            <CreateFAQForm />
            {children}
        </>
    );
}
