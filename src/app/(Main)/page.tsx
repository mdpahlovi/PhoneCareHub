import Hero from "@/components/Home/Hero";
import FAQs from "@/components/Home/FAQs";
import Services from "@/components/Home/Services";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import ServiceProcess from "@/components/Home/ServiceProcess";
import { getServerFAQs, getServerServices } from "@/libs/fetch";

export default async function Home() {
    const faqs = await getServerFAQs();
    const services = await getServerServices(3, 1, "");

    return (
        <>
            <Hero />
            <Services services={services?.data!} />
            <ServiceProcess />
            <WhyChooseUs />
            <FAQs faq={faqs?.data!} />
        </>
    );
}
