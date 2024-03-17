import Navbar from "@/layouts/Main/Navbar";
import Footer from "@/layouts/Main/Footer";

export default function MainLayout({ children }: React.PropsWithChildren) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
