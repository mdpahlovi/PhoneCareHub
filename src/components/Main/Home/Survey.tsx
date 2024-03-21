import { Fragment } from "react";
import { survives } from "@/exports/data";
import { Box, Container, Divider, Typography, CountUp } from "@/exports/mui";

export default function Survey() {
    return (
        <Box mb={7.5} bgcolor="divider" py={7.5}>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    gap: 2,
                    textAlign: "center",
                }}
            >
                {survives.map(({ title, count }, idx) => (
                    <Fragment key={idx}>
                        {idx !== 0 ? (
                            <Divider orientation="vertical" variant="middle" flexItem sx={{ display: { xs: "none", sm: "block" } }} />
                        ) : null}
                        {idx !== 0 ? <Divider variant="middle" flexItem sx={{ display: { sm: "none" } }} /> : null}
                        <Box>
                            <Typography sx={{ fontSize: { xs: "3rem", sm: "2rem", md: "3rem" }, fontWeight: 800 }}>
                                <CountUp end={count} start={5} />
                            </Typography>
                            <Typography>{title}</Typography>
                        </Box>
                    </Fragment>
                ))}
            </Container>
        </Box>
    );
}
