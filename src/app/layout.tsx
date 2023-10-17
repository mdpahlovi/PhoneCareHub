import Provider from "@/layouts/Provider";
import ToastProvider from "@/layouts/ToastProvider";
import ConfirmDeleteDialog from "@/layouts/Dialogs/ConfirmDeleteDialog";
import PaymentDialog from "@/layouts/Dialogs/PaymentDialog";

export const metadata = {
    title: {
        default: "PhoneCareHub",
        template: "%s - PhoneCareHub",
    },
};

export default function RootLayout({ children }: React.PropsWithChildren) {
    return (
        <html lang="en">
            <Provider>
                <body>
                    {children}
                    <ToastProvider />
                    <PaymentDialog />
                    <ConfirmDeleteDialog />
                </body>
            </Provider>
        </html>
    );
}
