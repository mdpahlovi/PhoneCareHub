import Provider from "@/layouts/Provider";
import DialogProvider from "@/layouts/Dialogs";
import ToastProvider from "@/layouts/ToastProvider";

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
                    <DialogProvider />
                </body>
            </Provider>
        </html>
    );
}
