import Banner from "@/components/Common/Banner";

export default function MOfflineAppointmentLayout({ children }: React.PropsWithChildren) {
    return (
        <>
            <Banner>Update OfflineAppointment</Banner>
            {children}
        </>
    );
}
