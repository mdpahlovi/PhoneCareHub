import Hero from "@/components/Home/Hero";
import ServiceProcess from "@/components/Home/ServiceProcess";
import Services from "@/components/Home/Services";
import { getServerServices } from "@/libs/fetch";

export default async function Home() {
    const services = await getServerServices(3, 1, "");
    return (
        <>
            <Hero />
            <Services services={services?.data!} />
            <ServiceProcess />
        </>
    );
}
