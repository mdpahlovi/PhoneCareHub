import Image from "next/image";
import { Admin } from "@prisma/client";
import { Card, CardContent, Typography } from "@mui/material";

export default function TeamCard({ admin }: { admin: Admin }) {
    const { image, name, title } = admin;

    return (
        <Card>
            <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Image src={image} alt="" width={128} height={128} style={{ borderRadius: 9999, margin: 24 }} />
                <Typography variant="h6" fontWeight={600}>
                    {name}
                </Typography>
                <Typography>{title}</Typography>
            </CardContent>
        </Card>
    );
}
