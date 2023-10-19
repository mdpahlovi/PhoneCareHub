import Blogs from "@/components/Blogs";
import Hero from "@/components/Home/Hero";
import FAQs from "@/components/Home/FAQs";
import Services from "@/components/Services";
import Survey from "@/components/Home/Survey";
import Reviews from "@/components/Home/Reviews";
import Partners from "@/components/Home/Partners";
import Section from "@/components/Common/Section";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import SeeAllButton from "@/components/Home/SeeAllButton";
import ServiceProcess from "@/components/Home/ServiceProcess";
import { getAllReview, getAllBlog, getAllFAQ, getAllService } from "@/libs/fetch";

export default async function Home() {
    const faqs = await getAllFAQ();
    const reviews = await getAllReview();
    const blogs = await getAllBlog(2, 1, "");
    const services = await getAllService(6, 1, "");

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
