import Link from "next/link";
import { Service } from "@/types/response";
import { StyledTypography } from "@/components/Common/StyledTypography";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

export default function ServiceCard({ service }: { service: Service }) {
    const { id, name, image, description } = service;

    return (
        <Card>
            <CardMedia sx={{ height: 160 }} image={image} title="green iguana" />
            <CardContent>
                <Typography variant="h6" fontWeight={600}>
                    {name}
                </Typography>
                <StyledTypography line="4" color="text.secondary">
                    {description}
                </StyledTypography>
            </CardContent>
            <CardActions>
                <Link href={`/appointment/${id}?type=online`} style={{ display: "block", width: "100%" }}>
                    <Button size="small" endIcon={<ShoppingCartRoundedIcon />} fullWidth>
                        Book Now
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}
