import Provider from "@/layouts/Provider";
import ToastProvider from "@/layouts/ToastProvider";
import ConfirmDeleteDialog from "@/layouts/Dialogs/ConfirmDeleteDialog";

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
                    <ConfirmDeleteDialog />
                </body>
            </Provider>
        </html>
    );
}
