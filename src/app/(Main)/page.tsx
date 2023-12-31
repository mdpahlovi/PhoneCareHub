import Blogs from "@/components/Main/Blogs";
import Hero from "@/components/Main/Home/Hero";
import FAQs from "@/components/Main/Home/FAQs";
import Section from "@/components/Common/Section";
import Services from "@/components/Main/Services";
import Survey from "@/components/Main/Home/Survey";
import Reviews from "@/components/Main/Home/Reviews";
import Partners from "@/components/Main/Home/Partners";
import WhyChooseUs from "@/components/Main/Home/WhyChooseUs";
import SeeAllButton from "@/components/Main/Home/SeeAllButton";
import ServiceProcess from "@/components/Main/Home/ServiceProcess";
import { getAllService, getAllReview, getAllFAQ, getAllBlog } from "./fetch";

export default async function Home() {
    const services = await getAllService(6);
    const reviews = await getAllReview();
    const faqs = await getAllFAQ();
    const blogs = await getAllBlog(2);

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
            <Reviews reviews={reviews?.data!} />
            <FAQs faq={faqs?.data!} />
            <Section title="Our Latest Blogs">
                <Blogs blogs={blogs?.data!} />
                <SeeAllButton href="blog" />
            </Section>

            <Partners />
        </>
    );
}
