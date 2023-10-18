import { Blog } from "@/types/response";
import { format, parseISO } from "date-fns";
import { StyledTypography } from "../Common/StyledTypography";
import { Card, CardMedia, CardContent, Typography, Chip, Button, CardActions } from "@mui/material";

export default function BlogCard({ blog }: { blog: Blog }) {
    const { id, source, publishedDate, content, image, title } = blog;

    return (
        <Card sx={{ position: "relative", display: "flex", alignItems: "center" }}>
            <CardMedia
                component="img"
                image={image}
                sx={{ position: "absolute", display: { xs: "none", sm: "block" }, width: "224px", minHeight: "100%" }}
            />
            <CardContent sx={{ ml: { sm: "224px" } }}>
                <Chip size="small" label={source} color="secondary" />
                <Typography mt={0.5}>{format(parseISO(publishedDate), "PPP")}</Typography>
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
            <CardActions></CardActions>
        </Card>
    );
}
