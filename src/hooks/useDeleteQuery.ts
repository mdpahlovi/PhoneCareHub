import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useDeleteQuery() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const deleteQueryString = useCallback(
        (name: string) => {
            const params = new URLSearchParams(searchParams);
            params.delete(name);
            return params.toString();
        },
        [searchParams]
    );

    return (name: string) => router.push(pathname + "?" + deleteQueryString(name));
}
