import { getallservices } from "@/libs/fetch";
import { threeCol } from "@/exports/constant";
import { Container, Grid } from "@mui/material";
import Banner from "@/components/Common/Banner";
import ServiceCard from "@/components/Services/ServiceCard";
import ServiceSearch from "@/components/Services/ServiceSearch";
import ServicePagination from "@/components/Services/ServicePagination";

export const metadata = { title: "Services" };

type SearchParams = { searchParams: { page: string | null; search: string | null } };

export default async function Services({ searchParams }: SearchParams) {
    const search = searchParams?.search ? searchParams.search : "";
    const page = Number(searchParams?.page ? searchParams.page : 1);
    const services = await getallservices(6, page, search);

    return (
        <>
            <Banner>Services</Banner>
            <Container sx={{ my: 5, display: "flex", flexDirection: "column", gap: 4 }}>
                <ServiceSearch search={search} />
                <Grid container columns={threeCol} spacing={3}>
                    {services?.data?.map((service) => (
                        <Grid item key={service.id} xs={4}>
                            <ServiceCard service={service} />
                        </Grid>
                    ))}
                </Grid>
                <ServicePagination page={page} count={services?.meta?.totalPage!} />
            </Container>
        </>
    );
}
