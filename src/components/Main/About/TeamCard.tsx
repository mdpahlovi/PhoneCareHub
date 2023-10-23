import Image from "next/image";
import { Card, CardContent, Typography } from "@mui/material";

export default function TeamCard() {
    return (
        <Card>
            <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Image
                    src="https://res.cloudinary.com/dikezpkeg/image/upload/v1697386166/PhoneCareHub/Profile/vwc3ohohjsbva00a4lxu.jpg"
                    alt=""
                    width={128}
                    height={128}
                    style={{ borderRadius: 9999, margin: 24 }}
                />
                <Typography variant="h6" fontWeight={600}>
                    MD Pahlovi
                </Typography>
                <Typography>Support Manager</Typography>
            </CardContent>
        </Card>
    );
}
