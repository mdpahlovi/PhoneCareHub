import Banner from "@/components/Common/Banner";

export default function EditBlogLayout({ children }: React.PropsWithChildren) {
    return (
        <>
            <Banner>Edit Blog</Banner>
            {children}
        </>
    );
}
