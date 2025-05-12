import Section from "@/components/Common/Section";
import { service_process } from "@/exports/data";
import { Grid, Stack, Typography } from "@mui/material";
import { createElement } from "react";
import { StyledProcessBackground } from "./Styled";

export default function ServiceProcess() {
    const borderWhite = { border: 1, borderRadius: 1, borderColor: "rgba(255, 255, 255, 0.12)" };
    return (
        <StyledProcessBackground>
            <Section title="Service Process">
                <Grid container columns={{ xs: 3, sm: 6, md: 12 }} spacing={3}>
                    {service_process.map(({ icon, title, details }, idx) => (
                        <Grid size={{ xs: 3 }} key={idx}>
                            <Stack height="100%" p={3} pb={2} {...borderWhite} gap={2}>
                                <Stack direction="row" gap={2}>
                                    {createElement(icon)}
                                    <Typography fontWeight={600}>{title}</Typography>
                                </Stack>
                                <Typography variant="body1" color="rgba(255, 255, 255, 0.75)">
                                    {details}
                                </Typography>
                                <Typography mt="auto" variant="h3" fontWeight={600} color="rgba(255, 255, 255, 0.75)">
                                    0{idx + 1}.
                                </Typography>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Section>
        </StyledProcessBackground>
    );
}
