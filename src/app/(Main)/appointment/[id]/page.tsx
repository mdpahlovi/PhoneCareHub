/* eslint-disable react/jsx-key */
import { Container } from "@mui/material";
import TabContext from "@/components/Common/TabContext";
import Banner from "@/components/Common/Banner";
import { getservice } from "@/libs/fetch";
import OnlineAppointmentForm from "@/components/Appoitment/OnlineAppointmentForm";
import OfflineAppointmentForm from "@/components/Appoitment/OfflineAppointmentForm";

type Params = { params: { id: string | undefined } };
type SearchParams = { searchParams: { type: string | undefined } };

export default async function Appointment({ params, searchParams }: Params & SearchParams) {
    const service = await getservice(params?.id!);
    const value = searchParams?.type ? searchParams.type : "online";

    return (
        <>
            <Banner>{service?.data?.name}</Banner>
            <Container sx={{ my: 5 }}>
                <TabContext
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
