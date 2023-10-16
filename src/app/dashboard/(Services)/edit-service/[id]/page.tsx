import { getservice } from "@/libs/fetch";
import Banner from "@/components/Common/Banner";
import EditServiceForm from "@/components/Dashboard/EditService/EditServiceForm";

export const metadata = { title: "Edit Service" };

export default async function EditService({ params }: { params: { id: string } }) {
    const service = await getservice(params.id);

    return (
        <>
            <Banner>Edit Service</Banner>
            <EditServiceForm service={service.data!} />
        </>
    );
}
