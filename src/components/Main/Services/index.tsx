import Link from "next/link";
import { threeCol } from "@/exports/constant";
import { StyledTypography } from "@/components/Common/StyledTypography";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";

export default function Services({ services }: { services: { id: string; name: string; image: string; description: string }[] }) {
    return (
        <Grid container columns={threeCol} spacing={3}>
            {services.map(({ id, image, name, description }) => (
                <Grid item key={id} xs={4}>
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
                </Grid>
            ))}
        </Grid>
    );
}
