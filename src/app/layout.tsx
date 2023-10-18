import Provider from "@/layouts/Provider";
import ToastProvider from "@/layouts/ToastProvider";
import ConfirmDeleteDialog from "@/layouts/Dialogs/ConfirmDeleteDialog";
import PaymentDialog from "@/layouts/Dialogs/PaymentDialog";
import ReviewDialog from "@/layouts/Dialogs/CreateReviewDialog";
import ChangePasswordDialog from "@/layouts/Dialogs/ChangePasswordDialog";

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
                    <ReviewDialog />
                    <ConfirmDeleteDialog />
                    <ChangePasswordDialog />
                </body>
            </Provider>
        </html>
    );
}
