import Banner from "@/components/Common/Banner";
import React from "react";

export default function MOnlineAppointmentLayout({ children }: React.PropsWithChildren) {
    return (
        <>
            <Banner>Update OnlineAppointment</Banner>
            {children}
        </>
    );
}
