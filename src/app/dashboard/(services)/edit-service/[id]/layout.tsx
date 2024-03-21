import Banner from "@/components/Common/Banner";

export default function EditServiceLayout({ children }: React.PropsWithChildren) {
    return (
        <>
            <Banner>Edit Service</Banner>
            {children}
        </>
    );
}
