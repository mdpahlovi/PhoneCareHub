import Provider from "@/layouts/Provider";

export const metadata = {
    title: {
        default: "mui",
        template: "%s - mui",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <Provider>
                <body>{children}</body>
            </Provider>
        </html>
    );
}
