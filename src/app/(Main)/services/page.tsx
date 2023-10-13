import { Container } from "@mui/material";
import Banner from "@/components/Common/Banner";
import ServicePagination from "@/components/Services/ServicePagination";
import ServiceSearch from "@/components/Services/ServiceSearch";

export const metadata = { title: "Services" };

type SearchParams = { searchParams: { page: string | null; search: string | null } };

export default function Services({ searchParams }: SearchParams) {
    const search = searchParams?.search;
    const page = Number(searchParams?.page ? searchParams.page : 1);

    return (
        <>
            <Banner>Services</Banner>
            <Container sx={{ my: 5 }}>
                <ServiceSearch search={search} />
                Services
                <ServicePagination page={page} count={3} />
            </Container>
        </>
    );
}
