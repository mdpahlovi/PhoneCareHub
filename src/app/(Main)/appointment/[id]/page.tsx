/* eslint-disable react/jsx-key */
import { getservice } from "@/libs/fetch";
import { Container } from "@mui/material";
import Banner from "@/components/Common/Banner";
import TabContext from "@/components/Common/TabContext";
import OnlineAppointmentForm from "@/components/Appoitment/OnlineAppointmentForm";
import OfflineAppointmentForm from "@/components/Appoitment/OfflineAppointmentForm";

type Params = { params: { id?: string }; searchParams: { type?: string } };

export default async function Appointment({ params, searchParams }: Params) {
    const service = await getservice(params?.id!);
    const value = searchParams?.type ? searchParams.type : "online";

    return (
        <>
            <Banner>{service?.data?.name}</Banner>
            <Container sx={{ my: 5 }}>
                <TabContext
                    query="type"
                    value={value}
                    values={["online", "offline"]}
                    tabs={[
                        <OnlineAppointmentForm serviceId={service?.data?.id!} />,
                        <OfflineAppointmentForm serviceId={service?.data?.id!} />,
                    ]}
                />
            </Container>
        </>
    );
}
