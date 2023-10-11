import Provider from "@/layouts/Provider";

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
                <body>{children}</body>
            </Provider>
        </html>
    );
}
