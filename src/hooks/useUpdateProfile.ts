import { useState } from "react";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import useAxiosRequest from "./useAxiosRequest";

export default function useUpdateProfile() {
    const axios = useAxiosRequest();
    const { update } = useSession();
    const [loading, setLoading] = useState(false);

    const updateProfile = (data: any) => {
        setLoading(true);
        axios
            .patch("/profile", data)
            .then((res: any) => {
                if (res.success) {
                    setLoading(false);
                    update({ name: res.data.name, image: res.data.image });
                    toast.success(res.message);
                }
            })
            .catch((error) => {
                setLoading(false);
                toast.error(error.message);
            });
    };

    return { updateProfile, loading };
}
