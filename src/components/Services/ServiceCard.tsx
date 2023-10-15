import { Service } from "@/types/response";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

export default function ServiceCard({ service }: { service: Service }) {
    const { name, image, description } = service;

    return (
        <Card>
            <CardMedia sx={{ height: 160 }} image={image} title="green iguana" />
            <CardContent>
                <Typography variant="h6" fontWeight={600}>
                    {name}
                </Typography>
                <Typography color="text.secondary">{description}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" endIcon={<ShoppingCartRoundedIcon />} fullWidth>
                    Book Now
                </Button>
            </CardActions>
        </Card>
    );
}
