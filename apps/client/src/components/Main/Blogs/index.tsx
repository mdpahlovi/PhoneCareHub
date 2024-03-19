import dayjs from "dayjs";
import { StyledTypography } from "@/components/Common/StyledTypography";
import { Button, Card, CardContent, CardMedia, Chip, Grid, Typography } from "@mui/material";

type Blog = { id: string; image: string; source: string; publishedDate: Date; title: string; content: string };

export default function Blogs({ blogs }: { blogs: Blog[] }) {
    return (
        <Grid container columns={{ xs: 4, md: 8 }} spacing={3}>
            {blogs.map(({ id, image, source, publishedDate, title, content }, idx) => (
                <Grid item key={id} xs={4}>
                    <Card sx={{ position: "relative", display: "flex", alignItems: "center" }}>
                        <CardMedia
                            component="img"
                            image={image}
                            sx={{ position: "absolute", display: { xs: "none", sm: "block" }, width: "224px", minHeight: "100%" }}
                        />
                        <CardContent sx={{ ml: { sm: "224px" } }}>
                            <Chip size="small" label={source} color="secondary" />
                            <Typography mt={0.5}>{dayjs(publishedDate).format("MMMM D, YYYY")}</Typography>
                            <Typography variant="h6" fontWeight={600} lineHeight={1.25}>
                                {title}
                            </Typography>
                            <StyledTypography line="3" color="text.secondary">
                                {content}
                            </StyledTypography>
                            <Button size="small" sx={{ mt: 1 }}>
                                Read More
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
