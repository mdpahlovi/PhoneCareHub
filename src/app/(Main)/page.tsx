import Hero from "@/components/Home/Hero";
import FAQs from "@/components/Home/FAQs";
import Blogs from "@/components/Home/Blogs";
import Survey from "@/components/Home/Survey";
import Review from "@/components/Home/Review";
import Partners from "@/components/Home/Partners";
import Services from "@/components/Home/Services";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import ServiceProcess from "@/components/Home/ServiceProcess";
import { getServerBlogs, getServerFAQs, getServerServices } from "@/libs/fetch";

export default async function Home() {
    const faqs = await getServerFAQs();
    const blogs = await getServerBlogs(2, 1, "");
    const services = await getServerServices(3, 1, "");

    return (
        <>
            <Hero />
            <Services services={services?.data!} />
            <ServiceProcess />
            <WhyChooseUs />
            <Survey />
            <Review />
            <FAQs faq={faqs?.data!} />
            <Blogs blogs={blogs?.data!} />
            <Partners />
        </>
    );
}
