import About from "@/components/Main/About";
import Section from "@/components/Common/Section";
import TeamCard from "@/components/Main/About/TeamCard";
import { Grid } from "@mui/material";
import { threeCol } from "@/exports/constant";

export const metadata = { title: "About" };

export default function AboutPage() {
    return (
        <>
            <About />
            <Section title="Our Teams">
                <Grid container columns={threeCol} spacing={3}>
                    {[...Array(6)].map((a, idx) => (
                        <Grid item key={idx} xs={4}>
                            <TeamCard />
                        </Grid>
                    ))}
                </Grid>
            </Section>
        </>
    );
}
