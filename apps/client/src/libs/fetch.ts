import { BASE_URL } from "@/exports/axios";
import { Admin, Blog, FAQ, IApiResponse, OfflineAppointment, OnlineAppointment, Review, Service, User } from "@/types/response";

export async function getAllReview(): Promise<IApiResponse<Review[]>> {
    const res = await fetch(`${BASE_URL}/review`, { cache: "no-cache" });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getAllService(size: number, page: number, search: string): Promise<IApiResponse<Service[]>> {
    const res = await fetch(`${BASE_URL}/service?size=${size}&page=${page}&search=${search}`, { cache: "no-cache" });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getservice(id: string): Promise<IApiResponse<Service>> {
    const res = await fetch(`${BASE_URL}/service/${id}`, { cache: "no-cache" });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getAllBlog(size: number, page: number, search: string): Promise<IApiResponse<Blog[]>> {
    const res = await fetch(`${BASE_URL}/blog?size=${size}&page=${page}&search=${search}`, { cache: "no-cache" });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getblog(id: string): Promise<IApiResponse<Blog>> {
    const res = await fetch(`${BASE_URL}/blog/${id}`, { cache: "no-cache" });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getAllFAQ(): Promise<IApiResponse<FAQ[]>> {
    const res = await fetch(`${BASE_URL}/faq`, { cache: "no-cache" });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getalladmins(token: string | undefined, search: string, page: number, size: number): Promise<IApiResponse<Admin[]>> {
    const res = await fetch(`${BASE_URL}/admin?search=${search}&page=${page + 1}&size=${size}`, {
        cache: "no-cache",
        headers: { authorization: token! },
    });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getallusers(token: string | undefined, search: string, page: number, size: number): Promise<IApiResponse<User[]>> {
    const res = await fetch(`${BASE_URL}/user?search=${search}&page=${page + 1}&size=${size}`, {
        cache: "no-cache",
        headers: { authorization: token! },
    });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getprofile(token: string | undefined): Promise<IApiResponse<Admin | User>> {
    const res = await fetch(`${BASE_URL}/profile`, { cache: "no-cache", headers: { authorization: token! } });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getallOfflineAppointment(
    token: string | undefined,
    search: string,
    size: number,
    page: number,
    status: string
): Promise<IApiResponse<OfflineAppointment[]>> {
    const statusParams = getOfflineStatus(status);
    const res = await fetch(`${BASE_URL}/offlineAppointment?search=${search}&size=${size}&page=${page + 1}${statusParams}`, {
        cache: "no-cache",
        headers: { authorization: token! },
    });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getallOnlineAppointment(
    token: string | undefined,
    search: string,
    size: number,
    page: number,
    status: string
): Promise<IApiResponse<OnlineAppointment[]>> {
    const statusParams = getOnlineStatus(status);
    const res = await fetch(`${BASE_URL}/onlineAppointment?search=${search}&size=${size}&page=${page + 1}${statusParams}`, {
        cache: "no-cache",
        headers: { authorization: token! },
    });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getOnlineAppointment(id: string, token: string | undefined): Promise<IApiResponse<OnlineAppointment>> {
    const res = await fetch(`${BASE_URL}/onlineAppointment/${id}`, {
        cache: "no-cache",
        headers: { authorization: token! },
    });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getOfflineAppointment(id: string, token: string | undefined): Promise<IApiResponse<OfflineAppointment>> {
    const res = await fetch(`${BASE_URL}/offlineAppointment/${id}`, {
        cache: "no-cache",
        headers: { authorization: token! },
    });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getAppointment(
    id: string,
    type: string | undefined,
    token: string | undefined
): Promise<IApiResponse<OnlineAppointment | OfflineAppointment>> {
    let res;
    if (type) {
        res = await fetch(`${BASE_URL}/${type}Appointment/${id}`, {
            cache: "no-cache",
            headers: { authorization: token! },
        });
    } else {
        const onlineAppointment = await fetch(`${BASE_URL}/onlineAppointment/${id}`, {
            cache: "no-cache",
            headers: { authorization: token! },
        });
        if (onlineAppointment.ok) res = onlineAppointment;

        const offlineAppointment = await fetch(`${BASE_URL}/offlineAppointment/${id}`, {
            cache: "no-cache",
            headers: { authorization: token! },
        });
        if (offlineAppointment.ok) res = offlineAppointment;
    }

    if (!res?.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export function isOnlineAppointment(response: IApiResponse<OnlineAppointment | OfflineAppointment>): boolean {
    return (response.data as OnlineAppointment) !== undefined;
}

const getOnlineStatus = (status: string) => {
    if (status === "appointments") {
        return `&status=pending&status=shipping&status=receited&status=reviewing&status=payment&status=repairing`;
    } else if (status === "completed") {
        return `&status=returned&status=received`;
    } else {
        return `&status=${status}`;
    }
};

const getOfflineStatus = (status: string) => {
    if (status === "appointments") {
        return `&status=pending`;
    } else {
        return `&status=${status}`;
    }
};
