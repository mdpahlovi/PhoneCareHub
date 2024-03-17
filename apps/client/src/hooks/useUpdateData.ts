import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import useAxiosRequest from "./useAxiosRequest";
import { useSession } from "next-auth/react";

export default function useUpdateData(path: string, redirectPath?: string) {
    const axios = useAxiosRequest();
    const { update } = useSession();
    const { push, refresh } = useRouter();
    const [loading, setLoading] = useState(false);

    const handleUpdate = (data: any) => {
        setLoading(true);
        axios
            .patch(path, data)
            .then((res: any) => {
                refresh();
                setLoading(false);
                toast.success(res.message);
                path === "/profile" && update({ name: res.data.name, image: res.data.image });
                redirectPath && push(`/dashboard/${redirectPath}`);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                toast.error(error.message);
            });
    };

    return { handleUpdate, loading };
}
