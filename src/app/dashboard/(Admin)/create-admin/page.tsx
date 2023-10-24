import Banner from "@/components/Common/Banner";
import CreateAdminForm from "@/components/Dashboard/CreateUserOrAdmin/CreateUserOrAdminForm";

export const metadata = { title: "Create Admin" };

export default function CreateAdmin() {
    return (
        <>
            <Banner>Create Admin</Banner>
            <CreateAdminForm path="admin" />
        </>
    );
}
