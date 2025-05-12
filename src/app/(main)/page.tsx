import Section from "@/components/Common/Section";
import Blogs from "@/components/Main/Blogs";
import FAQs from "@/components/Main/Home/FAQs";
import Hero from "@/components/Main/Home/Hero";
import Partners from "@/components/Main/Home/Partners";
import Reviews from "@/components/Main/Home/Reviews";
import SeeAllButton from "@/components/Main/Home/SeeAllButton";
import ServiceProcess from "@/components/Main/Home/ServiceProcess";
import Survey from "@/components/Main/Home/Survey";
import WhyChooseUs from "@/components/Main/Home/WhyChooseUs";
import Services from "@/components/Main/Services";
import prisma from "@/libs/prisma";

export default async function Home() {
    const services = await prisma.service.findMany({ select: { id: true, image: true, name: true, description: true }, take: 6 });
    const reviews = await prisma.review.findMany();
    const faqs = await prisma.fAQs.findMany({ orderBy: { serial: "asc" } });
    const blogs = await prisma.blog.findMany({
        select: { id: true, image: true, source: true, publishedDate: true, title: true, content: true },
        take: 2,
    });

    return (
        <>
            <Hero />
            <Section title="Our Services">
                <Services services={services} />
                <SeeAllButton href="service" />
            </Section>
            <ServiceProcess />
            <WhyChooseUs />
            <Survey />
            <Reviews reviews={reviews} />
            <FAQs faq={faqs} />
            <Section title="Our Latest Blogs">
                <Blogs blogs={blogs} />
                <SeeAllButton href="blog" />
            </Section>
            <Partners />
        </>
    );
}
