import prisma from "@/libs/prisma";
import { Grid } from "@mui/material";
import About from "@/components/Main/About";
import { threeCol } from "@/exports/constant";
import Section from "@/components/Common/Section";
import TeamCard from "@/components/Main/About/TeamCard";

export const metadata = { title: "About" };

export default async function AboutPage() {
    const admins = await prisma.admin.findMany({ take: 6, orderBy: { createdAt: "asc" } });

    return (
        <>
            <About />
            <Section title="Our Teams">
                <Grid container columns={threeCol} spacing={3}>
                    {admins.map((admin, idx) => (
                        <Grid item key={idx} xs={4}>
                            <TeamCard admin={admin} />
                        </Grid>
                    ))}
                </Grid>
            </Section>
        </>
    );
}
