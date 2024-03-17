"use client";

import { useEffect } from "react";
import { baseAxios } from "@/exports/axios";
import { useSession } from "next-auth/react";

export default function useAxiosRequest() {
    const { data } = useSession();

    useEffect(() => {
        const requestIntercept = baseAxios.interceptors.request.use((config) => {
            if (!config.headers["authorization"]) config.headers["authorization"] = data?.token;
            return config;
        });

        return () => baseAxios.interceptors.request.eject(requestIntercept);
    }, [data]);

    return baseAxios;
}
