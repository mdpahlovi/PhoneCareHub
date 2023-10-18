import Blogs from "@/components/Blogs";
import Hero from "@/components/Home/Hero";
import FAQs from "@/components/Home/FAQs";
import Services from "@/components/Services";
import Survey from "@/components/Home/Survey";
import Review from "@/components/Home/Review";
import Partners from "@/components/Home/Partners";
import Section from "@/components/Common/Section";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import SeeAllButton from "@/components/Home/SeeAllButton";
import ServiceProcess from "@/components/Home/ServiceProcess";
import { getServerBlogs, getServerFAQs, getServerServices } from "@/libs/fetch";

export default async function Home() {
    const faqs = await getServerFAQs();
    const blogs = await getServerBlogs(2, 1, "");
    const services = await getServerServices(6, 1, "");

    return (
        <>
            <Hero />
            <Section title="Our Services">
                <Services services={services?.data!} />
                <SeeAllButton href="service" />
            </Section>
            <ServiceProcess />
            <WhyChooseUs />
            <Survey />
            <Review />
            <FAQs faq={faqs?.data!} />
            <Section title="Our Latest Blogs">
                <Blogs blogs={blogs?.data!} />
                <SeeAllButton href="blog" />
            </Section>

            <Partners />
        </>
    );
}
