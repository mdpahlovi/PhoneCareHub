import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import useAxiosRequest from "./useAxiosRequest";

export default function useUpdateData(path: string, id: string, noRedirect?: boolean) {
    const axios = useAxiosRequest();
    const { push, refresh } = useRouter();
    const [loading, setLoading] = useState(false);

    const handleUpdate = (data: any) => {
        setLoading(true);
        axios
            .patch(`/${path}/${id}`, data)
            .then((res: any) => {
                refresh();
                setLoading(false);
                toast.success(res.message);
                !noRedirect && push(`/dashboard/${path}s`);
            })
            .catch((error) => {
                setLoading(false);
                toast.error(error.message);
            });
    };

    return { handleUpdate, loading };
}
