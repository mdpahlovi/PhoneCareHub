import Image from "next/image";
import prisma from "@/libs/prisma";
import { StyledAbout } from "./client";
import { threeCol } from "@/exports/constant";
import Section from "@/components/Common/Section";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";

export const metadata = { title: "About" };

export default async function AboutPage() {
    const admins = await prisma.admin.findMany({
        select: { image: true, name: true, title: true },
        take: 6,
        orderBy: { phone: "asc" },
    });

    return (
        <>
            <StyledAbout>
                <Stack gap={2}>
                    <Typography variant="h4" fontWeight={800}>
                        What we do
                    </Typography>
                    <Typography>
                        The most comprehensive repairs available at PhoneCareHub. Any device, mobile or tablet can be repaired or upgraded
                        by us, learn more about us and see why we are the best choice for device repairs and upgrades.
                    </Typography>
                    <Typography align="right" variant="h5" fontWeight={800} borderRight={6} borderColor="secondary.main" pr={2}>
                        10+ Years Of Working Experience In Quality Repair Services.
                    </Typography>
                    <Typography>
                        We have a fully trained, experienced service department ready to handle all of your service needs. We have been in
                        the repair and service business since 2006.
                    </Typography>
                </Stack>
                <Box display={{ xs: "none", md: "block" }} ml="auto">
                    <Image src="/images/about/page.jpg" alt="" style={{ width: "100%" }} width={400} height={400} />
                </Box>
            </StyledAbout>
            <Section title="Our Teams">
                <Grid container columns={threeCol} spacing={3}>
                    {admins.map(({ image, name, title }, idx) => (
                        <Grid item key={idx} xs={4}>
                            <Card>
                                <CardContent
                                    sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
                                >
                                    <Image src={image} alt="" width={128} height={128} style={{ borderRadius: 9999, margin: 24 }} />
                                    <Typography variant="h6" fontWeight={600}>
                                        {name}
                                    </Typography>
                                    <Typography>{title}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Section>
        </>
    );
}
