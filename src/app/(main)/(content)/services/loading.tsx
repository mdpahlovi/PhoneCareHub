import { StyledTypography } from "@/components/Common/StyledTypography";
import { threeCol } from "@/exports/constant";
import { Card, CardActions, CardContent, Grid, Skeleton, Typography } from "@mui/material";

export default function ServicesLoading() {
    return (
        <Grid container columns={threeCol} spacing={3}>
            {[...Array(6)].map((_, idx) => (
                <Grid size={{ xs: 4 }} key={idx}>
                    <Card>
                        <Skeleton variant="rectangular" height={160} />
                        <CardContent>
                            <Typography variant="h6" fontWeight={600}>
                                <Skeleton />
                            </Typography>
                            <StyledTypography line="4" color="text.secondary">
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                            </StyledTypography>
                        </CardContent>
                        <CardActions>
                            <Skeleton variant="rectangular" height={32} sx={{ width: "100%", borderRadius: 2 }} />
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
