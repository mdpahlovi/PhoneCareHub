import Hero from "@/components/Home/Hero";
import FAQs from "@/components/Home/FAQs";
import Blogs from "@/components/Home/Blogs";
import Survey from "@/components/Home/Survey";
import Review from "@/components/Home/Review";
import Partners from "@/components/Home/Partners";
import Services from "@/components/Home/Services";
import SetCartSize from "@/components/Home/SetCartSize";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import ServiceProcess from "@/components/Home/ServiceProcess";
import { getServerBlogs, getServerFAQs, getServerServices } from "@/libs/fetch";

type SearchParams = { searchParams: { size?: string } };

export default async function Home({ searchParams }: SearchParams) {
    const faqs = await getServerFAQs();
    const blogs = await getServerBlogs(2, 1, "");
    const services = await getServerServices(Number(searchParams?.size), 1, "");

    return (
        <>
            <SetCartSize />
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
