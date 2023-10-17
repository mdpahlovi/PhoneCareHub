import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import useAxiosRequest from "./useAxiosRequest";

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
                console.log(error);
                toast.error(error.message);
            });
    };

    return { handleCreate, loading };
}
