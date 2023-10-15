import { useState } from "react";
import { useRouter } from "next/navigation";
import useAxiosRequest from "./useAxiosRequest";
import toast from "react-hot-toast";

export default function useCreateData(path: string, noRedirect?: boolean) {
    const axios = useAxiosRequest();
    const { push, refresh } = useRouter();
    const [loading, setLoading] = useState(false);

    const handleCreate = (data: any) => {
        setLoading(true);
        axios
            .post(`/${path}/create`, data)
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

    return { handleCreate, loading };
}
