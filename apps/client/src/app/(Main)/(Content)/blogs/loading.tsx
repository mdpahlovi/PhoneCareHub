import { Card, CardContent, Grid, Skeleton, Typography } from "@mui/material";

export default function BlogsLoading() {
    return (
        <Grid container columns={{ xs: 4, md: 8 }} spacing={3}>
            {[...Array(4)].map((_, idx) => (
                <Grid item key={idx} xs={4}>
                    <Card sx={{ position: "relative", display: "flex", alignItems: "center" }}>
                        <Skeleton
                            variant="rectangular"
                            sx={{ position: "absolute", display: { xs: "none", sm: "block" }, width: "224px", minHeight: "100%" }}
                        />
                        <CardContent sx={{ ml: { sm: "224px" }, width: "100%" }}>
                            <Skeleton variant="rectangular" width={96} height={24} sx={{ borderRadius: 1.5 }} />
                            <Typography mt={0.5}>
                                <Skeleton width={128} />
                            </Typography>
                            <Typography variant="h6" fontWeight={600} lineHeight={1.25}>
                                <Skeleton />
                            </Typography>
                            <Typography color="text.secondary">
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                            </Typography>
                            <Skeleton variant="rectangular" width={112} height={32} sx={{ mt: 1, borderRadius: 2 }} />
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
