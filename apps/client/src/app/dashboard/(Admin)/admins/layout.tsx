import Banner from "@/components/Common/Banner";

export default function AdminLayout({ children }: React.PropsWithChildren) {
    return (
        <>
            <Banner>All Admin</Banner>
            {children}
        </>
    );
}
