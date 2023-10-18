import { BASE_URL } from "@/exports/axios";
import { Admin, Blog, FAQ, IApiResponse, OfflineAppointment, OnlineAppointment, Service, User } from "@/types/response";

export async function getServerFAQs(): Promise<IApiResponse<FAQ[]>> {
    const res = await fetch(`${BASE_URL}/faq`);

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getServerServices(size: number, page: number, search: string): Promise<IApiResponse<Service[]>> {
    const res = await fetch(`${BASE_URL}/service?size=${size}&page=${page}&search=${search}`);

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getClientServices(size: number, page: number, search: string): Promise<IApiResponse<Service[]>> {
    const res = await fetch(`${BASE_URL}/service?size=${size}&page=${page}&search=${search}`, { cache: "no-cache" });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getservice(id: string): Promise<IApiResponse<Service>> {
    const res = await fetch(`${BASE_URL}/service/${id}`, { cache: "no-cache" });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getServerBlogs(size: number, page: number, search: string): Promise<IApiResponse<Blog[]>> {
    const res = await fetch(`${BASE_URL}/blog?size=${size}&page=${page}&search=${search}`);

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getClientBlogs(size: number, page: number, search: string): Promise<IApiResponse<Blog[]>> {
    const res = await fetch(`${BASE_URL}/blog?size=${size}&page=${page}&search=${search}`, { cache: "no-cache" });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getblog(id: string): Promise<IApiResponse<Blog>> {
    const res = await fetch(`${BASE_URL}/blog/${id}`, { cache: "no-cache" });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getClientFaqs(): Promise<IApiResponse<FAQ[]>> {
    const res = await fetch(`${BASE_URL}/faq`, { cache: "no-cache" });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getalladmins(token: string | undefined, page: number, size: number): Promise<IApiResponse<Admin[]>> {
    const res = await fetch(`${BASE_URL}/admin?page=${page + 1}&size=${size}`, {
        cache: "no-cache",
        headers: { authorization: token! },
    });

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getallusers(token: string | undefined, page: number, size: number): Promise<IApiResponse<User[]>> {
    const res = await fetch(`${BASE_URL}/user?page=${page + 1}&size=${size}`, {
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
    status: string | undefined,
    appointmentDate?: Date | string
): Promise<IApiResponse<OfflineAppointment[]>> {
    let statusParams;
    let appointmentDateParams;
    if (status) statusParams = getStatusParams(status);
    if (appointmentDate) appointmentDateParams = `appointmentDate=${appointmentDate}`;

    const res = await fetch(
        `${BASE_URL}/offlineAppointment?search=${search}&size=${size}&page=${page + 1}&${statusParams}&${appointmentDateParams}`,
        {
            cache: "no-cache",
            headers: { authorization: token! },
        }
    );

    if (!res.ok) throw new Error("Failed To Fetch Data");
    return res.json();
}

export async function getallOnlineAppointment(
    token: string | undefined,
    search: string,
    size: number,
    page: number,
    status: string | undefined
): Promise<IApiResponse<OnlineAppointment[]>> {
    let statusParams;
    if (status) statusParams = getStatusParams(status);

    const res = await fetch(`${BASE_URL}/onlineAppointment?search=${search}&size=${size}&page=${page + 1}&${statusParams}`, {
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

const getStatusParams = (status: string) => {
    if (status === "appointments") {
        return `status=pending&status=reviewing&status=payment&status=servicing`;
    } else {
        return `status=${status}`;
    }
};
