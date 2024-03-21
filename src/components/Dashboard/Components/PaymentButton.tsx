"use client";

import toast from "react-hot-toast";
import { Button } from "@mui/material";
import useAxiosRequest from "@/hooks/useAxiosRequest";

export default function PaymentButton({ onlineAppointmentId }: { onlineAppointmentId: string }) {
    const axios = useAxiosRequest();

    const handlePaymentInit = () => {
        axios
            .post(`/payment/init/${onlineAppointmentId}`)
            .then((res) => window.open(res.data, "_blank"))
            .catch((error) => toast.error(error.message));
    };

    return (
        <Button size="small" onClick={handlePaymentInit} sx={{ whiteSpace: "nowrap" }}>
            Pay Now
        </Button>
    );
}
