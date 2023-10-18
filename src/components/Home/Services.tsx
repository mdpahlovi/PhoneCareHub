import { Grid } from "@mui/material";
import { Service } from "@/types/response";
import { threeCol } from "@/exports/constant";
import Section from "@/components/Common/Section";
import ServiceCard from "@/components/Services/ServiceCard";

export default function Services({ services }: { services: Service[] }) {
    return (
        <Section title="Our Services">
            <Grid container columns={threeCol} spacing={3}>
                {services.map((service) => (
                    <Grid item key={service.id} xs={4}>
                        <ServiceCard service={service} />
                    </Grid>
                ))}
            </Grid>
        </Section>
    );
}
