import { getservice } from "@/libs/fetch";
import EditServiceForm from "@/components/Dashboard/EditService/EditServiceForm";

export const metadata = { title: "Edit Service" };

export default async function EditService({ params }: { params: { id: string } }) {
    const service = await getservice(params.id);

    return <EditServiceForm service={service.data!} />;
}
